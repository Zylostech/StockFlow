const STORAGE_KEY = "stockflow.design.v2";
const SETTINGS_KEY = "stockflow.settings.v1";
const CLOUD_CONFIG_KEY = "stockflow.cloud.v1";
const PIN_KEY = "stockflow.pin.v1";
const SHARE_CODE = "FAMILY-HOME";
const RING_LENGTH = 314;
const SUPABASE_URL = "https://yswkmovtcesowsdqsskx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_0UWiXJNBT9vGbequqNvFXg_Jn-AZ7KV";
const STOCKFLOW_HOUSEHOLD_ID = "family-home";

const symbols = {
  house:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  shippingbox:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m4 8 8-4 8 4v9l-8 4-8-4V8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m4 8 8 4 8-4M12 12v9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  checklist:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 3 3 6-7M5 19h14M16 8h3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  plus:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  barcode:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6v12M7 6v12M11 6v12M14 6v12M20 6v12M17 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  xmark:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  gear:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a8.1 8.1 0 0 0 .1-1.2c0-.4 0-.8-.1-1.2l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2-1.1L14.7 5h-4l-.4 2.6a8 8 0 0 0-2 1.1l-2.4-1-2 3.4 2 1.5a8.1 8.1 0 0 0-.1 1.2c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 2 1.1l.4 2.6h4l.4-2.6a8 8 0 0 0 2-1.1l2.4 1 2-3.4-2.1-1.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  person2:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 20a5.5 5.5 0 0 1 11 0M14.5 17.5a4.5 4.5 0 0 1 6 2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bell:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M18 9a6 6 0 0 0-12 0c0 7-2.5 7-2.5 8.5h17C20.5 16 18 16 18 9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 20a2.8 2.8 0 0 0 5 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  cart:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M5 6h2l1.6 8.2a2 2 0 0 0 2 1.6h6.8a2 2 0 0 0 1.9-1.4L21 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/></svg>',
  minus:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

const productImages = {
  paper:
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=240&q=80",
  detergent:
    "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=240&q=80",
  tissue:
    "https://images.unsplash.com/photo-1607006483224-9462d5bd26a8?auto=format&fit=crop&w=240&q=80",
  diaper:
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=240&q=80",
  drink:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=240&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=240&q=80"
};

const barcodeProducts = {
  "4900000000010": {
    name: "トイレットペーパー",
    category: "紙用品",
    imageUrl: productImages.paper,
    minQuantity: 3
  },
  "4900000000027": {
    name: "洗濯洗剤",
    category: "洗濯",
    imageUrl: productImages.detergent,
    minQuantity: 2
  },
  "4900000000034": {
    name: "ティッシュ",
    category: "紙用品",
    imageUrl: productImages.tissue,
    minQuantity: 2
  },
  "4900000000041": {
    name: "オムツ",
    category: "育児",
    imageUrl: productImages.diaper,
    minQuantity: 8
  },
  "4900000000058": {
    name: "麦茶",
    category: "飲料",
    imageUrl: productImages.drink,
    minQuantity: 2
  }
};

const categorySymbols = {
  紙用品: "PAPER",
  洗濯: "WASH",
  育児: "BABY",
  飲料: "DRINK",
  キッチン: "HOME",
  その他: "ITEM"
};

const initialProducts = [];

const futureAdapters = {
  barcodeScanner: {
    open: openBarcodeScanner,
    stop: stopBarcodeScanner,
    lookup: lookupProductByBarcode
  },
  imageRecognition: {
    recognize: null,
    addRecognizedProduct: null
  },
  familySync: {
    pull: pullProductsFromCloud,
    push: syncProductsToCloud
  },
  notificationScheduler: null
};

window.StockFlowAdapters = futureAdapters;

const state = {
  activeTab: "home",
  searchQuery: "",
  products: loadProducts(),
  settings: loadSettings(),
  cloud: loadCloudConfig(),
  auth: {
    client: null,
    session: null,
    user: null,
    member: null,
    members: [],
    ready: false,
    pinUnlocked: false
  },
  scanner: {
    detector: null,
    reader: null,
    controls: null,
    timer: null,
    stream: null,
    active: false,
    lastCode: ""
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

boot();

async function boot() {
  hydrateSymbols(document);
  setToday();
  bindStaticEvents();
  activateTabFromHash();
  render();
  registerServiceWorker();
  await initAuth();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works without offline shell caching.
    });
  });
}

function createProduct(product) {
  const quantity = Number(product.quantity || 0);
  const minQuantity = Number(product.minQuantity || 1);
  const daysLeft = product.daysLeft ?? estimateDaysLeft(quantity);
  return {
    id: product.id || crypto.randomUUID(),
    barcode: product.barcode || "",
    source: product.source || "manual",
    name: product.name,
    category: product.category || "その他",
    imageUrl: normalizeImageUrl(product.imageUrl, product.source),
    quantity,
    minQuantity,
    daysLeft,
    nextOutDate: product.nextOutDate || dateAfter(daysLeft),
    shopping: {
      autoAdded: quantity <= minQuantity || daysLeft <= 6,
      completed: product.shopping?.completed || false
    },
    history: product.history || []
  };
}

function createBarcodeProduct(barcode, productInfo) {
  return createProduct({
    id: `barcode-${barcode}-${Date.now()}`,
    barcode,
    source: "barcode",
    name: productInfo.name,
    category: productInfo.category,
    imageUrl: productInfo.imageUrl,
    quantity: 1,
    minQuantity: productInfo.minQuantity || 1,
    daysLeft: 14,
    nextOutDate: dateAfter(14)
  });
}

function lookupProductByBarcode(barcode) {
  const normalized = normalizeBarcode(barcode);
  return (
    barcodeProducts[normalized] || {
      name: `バーコード商品 ${normalized.slice(-4)}`,
      category: "その他",
      imageUrl: productImages.kitchen,
      minQuantity: 1
    }
  );
}

function addProductByBarcode(barcode) {
  const normalized = normalizeBarcode(barcode);
  if (!normalized) {
    setScannerStatus("バーコード番号を入力してください。");
    return null;
  }

  const productInfo = lookupProductByBarcode(normalized);
  const existingProduct = state.products.find((product) => {
    return (
      product.barcode === normalized ||
      (!product.barcode &&
        product.name === productInfo.name &&
        product.category === productInfo.category)
    );
  });

  if (existingProduct) {
    state.products = state.products.map((product) => {
      if (product.id !== existingProduct.id) return product;
      return {
        ...product,
        barcode: normalized,
        source: product.source === "starter" ? "barcode" : product.source,
        quantity: product.quantity + 1,
        daysLeft: Math.max(product.daysLeft, 14),
        nextOutDate: dateAfter(Math.max(product.daysLeft, 14)),
        shopping: {
          ...product.shopping,
          completed: false
        },
        history: [
          ...(product.history || []),
          { type: "barcode-restock", barcode: normalized, at: new Date().toISOString() }
        ]
      };
    });
  } else {
    state.products = [
      createBarcodeProduct(normalized, productInfo),
      ...state.products
    ];
  }

  saveProducts({ sync: true });
  render();
  setActiveTab("inventory");
  closeBarcodeScanner();
  return productInfo;
}

function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const products = raw ? JSON.parse(raw) : initialProducts;
    return removeStarterProducts(products).map(normalizeProduct);
  } catch {
    return initialProducts;
  }
}

function normalizeProduct(product) {
  return createProduct({
    ...product,
    id: product.id,
    source: product.source,
    shopping: product.shopping,
    history: product.history
  });
}

function normalizeImageUrl(imageUrl, source) {
  if (!imageUrl || (source === "manual" && imageUrl === productImages.kitchen)) {
    return "";
  }

  return imageUrl;
}

function removeStarterProducts(products) {
  const list = Array.isArray(products) ? products : [];
  return list.filter((product) => product.source !== "starter");
}

function saveProducts(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(removeStarterProducts(state.products)));
  if (options.sync) {
    queueCloudSync();
  }
}

function loadSettings() {
  const fallback = {
    notificationsEnabled: false,
    autoShoppingEnabled: true,
    familySharingStatus: "not_connected"
  };

  try {
    return {
      ...fallback,
      ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}")
    };
  } catch {
    return fallback;
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function loadCloudConfig() {
  const fallback = getDefaultCloudConfig();

  try {
    return {
      ...fallback,
      ...JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY) || "{}")
    };
  } catch {
    return fallback;
  }
}

function getDefaultCloudConfig() {
  return {
    supabaseUrl: SUPABASE_URL,
    supabaseKey: SUPABASE_PUBLISHABLE_KEY,
    householdId: STOCKFLOW_HOUSEHOLD_ID
  };
}

function saveCloudConfig() {
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(state.cloud));
}

function getSupabaseClient() {
  return state.auth.client;
}

async function initAuth() {
  state.cloud = getDefaultCloudConfig();
  saveCloudConfig();
  setAuthMode("loading");
  setAuthGate(true);

  try {
    await waitForSupabaseClient();
    state.auth.client = window.createSupabaseClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY,
      {
        auth: {
          autoRefreshToken: true,
          detectSessionInUrl: true,
          persistSession: true
        }
      }
    );
  } catch {
    setAuthMode("email");
    setAuthGate(true);
    setAuthStatus("ログイン機能を読み込めませんでした。通信状態を確認してください。");
    setCloudStatus("ログイン機能の読み込みに失敗しました。");
    return;
  }

  const { data } = await state.auth.client.auth.getSession();
  await applySession(data.session);

  state.auth.client.auth.onAuthStateChange(async (_event, session) => {
    await applySession(session);
  });
}

function waitForSupabaseClient() {
  if (window.createSupabaseClient) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      window.removeEventListener("supabase-ready", onReady);
      reject(new Error("Supabase client timeout"));
    }, 8000);

    function onReady() {
      window.clearTimeout(timeout);
      resolve();
    }

    window.addEventListener("supabase-ready", onReady, { once: true });
  });
}

async function applySession(session) {
  state.auth.session = session;
  state.auth.user = session?.user || null;
  state.auth.ready = true;

  renderAuthState();

  if (!state.auth.user) {
    state.auth.pinUnlocked = false;
    setAuthMode("email");
    setAuthGate(true);
    setCloudStatus("ログインするとクラウド保存が有効になります。");
    return;
  }

  setCloudStatus("家族アカウントを確認しています...");
  const member = await claimHouseholdMembership();

  if (!member) {
    setCloudStatus("このメールはStockFlow家族メンバーに登録されていません。");
    return;
  }

  state.auth.member = member;
  await loadFamilyMembers();
  await pullProductsFromCloud();
  render();
  state.auth.pinUnlocked = true;
  setAuthGate(false);
}

function setAuthGate(visible) {
  const gate = $("#authGate");
  if (gate) {
    gate.hidden = !visible;
  }
}

function setAuthMode(mode) {
  $$("[data-auth-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.authPanel === mode);
  });
}

function renderAuthState() {
  const email = state.auth.user?.email || "未ログイン";
  $("#authEmailLabel").textContent = email;
  $("#familyShareStatus").textContent = state.auth.user ? "接続中" : "未ログイン";
  $("#familyShareDetail").textContent = state.auth.user
    ? `${email} で家族の在庫を同期しています。共有コードは ${SHARE_CODE} です。`
    : "ログインすると同じ家庭の在庫を同期します。";
  $("#familyShareCode").textContent = SHARE_CODE;
  renderFamilyMembers();
}

async function sendLoginLink() {
  const email = $("#authEmailInput").value.trim();

  if (!email) {
    setAuthStatus("メールアドレスを入力してください。");
    return;
  }

  setAuthStatus("ログインリンクを送信しています...");
  const { error } = await state.auth.client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin + window.location.pathname
    }
  });

  setAuthStatus(
    error
      ? `送信エラー: ${error.message}`
      : "メールを送信しました。届いたリンクを開くと、次回から自動でログイン状態を復元します。"
  );
}

function shouldShowPinCreate() {
  return state.auth.user && !state.auth.pinUnlocked && !getStoredPin();
}

function shouldShowPinUnlock() {
  return state.auth.user && !state.auth.pinUnlocked && Boolean(getStoredPin());
}

function getStoredPin() {
  try {
    return JSON.parse(localStorage.getItem(PIN_KEY) || "null");
  } catch {
    return null;
  }
}

async function createPin() {
  const input = $("#pinCreateInput");
  const pin = sanitizePin(input.value);

  if (!isValidPin(pin)) {
    setPinCreateStatus("4桁の数字を入力してください。");
    input.focus();
    return;
  }

  const salt = crypto.randomUUID();
  localStorage.setItem(
    PIN_KEY,
    JSON.stringify({
      salt,
      hash: await hashPin(pin, salt),
      createdAt: new Date().toISOString()
    })
  );
  input.value = "";
  state.auth.pinUnlocked = true;
  setAuthGate(false);
  setCloudStatus("PINを設定しました。次回からすぐ開けます。");
}

function skipPin() {
  state.auth.pinUnlocked = true;
  setAuthGate(false);
  setCloudStatus("PINなしで開きました。設定はあとで追加できます。");
}

async function unlockPin() {
  const input = $("#pinUnlockInput");
  const pin = sanitizePin(input.value);
  const storedPin = getStoredPin();

  if (!storedPin || !isValidPin(pin)) {
    setPinUnlockStatus("4桁のPINを入力してください。");
    input.focus();
    return;
  }

  const hash = await hashPin(pin, storedPin.salt);
  if (hash !== storedPin.hash) {
    setPinUnlockStatus("PINが違います。もう一度入力してください。");
    input.value = "";
    input.focus();
    return;
  }

  input.value = "";
  state.auth.pinUnlocked = true;
  setAuthGate(false);
  setCloudStatus("PINでロック解除しました。");
}

async function resetPinAndLogin() {
  localStorage.removeItem(PIN_KEY);
  state.auth.pinUnlocked = false;
  await signOut();
  setAuthMode("email");
  setAuthStatus("メールでログインし直してください。");
}

function sanitizePin(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 4);
}

function isValidPin(pin) {
  return /^\d{4}$/.test(pin);
}

async function hashPin(pin, salt) {
  const data = new TextEncoder().encode(`${salt}:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function setPinCreateStatus(message) {
  const status = $("#pinCreateStatus");
  if (status) status.textContent = message;
}

function setPinUnlockStatus(message) {
  const status = $("#pinUnlockStatus");
  if (status) status.textContent = message;
}

function focusSoon(selector) {
  window.setTimeout(() => $(selector)?.focus(), 80);
}

async function signOut() {
  if (!state.auth.client) return;
  await state.auth.client.auth.signOut();
  state.auth.session = null;
  state.auth.user = null;
  state.auth.member = null;
  state.auth.members = [];
  state.auth.pinUnlocked = false;
  setAuthMode("email");
  setAuthGate(true);
  renderAuthState();
  setCloudStatus("ログアウトしました。");
}

async function claimHouseholdMembership() {
  const client = getSupabaseClient();
  const { data, error } = await client.rpc("stockflow_claim_household");

  if (error) {
    setCloudStatus(`家族確認エラー: ${error.message}`);
    return null;
  }

  return data;
}

async function loadFamilyMembers() {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from("stockflow_household_members")
    .select("email, role, user_id")
    .eq("household_id", STOCKFLOW_HOUSEHOLD_ID)
    .order("role", { ascending: true });

  if (!error) {
    state.auth.members = data || [];
  }
}

async function inviteFamilyMember() {
  const email = $("#familyInviteEmailInput").value.trim().toLowerCase();

  if (!email) {
    setCloudStatus("追加するメールアドレスを入力してください。");
    return;
  }

  const client = getSupabaseClient();
  const { error } = await client
    .from("stockflow_household_members")
    .upsert(
      {
        household_id: STOCKFLOW_HOUSEHOLD_ID,
        email,
        role: "member"
      },
      { onConflict: "household_id,email" }
    );

  if (error) {
    setCloudStatus(`家族追加エラー: ${error.message}`);
    return;
  }

  $("#familyInviteEmailInput").value = "";
  await loadFamilyMembers();
  renderFamilyMembers();
  setCloudStatus("家族メンバーを追加しました。相手も同じURLからログインできます。");
}

async function copyShareInvite() {
  const url = window.location.origin + window.location.pathname;
  const message = `StockFlowの共有案内です。\n\n1. このURLを開く\n${url}\n\n2. メールでログイン\n\n3. 共有コード: ${SHARE_CODE}\n\n先に設定画面で妻のメールアドレスを追加しておくと、同じ在庫を見られます。`;

  try {
    await navigator.clipboard.writeText(message);
    setCloudStatus("共有案内をコピーしました。メッセージで送れます。");
  } catch {
    setCloudStatus(`共有コードは ${SHARE_CODE} です。URLと一緒に送ってください。`);
  }
}

async function pullProductsFromCloud() {
  const client = getSupabaseClient();
  if (!client || !state.auth.user) return;

  setCloudStatus("クラウドから読み込み中...");
  const { data, error } = await client
    .from("stockflow_products")
    .select("data")
    .eq("household_id", STOCKFLOW_HOUSEHOLD_ID)
    .order("updated_at", { ascending: false });

  if (error) {
    setCloudStatus(`読み込みエラー: ${error.message}`);
    return;
  }

  if (data?.length) {
    state.products = removeStarterProducts(data.map((row) => row.data)).map(normalizeProduct);
    saveProducts();
    render();
    setCloudStatus("クラウド保存: 接続済み");
    return;
  }

  await syncProductsToCloud();
}

let cloudSyncTimer = null;

function queueCloudSync() {
  if (!getSupabaseClient() || !state.auth.user) return;
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(syncProductsToCloud, 500);
}

async function syncProductsToCloud() {
  const client = getSupabaseClient();
  if (!client || !state.auth.user) return;

  const products = removeStarterProducts(state.products);
  const rows = products.map((product) => ({
    household_id: STOCKFLOW_HOUSEHOLD_ID,
    id: product.id,
    data: product,
    updated_at: new Date().toISOString(),
    updated_by: state.auth.user.id
  }));

  setCloudStatus("クラウドへ保存中...");

  await client
    .from("stockflow_products")
    .delete()
    .eq("household_id", STOCKFLOW_HOUSEHOLD_ID)
    .eq("data->>source", "starter");

  if (!rows.length) {
    setCloudStatus("クラウド保存: 同期済み");
    return;
  }

  const { error } = await client
    .from("stockflow_products")
    .upsert(rows, { onConflict: "household_id,id" });

  setCloudStatus(error ? `保存エラー: ${error.message}` : "クラウド保存: 同期済み");
}

function renderCloudSettings() {
  renderAuthState();
}

function setCloudStatus(message) {
  const status = $("#cloudStatus");
  if (status) {
    status.textContent = message;
  }
}

function setAuthStatus(message) {
  const status = $("#authStatus");
  if (status) {
    status.textContent = message;
  }
}

function renderFamilyMembers() {
  const list = $("#familyMemberList");
  if (!list) return;

  list.innerHTML = state.auth.members.length
    ? state.auth.members
        .map((member) => {
          const stateLabel = member.user_id ? "接続済み" : "招待中";
          return `
            <div class="family-member">
              <span>${escapeHtml(member.email)}</span>
              <small>${escapeHtml(member.role)} · ${stateLabel}</small>
            </div>
          `;
        })
        .join("")
    : '<div class="empty-state">家族メンバーはまだ読み込まれていません。</div>';
}

async function openBarcodeScanner() {
  closeQuickActions();
  const dialog = $("#barcodeDialog");
  dialog.showModal();
  hydrateSymbols(dialog);
  state.scanner.lastCode = "";
  setScannerStatus("カメラを準備しています。");

  if (!navigator.mediaDevices?.getUserMedia) {
    setScannerStatus("この環境ではカメラを起動できません。下の番号入力で追加できます。");
    return;
  }

  try {
    const video = $("#barcodeVideo");
    state.scanner.active = true;
    await startBarcodeDecoding(video, getBarcodeVideoConstraints());
  } catch (error) {
    setScannerStatus("カメラを起動できませんでした。Safariのカメラ許可を確認するか、下の番号入力を使ってください。");
  }
}

function getBarcodeVideoConstraints() {
  return {
    video: {
      facingMode: { ideal: "environment" },
      width: { ideal: 1280 },
      height: { ideal: 720 }
    },
    audio: false
  };
}

async function startBarcodeDecoding(video, constraints) {
  const BarcodeReader = await waitForBarcodeReader();

  if (BarcodeReader) {
    setScannerStatus("バーコードを枠の中に入れてください。");
    state.scanner.reader ||= new BarcodeReader();
    $(".scanner-view").classList.add("is-live");
    state.scanner.controls = await state.scanner.reader.decodeFromConstraints(
      constraints,
      video,
      (result) => {
        const code = result?.getText?.();
        if (code && code !== state.scanner.lastCode) {
          state.scanner.lastCode = code;
          setScannerStatus(`読み取りました: ${code}`);
          addProductByBarcode(code);
        }
      }
    );
    return;
  }

  if ("BarcodeDetector" in window) {
    state.scanner.stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = state.scanner.stream;
    await video.play();
    $(".scanner-view").classList.add("is-live");
    state.scanner.detector ||= new BarcodeDetector({
      formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"]
    });
    setScannerStatus("バーコードを枠の中に入れてください。");
    scanBarcodeFrame();
    return;
  }

  setScannerStatus("このブラウザでは自動読み取りを読み込めませんでした。下の番号入力で追加できます。");
}

function waitForBarcodeReader() {
  if (window.StockFlowBarcodeReader) {
    return Promise.resolve(window.StockFlowBarcodeReader);
  }

  return new Promise((resolve) => {
    const timeout = window.setTimeout(() => {
      window.removeEventListener("barcode-reader-ready", onReady);
      resolve(null);
    }, 5000);

    function onReady() {
      window.clearTimeout(timeout);
      resolve(window.StockFlowBarcodeReader || null);
    }

    window.addEventListener("barcode-reader-ready", onReady, { once: true });
  });
}

function openQuickActions() {
  const dialog = $("#quickActionsDialog");
  dialog.showModal();
  hydrateSymbols(dialog);
}

function closeQuickActions() {
  const dialog = $("#quickActionsDialog");
  if (dialog?.open) {
    dialog.close();
  }
}

async function scanBarcodeFrame() {
  if (!state.scanner.active || !state.scanner.detector) return;

  try {
    const codes = await state.scanner.detector.detect($("#barcodeVideo"));
    const rawValue = codes[0]?.rawValue;

    if (rawValue && rawValue !== state.scanner.lastCode) {
      state.scanner.lastCode = rawValue;
      setScannerStatus(`読み取りました: ${rawValue}`);
      addProductByBarcode(rawValue);
      return;
    }
  } catch {
    setScannerStatus("読み取り中です。バーコードを明るい場所で近づけてください。");
  }

  state.scanner.timer = window.setTimeout(scanBarcodeFrame, 420);
}

function stopBarcodeScanner() {
  state.scanner.active = false;
  if (state.scanner.controls) {
    state.scanner.controls.stop();
    state.scanner.controls = null;
  }
  if (state.scanner.timer) {
    window.clearTimeout(state.scanner.timer);
    state.scanner.timer = null;
  }

  if (state.scanner.stream) {
    state.scanner.stream.getTracks().forEach((track) => track.stop());
    state.scanner.stream = null;
  }

  const video = $("#barcodeVideo");
  if (video) {
    video.pause();
    video.srcObject = null;
  }

  $(".scanner-view")?.classList.remove("is-live");
}

function closeBarcodeScanner() {
  stopBarcodeScanner();
  if ($("#barcodeDialog").open) {
    $("#barcodeDialog").close();
  }
}

function restartBarcodeScanner() {
  stopBarcodeScanner();
  openBarcodeScanner();
}

function addManualBarcode() {
  const input = $("#manualBarcodeInput");
  const product = addProductByBarcode(input.value);
  if (product) {
    input.value = "";
  }
}

async function addManualProduct() {
  const nameInput = $("#productNameInput");
  const categoryInput = $("#productCategoryInput");
  const quantityInput = $("#productQuantityInput");
  const photoInput = $("#productPhotoInput");
  const name = nameInput.value.trim();
  const category = categoryInput.value.trim() || "その他";
  const quantity = Math.max(0, Number(quantityInput.value || 0));
  const imageUrl = await readProductPhoto(photoInput.files?.[0]);

  if (!name) {
    setCloudStatus("商品名を入力してください。");
    nameInput.focus();
    return;
  }

  const existingProduct = state.products.find((product) => {
    return product.name === name && product.category === category;
  });

  if (existingProduct) {
    updateExistingProduct(existingProduct.id, quantity || 1, imageUrl);
  } else {
    state.products = [
      createProduct({
        id: `manual-${Date.now()}`,
        source: "manual",
        name,
        category,
        imageUrl,
        quantity,
        minQuantity: 1
      }),
      ...state.products
    ];
    saveProducts({ sync: true });
    render();
  }

  nameInput.value = "";
  categoryInput.value = "";
  quantityInput.value = "1";
  clearProductPhoto();
  setCloudStatus("在庫を追加しました。");
}

function updateExistingProduct(productId, quantityToAdd, imageUrl) {
  state.products = state.products.map((product) => {
    if (product.id !== productId) return product;
    const quantity = Math.max(0, product.quantity + quantityToAdd);
    const daysLeft = estimateDaysLeft(quantity);
    return {
      ...product,
      imageUrl: imageUrl || product.imageUrl,
      quantity,
      daysLeft,
      nextOutDate: dateAfter(daysLeft),
      shopping: {
        ...product.shopping,
        completed: false
      },
      history: [
        ...(product.history || []),
        { type: "manual-restock", delta: quantityToAdd, at: new Date().toISOString() }
      ]
    };
  });
  saveProducts({ sync: true });
  render();
}

function readProductPhoto(file) {
  if (!file) return Promise.resolve("");

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resizeImageDataUrl(reader.result, resolve));
    reader.addEventListener("error", () => resolve(""));
    reader.readAsDataURL(file);
  });
}

function resizeImageDataUrl(dataUrl, resolve) {
  const image = new Image();
  image.addEventListener("load", () => {
    const maxSize = 760;
    const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    resolve(canvas.toDataURL("image/jpeg", 0.78));
  });
  image.addEventListener("error", () => resolve(""));
  image.src = dataUrl;
}

function previewProductPhoto() {
  const input = $("#productPhotoInput");
  const preview = $("#productPhotoPreview");
  const image = preview?.querySelector("img");
  const file = input?.files?.[0];

  if (!preview || !image) return;

  if (!file) {
    clearProductPhoto();
    return;
  }

  image.src = URL.createObjectURL(file);
  preview.hidden = false;
}

function clearProductPhoto() {
  const input = $("#productPhotoInput");
  const preview = $("#productPhotoPreview");
  const image = preview?.querySelector("img");

  if (input) input.value = "";
  if (image) image.removeAttribute("src");
  if (preview) preview.hidden = true;
}

function changeProductQuantity(productId, delta) {
  if (!productId || !Number.isFinite(delta)) return;

  state.products = state.products.map((product) => {
    if (product.id !== productId) return product;
    const quantity = Math.max(0, product.quantity + delta);
    const daysLeft = estimateDaysLeft(quantity);
    return {
      ...product,
      quantity,
      daysLeft,
      nextOutDate: dateAfter(daysLeft),
      shopping: {
        ...product.shopping,
        completed: false
      },
      history: [
        ...(product.history || []),
        { type: delta > 0 ? "increase" : "decrease", delta, at: new Date().toISOString() }
      ]
    };
  });
  saveProducts({ sync: true });
  render();
}

async function deleteProduct(productId) {
  if (!productId) return;
  state.products = state.products.filter((product) => product.id !== productId);
  saveProducts();
  render();

  const client = getSupabaseClient();
  if (!client || !state.auth.user) return;

  setCloudStatus("クラウドから削除中...");
  const { error } = await client
    .from("stockflow_products")
    .delete()
    .eq("household_id", STOCKFLOW_HOUSEHOLD_ID)
    .eq("id", productId);

  setCloudStatus(error ? `削除エラー: ${error.message}` : "在庫を削除しました。");
}

function setScannerStatus(message) {
  $("#barcodeStatus").textContent = message;
}

function normalizeBarcode(value) {
  return String(value || "").replace(/\D/g, "");
}

function estimateDaysLeft(quantity) {
  if (quantity <= 0) return 0;
  return Math.max(1, quantity * 4);
}

function dateAfter(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric"
  }).format(date);
}

function bindStaticEvents() {
  $$("[data-tab]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setActiveTab(trigger.dataset.tab);
      window.history.replaceState(null, "", `#${trigger.dataset.tab}Screen`);
    });
  });

  $$("[data-action]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      handleAction(trigger.dataset.action);
    });
  });

  document.addEventListener("click", (event) => {
    const tabTrigger = event.target.closest("[data-tab]");
    if (tabTrigger) {
      event.preventDefault();
      setActiveTab(tabTrigger.dataset.tab);
      return;
    }

    const navigateTrigger = event.target.closest("[data-navigate]");
    if (navigateTrigger) {
      event.preventDefault();
      setActiveTab(navigateTrigger.dataset.navigate);
      return;
    }

    const actionTrigger = event.target.closest("[data-action]");
    if (actionTrigger) {
      event.preventDefault();
      handleAction(actionTrigger.dataset.action);
      return;
    }

    const shoppingTrigger = event.target.closest("[data-complete-shopping]");
    if (shoppingTrigger) {
      event.preventDefault();
      toggleShoppingComplete(shoppingTrigger.dataset.completeShopping);
      return;
    }

    const quantityTrigger = event.target.closest("[data-quantity-change]");
    if (quantityTrigger) {
      event.preventDefault();
      changeProductQuantity(
        quantityTrigger.dataset.productId,
        Number(quantityTrigger.dataset.quantityChange)
      );
      return;
    }

    const deleteTrigger = event.target.closest("[data-delete-product]");
    if (deleteTrigger) {
      event.preventDefault();
      deleteProduct(deleteTrigger.dataset.deleteProduct);
    }
  });

  $("#inventorySearch").addEventListener("input", (event) => {
    state.searchQuery = event.target.value.trim();
    renderInventory();
  });

  $("#productPhotoInput").addEventListener("change", previewProductPhoto);

  ["#pinCreateInput", "#pinUnlockInput"].forEach((selector) => {
    $(selector).addEventListener("input", (event) => {
      event.target.value = sanitizePin(event.target.value);
    });
    $(selector).addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleAction(selector === "#pinCreateInput" ? "create-pin" : "unlock-pin");
      }
    });
  });

  $("#notificationToggle").addEventListener("change", (event) => {
    state.settings.notificationsEnabled = event.target.checked;
    saveSettings();
  });

  $("#autoListToggle").addEventListener("change", (event) => {
    state.settings.autoShoppingEnabled = event.target.checked;
    saveSettings();
    render();
  });

  $("#barcodeDialog").addEventListener("close", stopBarcodeScanner);
  $("#quickActionsDialog").addEventListener("click", (event) => {
    if (event.target === $("#quickActionsDialog")) {
      closeQuickActions();
    }
  });
  $("#barcodeDialog").addEventListener("click", (event) => {
    if (event.target === $("#barcodeDialog")) {
      closeBarcodeScanner();
    }
  });

  window.addEventListener("hashchange", activateTabFromHash);
}

function handleAction(action) {
  const actions = {
    "open-quick-actions": openQuickActions,
    "close-quick-actions": closeQuickActions,
    "scan-barcode": openBarcodeScanner,
    "close-barcode": closeBarcodeScanner,
    "restart-barcode": restartBarcodeScanner,
    "manual-barcode": addManualBarcode,
    "add-manual-product": addManualProduct,
    "clear-product-photo": clearProductPhoto,
    "send-login-link": sendLoginLink,
    "create-pin": createPin,
    "skip-pin": skipPin,
    "unlock-pin": unlockPin,
    "reset-pin-login": resetPinAndLogin,
    "copy-share-invite": copyShareInvite,
    "invite-family-member": inviteFamilyMember,
    "sign-out": signOut
  };

  actions[action]?.();
}

function setActiveTab(tabName) {
  if (!["home", "inventory", "shopping", "settings"].includes(tabName)) {
    tabName = "home";
  }

  closeQuickActions();
  state.activeTab = tabName;
  $$(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === `${tabName}Screen`);
  });
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
  $$(".rail-link").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
  $("#screenTitle").textContent = {
    home: "HOME",
    inventory: "STOCK",
    shopping: "SHOPPING",
    settings: "SETTING"
  }[tabName];
}

function activateTabFromHash() {
  const tabName = window.location.hash.replace("#", "").replace(/Screen$/, "") || "home";
  setActiveTab(tabName);
}

function setToday() {
  $("#todayLabel").textContent = new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date());
}

function render() {
  refreshShoppingFlags();
  renderHome();
  renderInventory();
  renderShopping();
  renderSettings();
  hydrateSymbols(document);
}

function refreshShoppingFlags() {
  state.products = state.products.map((product) => ({
    ...product,
    shopping: {
      ...product.shopping,
      autoAdded:
        state.settings.autoShoppingEnabled &&
        (product.quantity <= product.minQuantity || product.daysLeft <= 6)
    }
  }));
  saveProducts();
}

function getSafetyScore() {
  const risk = state.products.reduce((total, product) => {
    if (product.quantity === 0) return total + 28;
    if (product.daysLeft <= 3) return total + 20;
    if (product.daysLeft <= 6) return total + 12;
    if (product.quantity <= product.minQuantity) return total + 8;
    return total;
  }, 0);
  return Math.max(0, Math.min(100, 100 - risk));
}

function getNextProduct() {
  return [...state.products].sort((a, b) => a.daysLeft - b.daysLeft)[0];
}

function getShoppingItems() {
  return state.products
    .filter((product) => product.shopping.autoAdded)
    .sort((a, b) => Number(a.shopping.completed) - Number(b.shopping.completed) || a.daysLeft - b.daysLeft);
}

function renderHome() {
  const score = getSafetyScore();
  const nextProduct = getNextProduct();
  const shoppingItems = getShoppingItems();

  $("#inventoryCount").textContent = state.products.length;
  $("#shoppingMetric").textContent = shoppingItems.length;
  $("#safetyScore").textContent = score;
  $("#scoreRing").style.strokeDashoffset = String(RING_LENGTH - (RING_LENGTH * score) / 100);
  $("#scoreRing").style.stroke = score >= 86 ? "var(--green)" : score >= 72 ? "var(--orange)" : "var(--red)";
  $("#homeSummary").textContent =
    score >= 88 ? "今日は安心です" : score >= 72 ? "少しだけ準備しましょう" : "買い足しが必要です";
  $("#homeDetail").textContent = nextProduct
    ? `${nextProduct.name} があと${nextProduct.daysLeft}日で無くなる予定です。`
    : "商品が登録されると、ここに次に無くなるものが表示されます。";

  $("#nextProductDate").textContent = nextProduct ? `不足予定 ${nextProduct.nextOutDate}` : "-";
  $("#nextProductCard").innerHTML = nextProduct
    ? productCardTemplate(nextProduct)
    : emptyTemplate("まだ商品がありません。");

  $("#shoppingSummary").textContent = `${shoppingItems.length}件`;
  $("#shoppingHeadline").textContent = shoppingItems.length
    ? `${shoppingItems.length}件が買い物リストにあります`
    : "買うものはありません";
  $("#shoppingSubline").textContent = shoppingItems.length
    ? "不足が近い商品を自動でまとめています。"
    : "不足が近づくと自動で表示します。";
}

function renderInventory() {
  const query = state.searchQuery.toLowerCase();
  const filteredProducts = state.products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });
  const grouped = groupByCategory(filteredProducts);

  $("#categoryList").innerHTML = Object.keys(grouped).length
    ? Object.entries(grouped)
        .map(([category, products]) => categoryTemplate(category, products))
        .join("")
    : emptyTemplate("該当する商品がありません。");
}

function renderShopping() {
  const shoppingItems = getShoppingItems();
  $("#autoShoppingCount").textContent = `${shoppingItems.length}件`;
  $("#shoppingList").innerHTML = shoppingItems.length
    ? shoppingItems.map(shoppingRowTemplate).join("")
    : emptyTemplate("買い物リストは空です。");
}

function renderSettings() {
  $("#notificationToggle").checked = state.settings.notificationsEnabled;
  $("#autoListToggle").checked = state.settings.autoShoppingEnabled;
  renderCloudSettings();
}

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    groups[product.category] ||= [];
    groups[product.category].push(product);
    return groups;
  }, {});
}

function toggleShoppingComplete(productId) {
  state.products = state.products.map((product) => {
    if (product.id !== productId) return product;
    return {
      ...product,
      shopping: {
        ...product.shopping,
        completed: !product.shopping.completed
      }
    };
  });
  saveProducts({ sync: true });
  render();
}

function productCardTemplate(product) {
  return `
    <article class="product-card">
      ${productVisualTemplate(product, "product-image")}
      <div>
        <div class="product-title-line">
          <h3>${escapeHtml(product.name)}</h3>
          <span class="days-left">あと${product.daysLeft}日</span>
        </div>
        <p class="product-meta">
          残り${product.quantity}個 · ${escapeHtml(product.category)} · しきい値${product.minQuantity}個
        </p>
      </div>
    </article>
  `;
}

function categoryTemplate(category, products) {
  return `
    <section>
      <div class="category-title">
        <span>${escapeHtml(category)}</span>
        <span>${products.length}件</span>
      </div>
      <div class="category-section">
        ${products.map(inventoryRowTemplate).join("")}
      </div>
    </section>
  `;
}

function inventoryRowTemplate(product) {
  return `
    <article class="inventory-row">
      ${productVisualTemplate(product, "row-image")}
      <div class="row-copy">
        <strong>${escapeHtml(product.name)}</strong>
        <small>${escapeHtml(product.category)} · あと${product.daysLeft}日</small>
      </div>
      <div class="quantity-control" aria-label="${escapeHtml(product.name)}の個数">
        <button data-quantity-change="-1" data-product-id="${product.id}" type="button" aria-label="${escapeHtml(product.name)}を1個減らす">
          <span class="sf-symbol" data-symbol="minus"></span>
        </button>
        <span>${product.quantity}個</span>
        <button data-quantity-change="1" data-product-id="${product.id}" type="button" aria-label="${escapeHtml(product.name)}を1個増やす">
          <span class="sf-symbol" data-symbol="plus"></span>
        </button>
        <button class="delete-product-button" data-delete-product="${product.id}" type="button" aria-label="${escapeHtml(product.name)}を削除">削除</button>
      </div>
    </article>
  `;
}

function shoppingRowTemplate(product) {
  return `
    <article class="shopping-row ${product.shopping.completed ? "is-complete" : ""}">
      <button class="check-button" data-complete-shopping="${product.id}" type="button" aria-label="${escapeHtml(product.name)}を完了">
        ${product.shopping.completed ? '<span class="sf-symbol" data-symbol="check"></span>' : ""}
      </button>
      ${productVisualTemplate(product, "row-image")}
      <div class="row-copy">
        <strong>${escapeHtml(product.name)}</strong>
        <small>残り${product.quantity}個 · 不足予定 ${escapeHtml(product.nextOutDate)}</small>
      </div>
    </article>
  `;
}

function productVisualTemplate(product, className) {
  const label = categorySymbols[product.category] || categorySymbols.その他;
  const tone = getCategoryTone(product.category);
  const imageUrl = normalizeImageUrl(product.imageUrl, product.source);

  if (imageUrl) {
    return `
      <div class="${className} product-photo" aria-label="${escapeHtml(product.name)}の写真">
        <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
    `;
  }

  return `
    <div class="${className} product-mark ${tone}" aria-label="${escapeHtml(product.category)}">
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function getCategoryTone(category) {
  return {
    紙用品: "tone-beige",
    洗濯: "tone-blue",
    育児: "tone-pink",
    飲料: "tone-navy",
    キッチン: "tone-gray"
  }[category] || "tone-gray";
}

function emptyTemplate(message) {
  return `<div class="empty-state">${escapeHtml(message)}</div>`;
}

function hydrateSymbols(scope) {
  scope.querySelectorAll("[data-symbol]").forEach((node) => {
    node.innerHTML = symbols[node.dataset.symbol] || "";
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}
