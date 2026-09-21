/* ============================================================
   TAMIL WEDDING PLANNER
   Complete JavaScript
============================================================ */

"use strict";

/* ============================================================
   CATEGORIES
============================================================ */

const categories = [
  {
    id: "guests",
    name: "Gæster",
    icon: "👥",
    items: ["Palaharam (Goodie bag)", "Hotels"]
  },
  {
    id: "toej",
    name: "Tøj",
    icon: "👗",
    items: [
      "Manavarai saree",
      "Koorai saree (Rød)",
      "Vetti sattai",
      "Sko",
      "Vetti Sattai Grooms Mate",
      "Saree Bridesmaid",
      "Tøj til preshoot"
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
    id: "kovil-decoration",
    name: "Decoration Kovil",
    icon: "🛕",
    items: ["Kopuramevents.fr"]
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "✨",
    items: ["360 Booth", "Bridal Corner Setup"]
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
    id: "kalyaanam",
    name: "Kalyaanam Veedu",
    icon: "🏠",
    items: [
      "Herning Kovil",
      "Civil Weds (Ring)",
      "Udlandet",
      "Amorasareesdk",
      "Ranyasarees"
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
    id: "food",
    name: "Food",
    icon: "🍛",
    items: [
      "Poovi Mama Horsens",
      "Kammali Randers",
      "Tamil Ondrai Aarhus",
      "Dhoni",
      "Appam",
      "Vaathali og Pako"
    ]
  },
  {
    id: "cake",
    name: "Bryllupskage",
    icon: "🎂",
    items: ["Wedding Cake", "Lighter + Knife"]
  },
  {
    id: "preshoot",
    name: "Preshoot",
    icon: "📸",
    items: [
      "Views of Nivi",
      "Sana",
      "Visual Eyes",
      "Nomad",
      "Through the ringer",
      "Swiss (Interlaken)"
    ]
  },
  {
    id: "photo-video",
    name: "Photo + Video",
    icon: "📷",
    items: [
      "Visual Eyes",
      "Vividmemoir.dk",
      "infocus"
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
    id: "hall",
    name: "Hall",
    icon: "🏛️",
    items: [
      "Sana Palace RA",
      "E-Plaza AA",
      "Babylon AA",
      "Food & Drinks",
      "Sweets for children",
      "Bar",
      "Dessert",
      "Palaharam",
      "Tea Can",
      "Decoration"
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
    id: "operator",
    name: "Operator",
    icon: "🎛️",
    items: ["Lighting", "Projector"]
  },
  {
    id: "host",
    name: "Host",
    icon: "🎤",
    items: [
      "Vinu",
      "Mams",
      "Saddi",
      "Speech",
      "Games"
    ]
  },
  {
    id: "games",
    name: "Games (Yndlingsting)",
    icon: "🎲",
    items: ["Palaharam (Goodie bag)"]
  },
  {
    id: "speech",
    name: "Speech",
    icon: "🎤",
    items: [
      "Speech planning",
      "Speakers",
      "Order of speeches"
    ]
  }
];

/* ============================================================
   STORAGE
============================================================ */

const STORAGE_KEY = "tamilWeddingPlanner_v5";

let savedData = {};
let currentCategory = "dashboard";
let currentItem = null;
let modalStatus = "not";

/* ============================================================
   UTILITY
============================================================ */

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

/* ============================================================
   LOAD DATA
============================================================ */

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      savedData = {};
      return;
    }

    const parsed = JSON.parse(stored);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
    ) {
      savedData = parsed;
    } else {
      savedData = {};
    }
  } catch (error) {
    console.error("Could not load saved data:", error);
    savedData = {};
  }
}

/* ============================================================
   SAVE DATA
============================================================ */

function saveData() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(savedData)
    );

    return true;
  } catch (error) {
    console.error("Could not save data:", error);

    alert(
      "Your data could not be saved in this browser."
    );

    return false;
  }
}

/* ============================================================
   ITEM KEY
============================================================ */

function itemKey(categoryId, itemId) {
  return categoryId + "::" + itemId;
}

/* ============================================================
   GET ITEM
============================================================ */

function getItem(categoryId, itemId) {
  const key = itemKey(categoryId, itemId);

  if (
    !savedData[key] ||
    typeof savedData[key] !== "object"
  ) {
    savedData[key] = {
      status: "not",
      vendor: "",
      price: "",
      deadline: "",
      link: "",
      notes: "",
      disabled: false,
      custom: false
    };
  }

  const data = savedData[key];

  data.status = data.status || "not";
  data.vendor = data.vendor || "";
  data.price = data.price || "";
  data.deadline = data.deadline || "";
  data.link = data.link || "";
  data.notes = data.notes || "";
  data.disabled = Boolean(data.disabled);
  data.custom = Boolean(data.custom);

  return data;
}

/* ============================================================
   GET CATEGORY
============================================================ */

function getCategory(categoryId) {
  return categories.find(
    category => category.id === categoryId
  );
}

/* ============================================================
   GET ACTIVE ITEMS
============================================================ */

function getActiveItems(category) {
  return category.items.filter(item => {
    const data = getItem(category.id, item);
    return !data.disabled;
  });
}

/* ============================================================
   NAVIGATION
============================================================ */

function buildNavigation() {
  const nav = document.getElementById("navigation");

  if (!nav) return;

  nav.innerHTML = "";

  const dashboardButton =
    document.createElement("button");

  dashboardButton.type = "button";
  dashboardButton.textContent = "🏠 Dashboard";

  if (currentCategory === "dashboard") {
    dashboardButton.classList.add("active");
  }

  dashboardButton.addEventListener(
    "click",
    showDashboard
  );

  nav.appendChild(dashboardButton);

  categories.forEach(category => {
    const button =
      document.createElement("button");

    button.type = "button";

    button.textContent =
      category.icon + " " + category.name;

    if (currentCategory === category.id) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      showCategory(category.id);
    });

    nav.appendChild(button);
  });
}

/* ============================================================
   DASHBOARD
============================================================ */

function showDashboard() {
  currentCategory = "dashboard";

  const dashboardPage =
    document.getElementById("dashboardPage");

  const categoryPage =
    document.getElementById("categoryPage");

  if (dashboardPage) {
    dashboardPage.style.display = "block";
  }

  if (categoryPage) {
    categoryPage.style.display = "none";
  }

  buildNavigation();
  renderDashboard();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ============================================================
   DASHBOARD RENDER
============================================================ */

function renderDashboard() {
  let total = 0;
  let done = 0;
  let progress = 0;

  categories.forEach(category => {
    getActiveItems(category).forEach(item => {
      total++;

      const data = getItem(
        category.id,
        item
      );

      if (data.status === "done") {
        done++;
      }

      if (data.status === "progress") {
        progress++;
      }
    });
  });

  const percent =
    total > 0
      ? Math.round((done / total) * 100)
      : 0;

  const totalCount =
    document.getElementById("totalCount");

  const doneCount =
    document.getElementById("doneCount");

  const progressCount =
    document.getElementById("progressCount");

  const categoryCount =
    document.getElementById("categoryCount");

  const overallPercent =
    document.getElementById("overallPercent");

  const overallFill =
    document.getElementById("overallFill");

  if (totalCount) {
    totalCount.textContent = total;
  }

  if (doneCount) {
    doneCount.textContent = done;
  }

  if (progressCount) {
    progressCount.textContent = progress;
  }

  if (categoryCount) {
    categoryCount.textContent =
      categories.length;
  }

  if (overallPercent) {
    overallPercent.textContent =
      percent + "%";
  }

  if (overallFill) {
    overallFill.style.width =
      percent + "%";
  }

  renderCategorySummary();
}

/* ============================================================
   CATEGORY SUMMARY
============================================================ */

function renderCategorySummary() {
  const grid =
    document.getElementById("summaryGrid");

  if (!grid) return;

  grid.innerHTML = "";

  categories.forEach(category => {
    const stats =
      getCategoryStats(category);

    const card =
      document.createElement("div");

    card.className = "summary-card";

    card.innerHTML =
      '<div class="summary-icon">' +
      category.icon +
      "</div>" +

      "<h3>" +
      escapeHTML(category.name) +
      "</h3>" +

      "<p>" +
      stats.done +
      " / " +
      stats.total +
      " completed" +
      "</p>" +

      '<div class="summary-bar">' +
      '<div style="width:' +
      stats.percent +
      '%"></div>' +
      "</div>";

    card.addEventListener("click", () => {
      showCategory(category.id);
    });

    grid.appendChild(card);
  });
}

/* ============================================================
   CATEGORY STATS
============================================================ */

function getCategoryStats(category) {
  const activeItems =
    getActiveItems(category);

  const total = activeItems.length;

  let done = 0;

  activeItems.forEach(item => {
    const data =
      getItem(category.id, item);

    if (data.status === "done") {
      done++;
    }
  });

  const percent =
    total > 0
      ? Math.round((done / total) * 100)
      : 0;

  return {
    total,
    done,
    percent
  };
}

/* ============================================================
   SHOW CATEGORY
============================================================ */

function showCategory(id) {
  const category = getCategory(id);

  if (!category) return;

  currentCategory = id;

  const dashboardPage =
    document.getElementById("dashboardPage");

  const categoryPage =
    document.getElementById("categoryPage");

  if (dashboardPage) {
    dashboardPage.style.display = "none";
  }

  if (categoryPage) {
    categoryPage.style.display = "block";
  }

  const categoryTitle =
    document.getElementById("categoryTitle");

  if (categoryTitle) {
    categoryTitle.textContent =
      category.icon + " " + category.name;
  }

  const search =
    document.getElementById("itemSearch");

  const filter =
    document.getElementById(
      "itemStatusFilter"
    );

  if (search) {
    search.value = "";
  }

  if (filter) {
    filter.value = "all";
  }

  buildNavigation();
  renderCategory();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ============================================================
   RENDER CATEGORY
============================================================ */

function renderCategory() {
  const category =
    getCategory(currentCategory);

  if (!category) return;

  const stats =
    getCategoryStats(category);

  const categoryPercent =
    document.getElementById(
      "categoryPercent"
    );

  const categoryProgressText =
    document.getElementById(
      "categoryProgressText"
    );

  if (categoryPercent) {
    categoryPercent.textContent =
      stats.percent + "%";
  }

  if (categoryProgressText) {
    categoryProgressText.textContent =
      stats.done +
      " / " +
      stats.total +
      " completed";
  }

  const searchInput =
    document.getElementById("itemSearch");

  const statusInput =
    document.getElementById(
      "itemStatusFilter"
    );

  const search =
    searchInput
      ? searchInput.value
          .toLowerCase()
          .trim()
      : "";

  const status =
    statusInput
      ? statusInput.value
      : "all";

  const grid =
    document.getElementById("itemsGrid");

  if (!grid) return;

  grid.innerHTML = "";

  let visible = 0;

  category.items.forEach(item => {
    const data =
      getItem(category.id, item);

    if (data.disabled) {
      return;
    }

    const itemText =
      item.toLowerCase();

    const vendorText =
      String(data.vendor || "")
        .toLowerCase();

    const notesText =
      String(data.notes || "")
        .toLowerCase();

    const matchesSearch =
      !search ||
      itemText.includes(search) ||
      vendorText.includes(search) ||
      notesText.includes(search);

    const matchesStatus =
      status === "all" ||
      data.status === status;

    if (
      !matchesSearch ||
      !matchesStatus
    ) {
      return;
    }

    visible++;

    createItemCard(
      category,
      item,
      data,
      grid
    );
  });

  const emptyMessage =
    document.getElementById(
      "emptyMessage"
    );

  if (emptyMessage) {
    emptyMessage.style.display =
      visible > 0
        ? "none"
        : "block";
  }
}

/* ============================================================
   CREATE ITEM CARD
============================================================ */

function createItemCard(
  category,
  item,
  data,
  grid
) {
  const card =
    document.createElement("div");

  card.className = "item-card";

  if (data.status === "done") {
    card.classList.add("done");
  }

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

  let vendorHTML =
    "<p>Click to add details</p>";

  if (data.vendor) {
    vendorHTML =
      "<p>👤 " +
      escapeHTML(data.vendor) +
      "</p>";
  }

  let deadlineHTML = "";

  if (data.deadline) {
    deadlineHTML =
      '<div class="item-meta">' +
      "📅 " +
      escapeHTML(
        formatDate(data.deadline)
      ) +
      "</div>";
  }

  card.innerHTML =
    '<div class="item-top">' +

    '<div class="item-icon">' +
    category.icon +
    "</div>" +

    '<div class="item-status' +
    statusClass +
    '">' +
    statusText +
    "</div>" +

    "</div>" +

    "<h3>" +
    escapeHTML(item) +
    "</h3>" +

    vendorHTML +

    deadlineHTML;

  card.addEventListener(
    "click",
    () => {
      openModal(
        category.id,
        item
      );
    }
  );

  grid.appendChild(card);
}

/* ============================================================
   OPEN MODAL
============================================================ */

function openModal(
  categoryId,
  item
) {
  currentItem = {
    categoryId,
    item
  };

  const category =
    getCategory(categoryId);

  if (!category) return;

  const data =
    getItem(categoryId, item);

  const modalCategory =
    document.getElementById(
      "modalCategory"
    );

  const modalTitle =
    document.getElementById(
      "modalTitle"
    );

  const vendorInput =
    document.getElementById(
      "vendorInput"
    );

  const priceInput =
    document.getElementById(
      "priceInput"
    );

  const deadlineInput =
    document.getElementById(
      "deadlineInput"
    );

  const linkInput =
    document.getElementById(
      "linkInput"
    );

  const notesInput =
    document.getElementById(
      "notesInput"
    );

  if (modalCategory) {
    modalCategory.textContent =
      category.name;
  }

  if (modalTitle) {
    modalTitle.textContent =
      item;
  }

  if (vendorInput) {
    vendorInput.value =
      data.vendor;
  }

  if (priceInput) {
    priceInput.value =
      data.price;
  }

  if (deadlineInput) {
    deadlineInput.value =
      data.deadline;
  }

  if (linkInput) {
    linkInput.value =
      data.link;
  }

  if (notesInput) {
    notesInput.value =
      data.notes;
  }

  modalStatus =
    data.status;

  updateStatusButtons();

  const overlay =
    document.getElementById("overlay");

  if (overlay) {
    overlay.classList.add("active");
  }
}

/* ============================================================
   CLOSE MODAL
============================================================ */

function closeModal() {
  const overlay =
    document.getElementById("overlay");

  if (overlay) {
    overlay.classList.remove("active");
  }

  currentItem = null;
}

/* ============================================================
   CHOOSE STATUS
============================================================ */

function chooseStatus(status) {
  if (
    !["not", "progress", "done"]
      .includes(status)
  ) {
    return;
  }

  modalStatus = status;

  updateStatusButtons();
}

/* ============================================================
   UPDATE STATUS BUTTONS
============================================================ */

function updateStatusButtons() {
  const notButton =
    document.getElementById("notButton");

  const progressButton =
    document.getElementById(
      "progressButton"
    );

  const doneButton =
    document.getElementById("doneButton");

  if (notButton) {
    notButton.classList.toggle(
      "active",
      modalStatus === "not"
    );
  }

  if (progressButton) {
    progressButton.classList.toggle(
      "active",
      modalStatus === "progress"
    );
  }

  if (doneButton) {
    doneButton.classList.toggle(
      "active",
      modalStatus === "done"
    );
  }
}

/* ============================================================
   SAVE ITEM
============================================================ */

function saveItem() {
  if (!currentItem) return;

  const data =
    getItem(
      currentItem.categoryId,
      currentItem.item
    );

  const vendorInput =
    document.getElementById(
      "vendorInput"
    );

  const priceInput =
    document.getElementById(
      "priceInput"
    );

  const deadlineInput =
    document.getElementById(
      "deadlineInput"
    );

  const linkInput =
    document.getElementById(
      "linkInput"
    );

  const notesInput =
    document.getElementById(
      "notesInput"
    );

  data.status = modalStatus;

  data.vendor =
    vendorInput
      ? vendorInput.value.trim()
      : "";

  data.price =
    priceInput
      ? priceInput.value.trim()
      : "";

  data.deadline =
    deadlineInput
      ? deadlineInput.value
      : "";

  data.link =
    linkInput
      ? linkInput.value.trim()
      : "";

  data.notes =
    notesInput
      ? notesInput.value.trim()
      : "";

  data.disabled = false;

  saveData();

  closeModal();

  if (currentCategory === "dashboard") {
    showDashboard();
  } else {
    showCategory(currentCategory);
  }
}

/* ============================================================
   CLEAR ITEM
============================================================ */

function clearItem() {
  if (!currentItem) return;

  const confirmed =
    confirm(
      "Clear all information for this item?"
    );

  if (!confirmed) return;

  const data =
    getItem(
      currentItem.categoryId,
      currentItem.item
    );

  data.status = "not";
  data.vendor = "";
  data.price = "";
  data.deadline = "";
  data.link = "";
  data.notes = "";

  saveData();

  closeModal();

  if (currentCategory === "dashboard") {
    showDashboard();
  } else {
    showCategory(currentCategory);
  }
}

/* ============================================================
   ADD ITEM
============================================================ */

function addItem(categoryId) {
  const category =
    getCategory(categoryId);

  if (!category) return;

  const name =
    prompt(
      "Enter the name of the new item:"
    );

  if (name === null) return;

  const cleanName =
    name.trim();

  if (!cleanName) {
    alert("Please enter an item name.");
    return;
  }

  const exists =
    category.items.some(
      item =>
        item.toLowerCase() ===
        cleanName.toLowerCase()
    );

  if (exists) {
    alert(
      "This item already exists in this category."
    );
    return;
  }

  category.items.push(cleanName);

  const data =
    getItem(
      category.id,
      cleanName
    );

  data.custom = true;
  data.disabled = false;

  saveData();

  renderCategory();
}

/* ============================================================
   DISABLE ITEM
============================================================ */

function disableCurrentItem() {
  if (!currentItem) return;

  const category =
    getCategory(
      currentItem.categoryId
    );

  if (!category) return;

  const data =
    getItem(
      currentItem.categoryId,
      currentItem.item
    );

  const confirmed =
    confirm(
      'Disable "' +
      currentItem.item +
      '"?\n\n' +
      "It will disappear from the category, but its data will be kept."
    );

  if (!confirmed) return;

  data.disabled = true;

  saveData();

  closeModal();

  renderCategory();
}

/* ============================================================
   RESTORE DISABLED ITEMS
============================================================ */

function restoreDisabledItems(categoryId) {
  const category =
    getCategory(categoryId);

  if (!category) return;

  let restored = 0;

  category.items.forEach(item => {
    const data =
      getItem(
        category.id,
        item
      );

    if (data.disabled) {
      data.disabled = false;
      restored++;
    }
  });

  saveData();

  renderCategory();

  if (restored === 0) {
    alert(
      "There are no disabled items in this category."
    );
  } else {
    alert(
      restored +
      " item(s) restored."
    );
  }
}

/* ============================================================
   DELETE CUSTOM ITEM
============================================================ */

function deleteCustomItem() {
  if (!currentItem) return;

  const category =
    getCategory(
      currentItem.categoryId
    );

  if (!category) return;

  const data =
    getItem(
      currentItem.categoryId,
      currentItem.item
    );

  if (!data.custom) {
    alert(
      "Built-in items cannot be deleted. You can disable them instead."
    );
    return;
  }

  const confirmed =
    confirm(
      'Permanently delete "' +
      currentItem.item +
      '"?'
    );

  if (!confirmed) return;

  const index =
    category.items.indexOf(
      currentItem.item
    );

  if (index !== -1) {
    category.items.splice(index, 1);
  }

  delete savedData[
    itemKey(
      currentItem.categoryId,
      currentItem.item
    )
  ];

  saveData();

  closeModal();

  renderCategory();
}

/* ============================================================
   IMPORT DATA
============================================================ */

function importData(event) {
  const file =
    event.target.files[0];

  if (!file) return;

  const reader =
    new FileReader();

  reader.onload = function(e) {
    try {
      const imported =
        JSON.parse(e.target.result);

      let importedData = null;

      if (
        imported &&
        imported.data &&
        typeof imported.data === "object" &&
        !Array.isArray(imported.data)
      ) {
        importedData =
          imported.data;
      } else if (
        imported &&
        typeof imported === "object" &&
        !Array.isArray(imported)
      ) {
        importedData = imported;
      }

      if (
        !importedData ||
        typeof importedData !== "object" ||
        Array.isArray(importedData)
      ) {
        throw new Error(
          "Invalid backup format"
        );
      }

      const confirmed =
        confirm(
          "Import this wedding planner backup?\n\n" +
          "Your current planner data will be replaced."
        );

      if (!confirmed) {
        event.target.value = "";
        return;
      }

      savedData = importedData;

      saveData();

      if (
        currentCategory ===
        "dashboard"
      ) {
        showDashboard();
      } else {
        showCategory(
          currentCategory
        );
      }

      alert(
        "Wedding planner data imported successfully."
      );
    } catch (error) {
      console.error(
        "Import failed:",
        error
      );

      alert(
        "This file is not a valid wedding planner backup."
      );
    }

    event.target.value = "";
  };

  reader.onerror = function() {
    alert(
      "Could not read the selected file."
    );

    event.target.value = "";
  };

  reader.readAsText(file);
}

/* ============================================================
   EXPORT DATA
============================================================ */

function exportData() {
  try {
    saveData();

    const backup = {
      app: "Tamil Wedding Planner",
      version: 5,
      exportedAt:
        new Date().toISOString(),
      data: savedData
    };

    const json =
      JSON.stringify(
        backup,
        null,
        2
      );

    const blob =
      new Blob(
        [json],
        {
          type: "application/json"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    const now = new Date();

    const year =
      now.getFullYear();

    const month =
      String(
        now.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        now.getDate()
      ).padStart(2, "0");

    link.download =
      "wedding-planner-backup-" +
      year +
      "-" +
      month +
      "-" +
      day +
      ".json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  } catch (error) {
    console.error(
      "Export failed:",
      error
    );

    alert(
      "Could not export your wedding planner data."
    );
  }
}

/* ============================================================
   KEYBOARD SUPPORT
============================================================ */

function setupKeyboardSupport() {
  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape"
      ) {
        closeModal();
      }
    }
  );
}

/* ============================================================
   EVENT LISTENERS
============================================================ */

function setupEventListeners() {
  const exportButton =
    document.getElementById(
      "exportButton"
    );

  const importButton =
    document.getElementById(
      "importButton"
    );

  const importFile =
    document.getElementById(
      "importFile"
    );

  const closeModalButton =
    document.getElementById(
      "closeModalButton"
    );

  const saveButton =
    document.getElementById(
      "saveButton"
    );

  const clearButton =
    document.getElementById(
      "clearButton"
    );

  const notButton =
    document.getElementById(
      "notButton"
    );

  const progressButton =
    document.getElementById(
      "progressButton"
    );

  const doneButton =
    document.getElementById(
      "doneButton"
    );

  const itemSearch =
    document.getElementById(
      "itemSearch"
    );

  const itemStatusFilter =
    document.getElementById(
      "itemStatusFilter"
    );

  if (exportButton) {
    exportButton.addEventListener(
      "click",
      exportData
    );
  }

  if (importButton && importFile) {
    importButton.addEventListener(
      "click",
      () => {
        importFile.click();
      }
    );
  }

  if (importFile) {
    importFile.addEventListener(
      "change",
      importData
    );
  }

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
      () => {
        chooseStatus("not");
      }
    );
  }

  if (progressButton) {
    progressButton.addEventListener(
      "click",
      () => {
        chooseStatus("progress");
      }
    );
  }

  if (doneButton) {
    doneButton.addEventListener(
      "click",
      () => {
        chooseStatus("done");
      }
    );
  }

  if (itemSearch) {
    itemSearch.addEventListener(
      "input",
      renderCategory
    );
  }

  if (itemStatusFilter) {
    itemStatusFilter.addEventListener(
      "change",
      renderCategory
    );
  }

  const overlay =
    document.getElementById("overlay");

  if (overlay) {
    overlay.addEventListener(
      "click",
      event => {
        if (event.target === overlay) {
          closeModal();
        }
      }
    );
  }
}

/* ============================================================
   ADD CATEGORY CONTROLS
============================================================ */

function addCategoryControls() {
  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  if (!categoryPage) return;

  let controls =
    document.getElementById(
      "categoryControls"
    );

  if (!controls) {
    controls =
      document.createElement("div");

    controls.id =
      "categoryControls";

    controls.style.display =
      "flex";

    controls.style.flexWrap =
      "wrap";

    controls.style.gap =
      "8px";

    controls.style.marginBottom =
      "20px";

    const searchArea =
      document.querySelector(
        ".search-area"
      );

    if (searchArea) {
      searchArea.parentNode.insertBefore(
        controls,
        searchArea
      );
    }
  }

  controls.innerHTML = "";

  const addButton =
    document.createElement("button");

  addButton.type = "button";

  addButton.textContent =
    "＋ Add item";

  addButton.style.border =
    "1px solid #741d3d";

  addButton.style.borderRadius =
    "11px";

  addButton.style.padding =
    "10px 15px";

  addButton.style.background =
    "#741d3d";

  addButton.style.color =
    "white";

  addButton.style.fontWeight =
    "700";

  addButton.addEventListener(
    "click",
    () => {
      addItem(currentCategory);
    }
  );

  const restoreButton =
    document.createElement("button");

  restoreButton.type = "button";

  restoreButton.textContent =
    "↻ Restore disabled";

  restoreButton.style.border =
    "1px solid #eadde1";

  restoreButton.style.borderRadius =
    "11px";

  restoreButton.style.padding =
    "10px 15px";

  restoreButton.style.background =
    "white";

  restoreButton.style.color =
    "#741d3d";

  restoreButton.style.fontWeight =
    "700";

  restoreButton.addEventListener(
    "click",
    () => {
      restoreDisabledItems(
        currentCategory
      );
    }
  );

  controls.appendChild(addButton);
  controls.appendChild(restoreButton);
}

/* ============================================================
   ADD DISABLE BUTTON TO MODAL
============================================================ */

function addDisableButtonToModal() {
  const modalActions =
    document.querySelector(
      ".modal-actions"
    );

  if (!modalActions) return;

  let disableButton =
    document.getElementById(
      "disableButton"
    );

  if (!disableButton) {
    disableButton =
      document.createElement("button");

    disableButton.id =
      "disableButton";

    disableButton.type =
      "button";

    disableButton.className =
      "clear";

    disableButton.textContent =
      "Disable item";

    modalActions.insertBefore(
      disableButton,
      modalActions.firstChild
    );
  }

  disableButton.onclick =
    disableCurrentItem;
}

/* ============================================================
   ADD DELETE BUTTON TO MODAL
============================================================ */

function addDeleteButtonToModal() {
  const modalActions =
    document.querySelector(
      ".modal-actions"
    );

  if (!modalActions) return;

  let deleteButton =
    document.getElementById(
      "deleteCustomButton"
    );

  if (!deleteButton) {
    deleteButton =
      document.createElement("button");

    deleteButton.id =
      "deleteCustomButton";

    deleteButton.type =
      "button";

    deleteButton.className =
      "clear";

    deleteButton.textContent =
      "Delete custom";

    modalActions.insertBefore(
      deleteButton,
      modalActions.firstChild
    );
  }

  deleteButton.onclick =
    deleteCustomItem;
}

/* ============================================================
   INITIALIZE
============================================================ */

function initializeApp() {
  loadData();

  setupEventListeners();

  setupKeyboardSupport();

  addCategoryControls();

  addDisableButtonToModal();

  addDeleteButtonToModal();

  buildNavigation();

  showDashboard();

  console.log(
    "Tamil Wedding Planner loaded successfully."
  );
}

/* ============================================================
   START APP
============================================================ */

if (
  document.readyState ===
  "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );
} else {
  initializeApp();
}
