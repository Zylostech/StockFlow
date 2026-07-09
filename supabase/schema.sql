create table if not exists stockflow_households (
  id text primary key,
  name text not null,
  share_code text,
  created_at timestamptz not null default now()
);

alter table stockflow_households
  add column if not exists share_code text;

create table if not exists stockflow_household_members (
  household_id text not null references stockflow_households (id) on delete cascade,
  email text not null,
  user_id uuid references auth.users (id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'member')),
  created_at timestamptz not null default now(),
  primary key (household_id, email),
  unique (household_id, user_id)
);

create table if not exists stockflow_products (
  household_id text not null references stockflow_households (id) on delete cascade,
  id text not null,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users (id),
  primary key (household_id, id)
);

create table if not exists stockflow_barcode_dictionary (
  household_id text not null references stockflow_households (id) on delete cascade,
  barcode text not null,
  name text not null,
  category text not null default 'その他',
  min_quantity integer not null default 1,
  memo text not null default '',
  image_url text not null default '',
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users (id),
  primary key (household_id, barcode)
);

alter table stockflow_products
  add column if not exists updated_by uuid references auth.users (id);

create index if not exists stockflow_products_household_id_idx
  on stockflow_products (household_id);

create index if not exists stockflow_products_data_gin_idx
  on stockflow_products using gin (data);

create index if not exists stockflow_members_user_id_idx
  on stockflow_household_members (user_id);

create index if not exists stockflow_barcode_dictionary_household_id_idx
  on stockflow_barcode_dictionary (household_id);

create unique index if not exists stockflow_households_share_code_idx
  on stockflow_households (share_code)
  where share_code is not null;

insert into stockflow_households (id, name)
values ('family-home', 'StockFlow Home')
on conflict (id) do nothing;

update stockflow_households
set share_code = 'FAMILY-HOME'
where id = 'family-home'
  and share_code is null;

alter table stockflow_households enable row level security;
alter table stockflow_household_members enable row level security;
alter table stockflow_products enable row level security;
alter table stockflow_barcode_dictionary enable row level security;

revoke all on table stockflow_households from anon;
revoke all on table stockflow_household_members from anon;
revoke all on table stockflow_products from anon;
revoke all on table stockflow_barcode_dictionary from anon;

grant usage on schema public to authenticated;
grant select on table stockflow_households to authenticated;
grant select, insert, update on table stockflow_household_members to authenticated;
grant select, insert, update, delete on table stockflow_products to authenticated;
grant select, insert, update, delete on table stockflow_barcode_dictionary to authenticated;

create or replace function public.stockflow_is_member(target_household_id text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from stockflow_household_members members
    where members.household_id = target_household_id
      and members.user_id = auth.uid()
  );
$$;

create or replace function public.stockflow_is_owner(target_household_id text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from stockflow_household_members members
    where members.household_id = target_household_id
      and members.user_id = auth.uid()
      and members.role = 'owner'
  );
$$;

grant execute on function public.stockflow_is_member(text) to authenticated;
grant execute on function public.stockflow_is_owner(text) to authenticated;

drop policy if exists "household members can read their household" on stockflow_households;
create policy "household members can read their household"
  on stockflow_households
  for select
  to authenticated
  using (stockflow_is_member(id));

drop policy if exists "members can read family members" on stockflow_household_members;
create policy "members can read family members"
  on stockflow_household_members
  for select
  to authenticated
  using (stockflow_is_member(household_id));

drop policy if exists "owners can invite family members" on stockflow_household_members;
create policy "owners can invite family members"
  on stockflow_household_members
  for insert
  to authenticated
  with check (stockflow_is_owner(household_id));

drop policy if exists "owners can update family members" on stockflow_household_members;
create policy "owners can update family members"
  on stockflow_household_members
  for update
  to authenticated
  using (stockflow_is_owner(household_id))
  with check (stockflow_is_owner(household_id));

drop policy if exists "members can read household products" on stockflow_products;
create policy "members can read household products"
  on stockflow_products
  for select
  to authenticated
  using (stockflow_is_member(household_id));

drop policy if exists "members can insert household products" on stockflow_products;
create policy "members can insert household products"
  on stockflow_products
  for insert
  to authenticated
  with check (stockflow_is_member(household_id));

drop policy if exists "members can update household products" on stockflow_products;
create policy "members can update household products"
  on stockflow_products
  for update
  to authenticated
  using (stockflow_is_member(household_id))
  with check (stockflow_is_member(household_id));

drop policy if exists "members can delete household products" on stockflow_products;
create policy "members can delete household products"
  on stockflow_products
  for delete
  to authenticated
  using (stockflow_is_member(household_id));

drop policy if exists "members can read barcode dictionary" on stockflow_barcode_dictionary;
create policy "members can read barcode dictionary"
  on stockflow_barcode_dictionary
  for select
  to authenticated
  using (stockflow_is_member(household_id));

drop policy if exists "members can insert barcode dictionary" on stockflow_barcode_dictionary;
create policy "members can insert barcode dictionary"
  on stockflow_barcode_dictionary
  for insert
  to authenticated
  with check (stockflow_is_member(household_id));

drop policy if exists "members can update barcode dictionary" on stockflow_barcode_dictionary;
create policy "members can update barcode dictionary"
  on stockflow_barcode_dictionary
  for update
  to authenticated
  using (stockflow_is_member(household_id))
  with check (stockflow_is_member(household_id));

drop policy if exists "members can delete barcode dictionary" on stockflow_barcode_dictionary;
create policy "members can delete barcode dictionary"
  on stockflow_barcode_dictionary
  for delete
  to authenticated
  using (stockflow_is_member(household_id));

create or replace function public.stockflow_claim_household()
returns stockflow_household_members
language plpgsql
security definer
set search_path = public
as $$
declare
  member stockflow_household_members;
  user_email text := lower(auth.jwt() ->> 'email');
begin
  if auth.uid() is null or user_email is null then
    return null;
  end if;

  insert into stockflow_household_members (household_id, email, user_id, role)
  select 'family-home', user_email, auth.uid(), 'owner'
  where not exists (
    select 1 from stockflow_household_members
    where household_id = 'family-home'
  )
  on conflict (household_id, email) do nothing;

  update stockflow_household_members
  set user_id = auth.uid()
  where household_id = 'family-home'
    and lower(email) = user_email
    and user_id is null;

  select *
  into member
  from stockflow_household_members
  where household_id = 'family-home'
    and user_id = auth.uid()
  limit 1;

  return member;
end;
$$;

grant execute on function public.stockflow_claim_household() to authenticated;

comment on table stockflow_products is
  'StockFlow inventory source of truth. The data jsonb stores name, category, quantity, minQuantity, memo, expiryDate, barcode, imageUrl, shopping, and history.';

comment on column stockflow_products.household_id is
  'Family space identifier. RLS only allows authenticated members of this household to read or change rows.';

comment on table stockflow_barcode_dictionary is
  'Household barcode dictionary. When public APIs cannot identify a barcode, the family-entered product name is stored here for the next scan.';
