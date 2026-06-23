const STORAGE_KEY = "stockflow.design.v2";
const SETTINGS_KEY = "stockflow.settings.v1";
const RING_LENGTH = 314;

const symbols = {
  house:
    '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  shippingbox:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m4 8 8-4 8 4v9l-8 4-8-4V8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m4 8 8 4 8-4M12 12v9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  checklist:
    '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 3 3 6-7M5 19h14M16 8h3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
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
    '<svg viewBox="0 0 24 24" fill="none"><path d="M5 6h2l1.6 8.2a2 2 0 0 0 2 1.6h6.8a2 2 0 0 0 1.9-1.4L21 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/></svg>'
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

const initialProducts = [
  createProduct({
    id: "toilet-paper",
    name: "トイレットペーパー",
    category: "紙用品",
    imageUrl: productImages.paper,
    quantity: 2,
    minQuantity: 3,
    daysLeft: 5,
    nextOutDate: "6月28日"
  }),
  createProduct({
    id: "laundry-detergent",
    name: "洗濯洗剤",
    category: "洗濯",
    imageUrl: productImages.detergent,
    quantity: 1,
    minQuantity: 2,
    daysLeft: 4,
    nextOutDate: "6月27日"
  }),
  createProduct({
    id: "tissue",
    name: "ティッシュ",
    category: "紙用品",
    imageUrl: productImages.tissue,
    quantity: 5,
    minQuantity: 2,
    daysLeft: 16,
    nextOutDate: "7月9日"
  }),
  createProduct({
    id: "diapers",
    name: "オムツ",
    category: "育児",
    imageUrl: productImages.diaper,
    quantity: 12,
    minQuantity: 8,
    daysLeft: 9,
    nextOutDate: "7月2日"
  }),
  createProduct({
    id: "barley-tea",
    name: "麦茶",
    category: "飲料",
    imageUrl: productImages.drink,
    quantity: 3,
    minQuantity: 2,
    daysLeft: 7,
    nextOutDate: "6月30日"
  }),
  createProduct({
    id: "plastic-wrap",
    name: "ラップ",
    category: "キッチン",
    imageUrl: productImages.kitchen,
    quantity: 1,
    minQuantity: 1,
    daysLeft: 12,
    nextOutDate: "7月5日"
  })
];

const futureAdapters = {
  barcodeScanner: null,
  imageRecognition: null,
  familySync: null,
  notificationScheduler: null
};

const state = {
  activeTab: "home",
  searchQuery: "",
  products: loadProducts(),
  settings: loadSettings()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

boot();

function boot() {
  hydrateSymbols(document);
  setToday();
  bindStaticEvents();
  render();
}

function createProduct(product) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    imageUrl: product.imageUrl,
    quantity: product.quantity,
    minQuantity: product.minQuantity,
    daysLeft: product.daysLeft,
    nextOutDate: product.nextOutDate,
    shopping: {
      autoAdded: product.quantity <= product.minQuantity || product.daysLeft <= 6,
      completed: false
    },
    history: []
  };
}

function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : initialProducts;
  } catch {
    return initialProducts;
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.products));
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

function bindStaticEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
  });

  $$("[data-navigate]").forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.navigate));
  });

  $("#inventorySearch").addEventListener("input", (event) => {
    state.searchQuery = event.target.value.trim();
    renderInventory();
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
}

function setActiveTab(tabName) {
  state.activeTab = tabName;
  $$(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === `${tabName}Screen`);
  });
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
  $("#screenTitle").textContent = {
    home: "ホーム",
    inventory: "在庫",
    shopping: "買い物",
    settings: "設定"
  }[tabName];
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

  $$("[data-complete-shopping]").forEach((button) => {
    button.addEventListener("click", () => toggleShoppingComplete(button.dataset.completeShopping));
  });
}

function renderSettings() {
  $("#notificationToggle").checked = state.settings.notificationsEnabled;
  $("#autoListToggle").checked = state.settings.autoShoppingEnabled;
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
  saveProducts();
  render();
}

function productCardTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
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
      <div class="row-image">
        <img src="${product.imageUrl}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
      <div class="row-copy">
        <strong>${escapeHtml(product.name)}</strong>
        <small>${escapeHtml(product.category)} · あと${product.daysLeft}日</small>
      </div>
      <span class="quantity-pill">${product.quantity}個</span>
    </article>
  `;
}

function shoppingRowTemplate(product) {
  return `
    <article class="shopping-row ${product.shopping.completed ? "is-complete" : ""}">
      <button class="check-button" data-complete-shopping="${product.id}" type="button" aria-label="${escapeHtml(product.name)}を完了">
        ${product.shopping.completed ? '<span class="sf-symbol" data-symbol="check"></span>' : ""}
      </button>
      <div class="row-image">
        <img src="${product.imageUrl}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
      <div class="row-copy">
        <strong>${escapeHtml(product.name)}</strong>
        <small>残り${product.quantity}個 · 不足予定 ${escapeHtml(product.nextOutDate)}</small>
      </div>
    </article>
  `;
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

export { futureAdapters };
