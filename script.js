/* ============================================================
   TAMIL WEDDING PLANNER
   ============================================================ */

const STORAGE_KEY = "TamilWeddingPlanner_v1";

/* ============================================================
   DEFAULT CATEGORIES
   ============================================================ */

const defaultCategories = [
  {
    id: "guests",
    name: "Guests",
    icon: "👥",
    items: ["Palaharam (Goodie bag)", "Hotels"]
  },
  {
    id: "clothes",
    name: "Clothes",
    icon: "👗",
    items: [
      "Manavarai saree",
      "Koorai saree (Rød)",
      "Vetti sattai",
      "Sko",
      "Vetti Sattai Grooms Mate",
      "Saree Bridesmaid",
      "Tøj til preshoot",
      "Amorasareesdk",
      "Ranyasarees"
    ]
  },
  {
    id: "reception",
    name: "Reception Songs",
    icon: "🎵",
    items: [
      "Entrance",
      "Pardans",
      "Preshoot",
      "Bryllupsvideo",
      "After Party"
    ]
  },
  {
    id: "sign-card",
    name: "Wedding Sign + Card",
    icon: "💌",
    items: [
      "Aviraa Creations",
      "Ponthayadesigns",
      "Kopuramevents.fr"
    ]
  },
  {
    id: "Decoration",
    name: "Decoration",
    icon: "🛕",
    items: ["Kopuramevents.fr"]
  },
  {
    id: "accessories-gifts",
    name: "Accessories + Gifts",
    icon: "✨ 🎁",
    items: [
       "360 Booth", 
       "Bridal Corner Setup", 
       "Children Sweets",
       "Palaharam (Goodie bag)", 
       "Yndlingsting"
    ]
  },
  {
    id: "henna",
    name: "Henna Fest",
    icon: "🌿",
    items: [
      "Uduupu ?",
      "Mehendi (rosedecoration.dk)",
      "Tamilhennecreation",
      "Tent",
      "Visual Eyes"
    ]
  },
  {
    id: "makeup",
    name: "Makeup + Hair",
    icon: "💄",
    items: [
      "Janani",
      "abinii_makeupartist",
      "thiva_mua"
    ]
  },
  {
    id: "jewellery",
    name: "Jewellery",
    icon: "💎",
    items: [
      "Thaali (15 Pound)",
      "Øreringe",
      "Necklace",
      "Kappu",
      "Ring (mothiram)",
      "Tikka (Nethi Pattam)",
      "Kaal Sangali",
      "Mukuthi",
      "Waist Chain",
      "Nails"
    ]
  },
  {
    id: "melam",
    name: "Melam",
    icon: "🥁",
    items: ["Chinna Mams", "Mami ?"]
  },
  {
    id: "maalai",
    name: "Maalai",
    icon: "🌸",
    items: ["Herning Maalai"]
  },
  {
    id: "catering",
    name: "Catering (Food)",
    icon: "🍛",
    items: [
      "Poovi Mama Horsens",
      "Kammali Randers",
      "Tamil Ondrai Aarhus",
      "Arusuvai",
      "Dhoni",
      "Appam",
      "Vaathali og Pako"
    ]
  },
  {
    id: "cake",
    name: "Wedding Cake",
    icon: "🎂",
    items: ["Wedding Cake", "Lighter + Knife"]
  },
  {
    id: "photo-video-preshoot",
    name: "Photo + Video + Preshoot",
    icon: "📷",
    items: [
      "Digital Pro",
      "Ajeenth Video",
      "Visual Eyes",
      "Nomad",
      "Vividmemoir.dk",
      "infocus",
      "Views of Nivi",
      "Sana",
    ]
  },
  {
    id: "dj",
    name: "DJ",
    icon: "🎧",
    items: [
      "Playloud",
      "Keeth Entertainment",
      "Microphone",
      "Iqon Musik",
      "Resound"
    ]
  },
  {
    id: "hall-kovil",
    name: "Hall + Kovil",
    icon: "🏛️",
    items: [
      "Sana Palace RA",
      "Uranus Partyhouse",
      "E-Plaza AA",
      "Elegance Brørup",
      "Babylon AA",
      "Sociale Palace Silkeborg",
      "Herning Kovil",
      "Food & Drinks",
      "Sweets for children",
      "Bar",
      "Dessert",
      "Palaharam",
      "Tea Can",
      "Civil Weds (Ring)",
      "Udlandet"
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "💃",
    items: [
      "Pardans + Cinema Paattu",
      "Bollywood Dance",
      "Gruppedans",
      "Abi, Vaishu og Asmi",
      "Suji Akka solo + Bharatanatyam med os",
      "Aishani + Aatish",
      "Thilipa, Sonja, Deilany, Praveena og Nantheya",
      "Family Dance",
      "Karthie + Nantheya",
      "Charmilie",
      "Aalborg Kootam"
    ]
  },
  {
    id: "speech-host-operator",
    name: "Speech + Host + Operator",
    icon: "🎤 🎛️",
    items: [
      "Vinu",
      "Mams",
      "Saddi",
      "Speech",
      "Games",
      "Speech planning",
      "Speakers",
      "Order of speeches",
      "Lighting",
      "Projector"
    ]
  },
  {
    id: "games",
    name: "Games",
    icon: "🎲",
    items: ["Bingo"]
  }
];

/* ============================================================
   STATE
   ============================================================ */

let categories = [];
let savedData = {};

let currentCategory = "dashboard";
let currentItem = null;
let modalStatus = "not";

let managementMode = "category";

/* ============================================================
   HELPERS
   ============================================================ */

function cloneDefaults() {
  return structuredClone(defaultCategories);
}

function createId(text) {
  return (
    String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9æøå]+/gi, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    Date.now().toString(36)
  );
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString + "T00:00:00");

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("da-DK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.className = "toast active " + type;

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("active");
  }, 2800);
}

/* ============================================================
   LOAD / SAVE
   ============================================================ */

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      categories = cloneDefaults();
      savedData = {};
      saveData();
      return;
    }

    const parsed = JSON.parse(stored);

    if (
      parsed &&
      typeof parsed === "object" &&
      Array.isArray(parsed.categories)
    ) {
      categories = parsed.categories;
      savedData =
        parsed.savedData &&
        typeof parsed.savedData === "object"
          ? parsed.savedData
          : {};
    } else {
      categories = cloneDefaults();
      savedData = {};
    }
  } catch (error) {
    console.error("Could not load planner:", error);

    categories = cloneDefaults();
    savedData = {};
  }

  normaliseCategories();
}

function normaliseCategories() {
  if (!Array.isArray(categories)) {
    categories = [];
  }

  categories = categories
    .filter(category => category && typeof category === "object")
    .map(category => ({
      id: category.id || createId(category.name || "category"),
      name: String(category.name || "Unnamed category"),
      icon: String(category.icon || "📋"),
      items: Array.isArray(category.items)
        ? category.items.map(item => String(item))
        : []
    }));
}

function saveData() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 6,
        categories,
        savedData
      })
    );

    return true;
  } catch (error) {
    console.error("Could not save planner:", error);

    showToast(
      "Your planner could not be saved in this browser.",
      "error"
    );

    return false;
  }
}

/* ============================================================
   ITEM DATA
   ============================================================ */

function itemKey(categoryId, item) {
  return categoryId + "::" + item;
}

function getItem(categoryId, item) {
  const key = itemKey(categoryId, item);

  if (!savedData[key] || typeof savedData[key] !== "object") {
    savedData[key] = {
      status: "not",
      vendor: "",
      price: "",
      deadline: "",
      link: "",
      notes: "",
      enabled: true
    };
  }

  const data = savedData[key];

  if (!["not", "progress", "done"].includes(data.status)) {
    data.status = "not";
  }

  data.vendor = data.vendor || "";
  data.price = data.price || "";
  data.deadline = data.deadline || "";
  data.link = data.link || "";
  data.notes = data.notes || "";

  if (typeof data.enabled !== "boolean") {
    data.enabled = true;
  }

  return data;
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function buildNavigation() {
  const nav = document.getElementById("navigation");

  if (!nav) return;

  nav.innerHTML = "";

  const dashboard = document.createElement("button");

  dashboard.type = "button";
  dashboard.className =
    currentCategory === "dashboard" ? "active" : "";
  dashboard.innerHTML = "🏠 <span>Dashboard</span>";

  dashboard.addEventListener("click", showDashboard);

  nav.appendChild(dashboard);

  categories.forEach(category => {
    const button = document.createElement("button");

    button.type = "button";
    button.className =
      currentCategory === category.id ? "active" : "";

    button.innerHTML =
      escapeHTML(category.icon) +
      " <span>" +
      escapeHTML(category.name) +
      "</span>";

    button.addEventListener("click", () =>
      showCategory(category.id)
    );

    nav.appendChild(button);
  });
}

/* ============================================================
   PAGE NAVIGATION
   ============================================================ */

function showDashboard() {
  currentCategory = "dashboard";

  const dashboardPage = document.getElementById("dashboardPage");
  const categoryPage = document.getElementById("categoryPage");

  if (dashboardPage) dashboardPage.style.display = "block";
  if (categoryPage) categoryPage.style.display = "none";

  buildNavigation();
  renderDashboard();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showCategory(id) {
  const category = categories.find(c => c.id === id);

  if (!category) return;

  currentCategory = id;

  const dashboardPage = document.getElementById("dashboardPage");
  const categoryPage = document.getElementById("categoryPage");

  if (dashboardPage) dashboardPage.style.display = "none";
  if (categoryPage) categoryPage.style.display = "block";

  const title = document.getElementById("categoryTitle");

  if (title) {
    title.textContent =
      category.icon + " " + category.name;
  }

  const search = document.getElementById("itemSearch");
  const filter = document.getElementById("itemStatusFilter");

  if (search) search.value = "";
  if (filter) filter.value = "all";

  buildNavigation();
  renderCategory();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ============================================================
   DASHBOARD
   ============================================================ */

function renderDashboard() {
  let total = 0;
  let done = 0;
  let progress = 0;

  categories.forEach(category => {
    category.items.forEach(item => {
      const data = getItem(category.id, item);

      if (!data.enabled) return;

      total++;

      if (data.status === "done") done++;
      if (data.status === "progress") progress++;
    });
  });

  const percent =
    total > 0 ? Math.round((done / total) * 100) : 0;

  const totalCount = document.getElementById("totalCount");
  const doneCount = document.getElementById("doneCount");
  const progressCount = document.getElementById("progressCount");
  const categoryCount = document.getElementById("categoryCount");
  const overallPercent = document.getElementById("overallPercent");
  const overallFill = document.getElementById("overallFill");

  if (totalCount) totalCount.textContent = total;
  if (doneCount) doneCount.textContent = done;
  if (progressCount) progressCount.textContent = progress;
  if (categoryCount) categoryCount.textContent = categories.length;
  if (overallPercent) overallPercent.textContent = percent + "%";
  if (overallFill) overallFill.style.width = percent + "%";

  const grid = document.getElementById("summaryGrid");

  if (!grid) return;

  grid.innerHTML = "";

  categories.forEach(category => {
    const stats = getCategoryStats(category);

    const card = document.createElement("button");

    card.type = "button";
    card.className = "summary-card";

    card.innerHTML = `
      <div class="summary-icon">${escapeHTML(category.icon)}</div>

      <h3>${escapeHTML(category.name)}</h3>

      <p>${stats.done} / ${stats.total} completed</p>

      <div class="summary-bar">
        <div style="width:${stats.percent}%"></div>
      </div>
    `;

    card.addEventListener("click", () =>
      showCategory(category.id)
    );

    grid.appendChild(card);
  });
}

function getCategoryStats(category) {
  let total = 0;
  let done = 0;

  category.items.forEach(item => {
    const data = getItem(category.id, item);

    if (!data.enabled) return;

    total++;

    if (data.status === "done") {
      done++;
    }
  });

  return {
    total,
    done,
    percent:
      total > 0
        ? Math.round((done / total) * 100)
        : 0
  };
}

/* ============================================================
   CATEGORY
   ============================================================ */

function renderCategory() {
  const category = categories.find(
    c => c.id === currentCategory
  );

  if (!category) return;

  const stats = getCategoryStats(category);

  const categoryPercent =
    document.getElementById("categoryPercent");

  const categoryProgressText =
    document.getElementById("categoryProgressText");

  if (categoryPercent) {
    categoryPercent.textContent = stats.percent + "%";
  }

  if (categoryProgressText) {
    categoryProgressText.textContent =
      stats.done + " / " + stats.total + " completed";
  }

  const searchInput =
    document.getElementById("itemSearch");

  const statusInput =
    document.getElementById("itemStatusFilter");

  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const status = statusInput
    ? statusInput.value
    : "all";

  const grid = document.getElementById("itemsGrid");

  if (!grid) return;

  grid.innerHTML = "";

  let visible = 0;

  category.items.forEach(item => {
    const data = getItem(category.id, item);

    if (!data.enabled) return;

    const searchable =
      (
        item +
        " " +
        data.vendor +
        " " +
        data.notes
      ).toLowerCase();

    const matchesSearch =
      !search || searchable.includes(search);

    const matchesStatus =
      status === "all" ||
      data.status === status;

    if (!matchesSearch || !matchesStatus) {
      return;
    }

    visible++;

    const card = document.createElement("button");

    card.type = "button";
    card.className =
      "item-card" +
      (data.status === "done" ? " done" : "");

    let statusText = "Not started";
    let statusClass = "";

    if (data.status === "progress") {
      statusText = "In progress";
      statusClass = " progress";
    }

    if (data.status === "done") {
      statusText = "Completed";
      statusClass = " done";
    }

    const vendorHTML = data.vendor
      ? `<p>👤 ${escapeHTML(data.vendor)}</p>`
      : `<p class="item-placeholder">Click to add details</p>`;

    const deadlineHTML = data.deadline
      ? `
        <div class="item-meta">
          📅 ${escapeHTML(formatDate(data.deadline))}
        </div>
      `
      : "";

    card.innerHTML = `
      <div class="item-top">
        <div class="item-icon">
          ${escapeHTML(category.icon)}
        </div>

        <div class="item-status${statusClass}">
          ${statusText}
        </div>
      </div>

      <h3>${escapeHTML(item)}</h3>

      ${vendorHTML}

      ${deadlineHTML}
    `;

    card.addEventListener("click", () =>
      openModal(category.id, item)
    );

    grid.appendChild(card);
  });

  const emptyMessage =
    document.getElementById("emptyMessage");

  if (emptyMessage) {
    emptyMessage.style.display =
      visible > 0 ? "none" : "block";
  }
}

/* ============================================================
   ITEM MODAL
   ============================================================ */

function openModal(categoryId, item) {
  const category = categories.find(
    c => c.id === categoryId
  );

  if (!category) return;

  currentItem = {
    categoryId,
    item
  };

  const data = getItem(categoryId, item);

  document.getElementById("modalCategory").textContent =
    category.name;

  document.getElementById("modalTitle").textContent =
    item;

  document.getElementById("vendorInput").value =
    data.vendor;

  document.getElementById("priceInput").value =
    data.price;

  document.getElementById("deadlineInput").value =
    data.deadline;

  document.getElementById("linkInput").value =
    data.link;

  document.getElementById("notesInput").value =
    data.notes;

  modalStatus = data.status;

  updateStatusButtons();
  updateDisableButton();

  const deleteArea =
    document.getElementById("customItemDeleteArea");

  if (deleteArea) {
    deleteArea.style.display =
      isCustomItem(categoryId, item)
        ? "block"
        : "none";
  }

  const overlay = document.getElementById("overlay");

  if (overlay) {
    overlay.classList.add("active");
    document.body.classList.add("modal-open");
  }
}

function closeModal() {
  const overlay = document.getElementById("overlay");

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.classList.remove("modal-open");

  currentItem = null;
}

/* ============================================================
   STATUS
   ============================================================ */

function chooseStatus(status) {
  modalStatus = status;
  updateStatusButtons();
}

function updateStatusButtons() {
  const buttons = {
    not: document.getElementById("notButton"),
    progress: document.getElementById("progressButton"),
    done: document.getElementById("doneButton")
  };

  Object.entries(buttons).forEach(([status, button]) => {
    if (!button) return;

    button.classList.toggle(
      "active",
      modalStatus === status
    );

    button.setAttribute(
      "aria-pressed",
      modalStatus === status
        ? "true"
        : "false"
    );
  });
}

/* ============================================================
   SAVE ITEM
   ============================================================ */

function saveItem() {
  if (!currentItem) return;

  const data = getItem(
    currentItem.categoryId,
    currentItem.item
  );

  data.status = modalStatus;

  data.vendor =
    document.getElementById("vendorInput").value.trim();

  data.price =
    document.getElementById("priceInput").value.trim();

  data.deadline =
    document.getElementById("deadlineInput").value;

  data.link =
    document.getElementById("linkInput").value.trim();

  data.notes =
    document.getElementById("notesInput").value.trim();

  if (saveData()) {
    closeModal();

    if (currentCategory === "dashboard") {
      showDashboard();
    } else {
      renderCategory();
      renderDashboard();
      buildNavigation();
    }

    showToast("Changes saved");
  }
}

/* ============================================================
   CLEAR ITEM
   ============================================================ */

function clearItem() {
  if (!currentItem) return;

  const confirmed = confirm(
    "Clear all details for this item?"
  );

  if (!confirmed) return;

  const data = getItem(
    currentItem.categoryId,
    currentItem.item
  );

  data.status = "not";
  data.vendor = "";
  data.price = "";
  data.deadline = "";
  data.link = "";
  data.notes = "";

  if (saveData()) {
    closeModal();

    if (currentCategory === "dashboard") {
      showDashboard();
    } else {
      renderCategory();
      renderDashboard();
    }

    showToast("Item details cleared");
  }
}

/* ============================================================
   ENABLE / DISABLE ITEM
   ============================================================ */

function updateDisableButton() {
  if (!currentItem) return;

  const button =
    document.getElementById("disableItemButton");

  const description =
    document.getElementById(
      "itemManagementDescription"
    );

  if (!button) return;

  const data = getItem(
    currentItem.categoryId,
    currentItem.item
  );

  if (data.enabled) {
    button.textContent = "Hide item";
    button.classList.remove("restore");
    
    if (description) {
      description.textContent =
        "Hide this item from the planner without deleting its details.";
    }
  } else {
    button.textContent = "Show item";
    button.classList.add("restore");

    if (description) {
      description.textContent =
        "This item is currently hidden. Show it again to return it to the planner.";
    }
  }
}

function toggleItemVisibility() {
  if (!currentItem) return;

  const data = getItem(
    currentItem.categoryId,
    currentItem.item
  );

  data.enabled = !data.enabled;

  if (!saveData()) return;

  const wasEnabled = data.enabled;

  closeModal();

  renderCategory();
  renderDashboard();

  showToast(
    wasEnabled
      ? "Item shown again"
      : "Item hidden from planner"
  );
}

/* ============================================================
   CUSTOM ITEM DELETE
   ============================================================ */

function isCustomItem(categoryId, item) {
  const defaultCategory =
    defaultCategories.find(
      category => category.id === categoryId
    );

  if (!defaultCategory) {
    return true;
  }

  return !defaultCategory.items.includes(item);
}

function deleteCustomItem() {
  if (!currentItem) return;

  if (
    !isCustomItem(
      currentItem.categoryId,
      currentItem.item
    )
  ) {
    return;
  }

  const confirmed = confirm(
    `Delete "${currentItem.item}" permanently?`
  );

  if (!confirmed) return;

  const category = categories.find(
    c => c.id === currentItem.categoryId
  );

  if (!category) return;

  category.items = category.items.filter(
    item => item !== currentItem.item
  );

  delete savedData[
    itemKey(
      currentItem.categoryId,
      currentItem.item
    )
  ];

  if (saveData()) {
    closeModal();

    renderCategory();
    renderDashboard();
    buildNavigation();

    showToast("Custom item deleted");
  }
}

/* ============================================================
   MANAGEMENT MODAL
   ============================================================ */

function openManagementModal(mode = "category") {
  managementMode = mode;

  const overlay =
    document.getElementById("managementOverlay");

  const title =
    document.getElementById("managementModalTitle");

  const nameInput =
    document.getElementById("managementNameInput");

  const iconInput =
    document.getElementById("managementIconInput");

  const iconGroup =
    document.getElementById("iconGroup");

  const saveButton =
    document.getElementById("saveManagementButton");

  if (!overlay || !title || !nameInput || !saveButton) {
    return;
  }

  nameInput.value = "";

  if (iconInput) {
    iconInput.value = "";
  }

  if (mode === "item") {
    const category = categories.find(
      c => c.id === currentCategory
    );

    if (!category) return;

    title.textContent = "Add item";
    nameInput.placeholder = "e.g. Wedding flowers";

    if (iconGroup) {
      iconGroup.style.display = "none";
    }

    saveButton.textContent = "Add item";
  } else {
    title.textContent = "Add category";
    nameInput.placeholder = "e.g. Flowers";

    if (iconGroup) {
      iconGroup.style.display = "block";
    }

    saveButton.textContent = "Add category";
  }

  overlay.classList.add("active");
  document.body.classList.add("modal-open");

  setTimeout(() => nameInput.focus(), 100);
}

function closeManagementModal() {
  const overlay =
    document.getElementById("managementOverlay");

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.classList.remove("modal-open");
}

function saveManagement() {
  const nameInput =
    document.getElementById("managementNameInput");

  const iconInput =
    document.getElementById("managementIconInput");

  if (!nameInput) return;

  const name = nameInput.value.trim();

  if (!name) {
    showToast(
      managementMode === "item"
        ? "Enter an item name."
        : "Enter a category name.",
      "error"
    );

    nameInput.focus();
    return;
  }

  /* ADD ITEM */

  if (managementMode === "item") {
    const category = categories.find(
      c => c.id === currentCategory
    );

    if (!category) return;

    const exists = category.items.some(
      item =>
        item.toLowerCase() ===
        name.toLowerCase()
    );

    if (exists) {
      showToast("This item already exists.", "error");
      nameInput.focus();
      return;
    }

    category.items.push(name);

    getItem(category.id, name);

    if (!saveData()) return;

    closeManagementModal();

    renderCategory();
    renderDashboard();

    showToast(`"${name}" added`);
    return;
  }

  /* ADD CATEGORY */

  const exists = categories.some(
    category =>
      category.name.toLowerCase() ===
      name.toLowerCase()
  );

  if (exists) {
    showToast(
      "A category with this name already exists.",
      "error"
    );

    nameInput.focus();
    return;
  }

  const icon =
    iconInput && iconInput.value.trim()
      ? iconInput.value.trim()
      : "📋";

  categories.push({
    id: createId(name),
    name,
    icon,
    items: []
  });

  if (!saveData()) return;

  closeManagementModal();

  buildNavigation();
  renderDashboard();

  showToast(`"${name}" added`);
}

/* ============================================================
   EXPORT
   ============================================================ */

function exportData() {
  try {
    saveData();

    const backup = {
      app: "Tamil Wedding Planner",
      version: 6,
      exportedAt: new Date().toISOString(),
      categories,
      savedData
    };

    const blob = new Blob(
      [JSON.stringify(backup, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;

    const now = new Date();

    link.download =
      "wedding-planner-backup-" +
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0") +
      ".json";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );

    showToast("Backup exported");
  } catch (error) {
    console.error("Export failed:", error);

    showToast(
      "Could not export planner.",
      "error"
    );
  }
}

/* ============================================================
   IMPORT
   ============================================================ */

function importData(event) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const imported = JSON.parse(
        e.target.result
      );

      if (
        !imported ||
        !Array.isArray(imported.categories)
      ) {
        throw new Error("Invalid backup");
      }

      const confirmed = confirm(
        "Import this wedding planner backup?\n\n" +
        "Your current planner data will be replaced."
      );

      if (!confirmed) {
        event.target.value = "";
        return;
      }

      categories = imported.categories;

      savedData =
        imported.savedData &&
        typeof imported.savedData === "object"
          ? imported.savedData
          : {};

      normaliseCategories();

      if (saveData()) {
        showDashboard();

        showToast(
          "Wedding planner imported successfully"
        );
      }
    } catch (error) {
      console.error("Import failed:", error);

      showToast(
        "This file is not a valid planner backup.",
        "error"
      );
    }

    event.target.value = "";
  };

  reader.onerror = function () {
    showToast(
      "Could not read the selected file.",
      "error"
    );

    event.target.value = "";
  };

  reader.readAsText(file);
}

/* ============================================================
   RESET
   ============================================================ */

function resetPlanner() {
  const confirmed = confirm(
    "Reset the entire wedding planner?\n\n" +
    "This will restore the original categories and remove all saved item details, custom categories and custom items.\n\n" +
    "This cannot be undone unless you have an exported backup."
  );

  if (!confirmed) return;

  categories = cloneDefaults();
  savedData = {};

  if (!saveData()) return;

  closeModal();
  closeManagementModal();

  showDashboard();

  showToast(
    "Planner has been reset to the original setup"
  );
}

/* ============================================================
   ADD ITEM
   ============================================================ */

function addItemToCurrentCategory() {
  if (
    !categories.some(
      category => category.id === currentCategory
    )
  ) {
    return;
  }

  openManagementModal("item");
}

/* ============================================================
   KEYBOARD / MODAL BEHAVIOUR
   ============================================================ */

function setupOverlayBehaviour(overlay, closeFunction) {
  if (!overlay) return;

  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      closeFunction();
    }
  });
}

/* ============================================================
   EVENTS
   ============================================================ */

function setupEvents() {
  /* DASHBOARD ACTIONS */

  const exportButton =
    document.getElementById("exportButton");

  const importButton =
    document.getElementById("importButton");

  const importFile =
    document.getElementById("importFile");

  const resetButton =
    document.getElementById("resetButton");

  if (exportButton) {
    exportButton.addEventListener(
      "click",
      exportData
    );
  }

  if (importButton && importFile) {
    importButton.addEventListener(
      "click",
      () => importFile.click()
    );
  }

  if (importFile) {
    importFile.addEventListener(
      "change",
      importData
    );
  }

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      resetPlanner
    );
  }

  /* ITEM MODAL */

  const closeModalButton =
    document.getElementById("closeModalButton");

  const saveButton =
    document.getElementById("saveButton");

  const clearButton =
    document.getElementById("clearButton");

  const notButton =
    document.getElementById("notButton");

  const progressButton =
    document.getElementById("progressButton");

  const doneButton =
    document.getElementById("doneButton");

  const disableItemButton =
    document.getElementById("disableItemButton");

  const deleteCustomItemButton =
    document.getElementById(
      "deleteCustomItemButton"
    );

  const overlay =
    document.getElementById("overlay");

  if (closeModalButton) {
    closeModalButton.addEventListener(
      "click",
      closeModal
    );
  }

  if (saveButton) {
    saveButton.addEventListener(
      "click",
      saveItem
    );
  }

  if (clearButton) {
    clearButton.addEventListener(
      "click",
      clearItem
    );
  }

  if (notButton) {
    notButton.addEventListener(
      "click",
      () => chooseStatus("not")
    );
  }

  if (progressButton) {
    progressButton.addEventListener(
      "click",
      () => chooseStatus("progress")
    );
  }

  if (doneButton) {
    doneButton.addEventListener(
      "click",
      () => chooseStatus("done")
    );
  }

  if (disableItemButton) {
    disableItemButton.addEventListener(
      "click",
      toggleItemVisibility
    );
  }

  if (deleteCustomItemButton) {
    deleteCustomItemButton.addEventListener(
      "click",
      deleteCustomItem
    );
  }

  setupOverlayBehaviour(
    overlay,
    closeModal
  );

  /* SEARCH */

  const search =
    document.getElementById("itemSearch");

  const filter =
    document.getElementById("itemStatusFilter");

  if (search) {
    search.addEventListener(
      "input",
      renderCategory
    );
  }

  if (filter) {
    filter.addEventListener(
      "change",
      renderCategory
    );
  }

  /* ADD CATEGORY */

  const addCategoryButton =
    document.getElementById(
      "addCategoryButton"
    );

  if (addCategoryButton) {
    addCategoryButton.addEventListener(
      "click",
      () => openManagementModal("category")
    );
  }

  /* ADD ITEM */

  const addItemButton =
    document.getElementById("addItemButton");

  if (addItemButton) {
    addItemButton.addEventListener(
      "click",
      addItemToCurrentCategory
    );
  }

  /* BACK */

  const backToDashboardButton =
    document.getElementById(
      "backToDashboardButton"
    );

  if (backToDashboardButton) {
    backToDashboardButton.addEventListener(
      "click",
      showDashboard
    );
  }

  /* MANAGEMENT MODAL */

  const managementOverlay =
    document.getElementById(
      "managementOverlay"
    );

  const closeManagementButton =
    document.getElementById(
      "closeManagementButton"
    );

  const cancelManagementButton =
    document.getElementById(
      "cancelManagementButton"
    );

  const saveManagementButton =
    document.getElementById(
      "saveManagementButton"
    );

  const managementNameInput =
    document.getElementById(
      "managementNameInput"
    );

  if (closeManagementButton) {
    closeManagementButton.addEventListener(
      "click",
      closeManagementModal
    );
  }

  if (cancelManagementButton) {
    cancelManagementButton.addEventListener(
      "click",
      closeManagementModal
    );
  }

  if (saveManagementButton) {
    saveManagementButton.addEventListener(
      "click",
      saveManagement
    );
  }

  setupOverlayBehaviour(
    managementOverlay,
    closeManagementModal
  );

  if (managementNameInput) {
    managementNameInput.addEventListener(
      "keydown",
      event => {
        if (event.key === "Enter") {
          event.preventDefault();
          saveManagement();
        }
      }
    );
  }

  /* ESCAPE */

  document.addEventListener(
    "keydown",
    event => {
      if (event.key !== "Escape") return;

      const overlay =
        document.getElementById("overlay");

      const managementOverlay =
        document.getElementById(
          "managementOverlay"
        );

      if (
        overlay &&
        overlay.classList.contains("active")
      ) {
        closeModal();
      }

      if (
        managementOverlay &&
        managementOverlay.classList.contains("active")
      ) {
        closeManagementModal();
      }
    }
  );
}

/* ============================================================
   START
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    loadData();
    setupEvents();
    buildNavigation();
    showDashboard();
  }
);
