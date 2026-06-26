create table if not exists stockflow_products (
  household_id text not null,
  id text not null,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (household_id, id)
);

create index if not exists stockflow_products_household_id_idx
  on stockflow_products (household_id);

-- MVP note:
-- This schema is intentionally simple so StockFlow can sync from a static Vercel app.
-- Before sharing publicly, add Supabase Auth and Row Level Security policies.
