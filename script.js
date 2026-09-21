/* ============================================================
   WEDDING PLANNER
============================================================ */


/* ============================================================
   CATEGORIES
============================================================ */

const categories = [

  {
    id: "guests",
    name: "Gæster",
    icon: "👥",
    items: [
      "Palaharam (Goodie bag)",
      "Hotels"
    ]
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
    items: [
      "Kopuramevents.fr"
    ]
  },

  {
    id: "accessories",
    name: "Accessories",
    icon: "✨",
    items: [
      "360 Booth",
      "Bridal Corner Setup"
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
    items: [
      "Chinna Mams",
      "Mami ?"
    ]
  },

  {
    id: "maalai",
    name: "Maalai",
    icon: "🌸",
    items: [
      "Herning Maalai"
    ]
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
    items: [
      "Wedding Cake",
      "Lighter + Knife"
    ]
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
    items: [
      "Lighting",
      "Projector"
    ]
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
    items: [
      "Palaharam (Goodie bag)"
    ]
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

const STORAGE_KEY = "tamilWeddingPlanner_v4";

let savedData = {};
let currentCategory = "dashboard";
let currentItem = null;
let modalStatus = "not";


/* ============================================================
   STORAGE - LOAD
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
   STORAGE - SAVE
============================================================ */

function saveData() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(savedData)
    );

    return true;

  } catch (error) {

    console.error("Could not save saved data:", error);

    alert(
      "Your data could not be saved in this browser."
    );

    return false;

  }

}


/* ============================================================
   EXPORT
============================================================ */

function exportData() {

  try {

    const saved = saveData();

    if (!saved) {
      return;
    }

    const backup = {
      app: "Tamil Wedding Planner",
      version: 1,
      exportedAt: new Date().toISOString(),
      data: savedData
    };

    const json = JSON.stringify(
      backup,
      null,
      2
    );

    const blob = new Blob(
      [json],
      {
        type: "application/json;charset=utf-8"
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
      now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      now.getDate()
    ).padStart(2, "0");

    link.download =
      `wedding-planner-backup-${year}-${month}-${day}.json`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );

    console.log(
      "Wedding planner data exported successfully."
    );

  } catch (error) {

    console.error(
      "Export failed:",
      error
    );

    alert(
      "Sorry, the wedding planner data could not be exported."
    );

  }

}


/* ============================================================
   IMPORT
============================================================ */

function importData(event) {

  if (
    !event ||
    !event.target ||
    !event.target.files ||
    !event.target.files.length
  ) {
    return;
  }

  const file = event.target.files[0];

  if (
    !file.name
      .toLowerCase()
      .endsWith(".json")
  ) {

    alert(
      "Please select a .json wedding planner backup file."
    );

    event.target.value = "";

    return;

  }

  const reader = new FileReader();

  reader.onload = function(e) {

    try {

      const imported = JSON.parse(
        e.target.result
      );

      let importedData;

      if (
        imported &&
        imported.data &&
        typeof imported.data === "object" &&
        !Array.isArray(imported.data)
      ) {

        importedData = imported.data;

      } else {

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

      const confirmed = confirm(
        "Import this wedding planner backup?\n\n" +
        "Your current planner data will be replaced by the backup."
      );

      if (!confirmed) {

        event.target.value = "";

        return;

      }

      savedData = importedData;

      if (!saveData()) {

        event.target.value = "";

        return;

      }

      if (currentCategory === "dashboard") {

        showDashboard();

      } else {

        showCategory(currentCategory);

      }

      alert(
        "Wedding planner data imported successfully! ❤️"
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
   ITEM KEY
============================================================ */

function itemKey(categoryId, item) {

  return `${categoryId}::${item}`;

}


/* ============================================================
   GET ITEM
============================================================ */

function getItem(categoryId, item) {

  const key = itemKey(
    categoryId,
    item
  );

  if (
    !savedData[key] ||
    typeof savedData[key] !== "object"
  ) {

    savedData[key] = {};

  }

  const data = savedData[key];

  data.status =
    typeof data.status === "string"
      ? data.status
      : "not";

  data.vendor =
    typeof data.vendor === "string"
      ? data.vendor
      : "";

  data.price =
    typeof data.price === "string"
      ? data.price
      : "";

  data.deadline =
    typeof data.deadline === "string"
      ? data.deadline
      : "";

  data.link =
    typeof data.link === "string"
      ? data.link
      : "";

  data.notes =
    typeof data.notes === "string"
      ? data.notes
      : "";

  return data;

}


/* ============================================================
   NAVIGATION
============================================================ */

function buildNavigation() {

  const nav = document.getElementById(
    "navigation"
  );

  if (!nav) {
    console.error(
      "Wedding Planner: #navigation was not found."
    );
    return;
  }

  nav.innerHTML = "";

  const dashboard = document.createElement(
    "button"
  );

  dashboard.type = "button";

  dashboard.textContent =
    "🏠 Dashboard";

  dashboard.className =
    currentCategory === "dashboard"
      ? "active"
      : "";

  dashboard.addEventListener(
    "click",
    showDashboard
  );

  nav.appendChild(dashboard);

  categories.forEach(
    category => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.textContent =
        `${category.icon} ${category.name}`;

      button.className =
        currentCategory === category.id
          ? "active"
          : "";

      button.addEventListener(
        "click",
        () => showCategory(category.id)
      );

      nav.appendChild(button);

    }
  );

}


/* ============================================================
   DASHBOARD
============================================================ */

function showDashboard() {

  currentCategory = "dashboard";

  const dashboardPage =
    document.getElementById(
      "dashboardPage"
    );

  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  if (!dashboardPage || !categoryPage) {
    console.error(
      "Wedding Planner: dashboard/category page elements are missing."
    );
    return;
  }

  dashboardPage.style.display = "block";
  categoryPage.style.display = "none";

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

  categories.forEach(
    category => {

      category.items.forEach(
        item => {

          total++;

          const data =
            getItem(
              category.id,
              item
            );

          if (data.status === "done") {
            done++;
          }

          if (data.status === "progress") {
            progress++;
          }

        }
      );

    }
  );

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

  const grid =
    document.getElementById("summaryGrid");

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
      `${percent}%`;
  }

  if (overallFill) {
    overallFill.style.width =
      `${percent}%`;
  }

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  categories.forEach(
    category => {

      const stats =
        getCategoryStats(category);

      const card =
        document.createElement("div");

      card.className =
        "summary-card";

      card.innerHTML = `

        <div
          style="
            font-size:25px;
            margin-bottom:10px;
          "
        >
          ${category.icon}
        </div>

        <h3>
          ${escapeHTML(category.name)}
        </h3>

        <p>
          ${stats.done}
          /
          ${stats.total}
          completed
        </p>

        <div class="summary-bar">

          <div
            style="width:${stats.percent}%"
          ></div>

        </div>

      `;

      card.addEventListener(
        "click",
        () => showCategory(category.id)
      );

      grid.appendChild(card);

    }
  );

}


/* ============================================================
   CATEGORY
============================================================ */

function showCategory(id) {

  const category =
    categories.find(
      c => c.id === id
    );

  if (!category) {
    return;
  }

  currentCategory = id;

  const dashboardPage =
    document.getElementById(
      "dashboardPage"
    );

  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  if (!dashboardPage || !categoryPage) {
    return;
  }

  dashboardPage.style.display = "none";

  categoryPage.style.display = "block";

  const categoryTitle =
    document.getElementById(
      "categoryTitle"
    );

  if (categoryTitle) {
    categoryTitle.textContent =
      `${category.icon} ${category.name}`;
  }

  const search =
    document.getElementById(
      "itemSearch"
    );

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
   CATEGORY STATS
============================================================ */

function getCategoryStats(category) {

  const total =
    category.items.length;

  const done =
    category.items.filter(
      item =>
        getItem(
          category.id,
          item
        ).status === "done"
    ).length;

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
   RENDER CATEGORY
============================================================ */

function renderCategory() {

  const category =
    categories.find(
      c => c.id === currentCategory
    );

  if (!category) {
    return;
  }

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

  const searchInput =
    document.getElementById(
      "itemSearch"
    );

  const statusFilter =
    document.getElementById(
      "itemStatusFilter"
    );

  const grid =
    document.getElementById(
      "itemsGrid"
    );

  const emptyMessage =
    document.getElementById(
      "emptyMessage"
    );

  if (!grid) {
    return;
  }

  if (categoryPercent) {
    categoryPercent.textContent =
      `${stats.percent}%`;
  }

  if (categoryProgressText) {
    categoryProgressText.textContent =
      `${stats.done} / ${stats.total} completed`;
  }

  const search =
    searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";

  const status =
    statusFilter
      ? statusFilter.value
      : "all";

  grid.innerHTML = "";

  let visible = 0;

  category.items.forEach(
    item => {

      const data =
        getItem(
          category.id,
          item
        );

      const vendor =
        data.vendor.toLowerCase();

      const notes =
        data.notes.toLowerCase();

      const matchesSearch =
        !search ||
        item.toLowerCase().includes(search) ||
        vendor.includes(search) ||
        notes.includes(search);

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

      const card =
        document.createElement("div");

      card.className =
        `item-card ${
          data.status === "done"
            ? "done"
            : ""
        }`;

      let statusText = "Not started";

      if (data.status === "progress") {
        statusText = "In progress";
      }

      if (data.status === "done") {
        statusText = "Completed";
      }

      let vendorHTML = `
        <p>
          Click to add details
        </p>
      `;

      if (data.vendor) {
        vendorHTML = `
          <p>
            👤
            ${escapeHTML(data.vendor)}
          </p>
        `;
      }

      let deadlineHTML = "";

      if (data.deadline) {
        deadlineHTML = `
          <div class="item-meta">
            📅
            ${formatDate(data.deadline)}
          </div>
        `;
      }

      card.innerHTML = `

        <div class="item-top">

          <div class="item-icon">
            ${category.icon}
          </div>

          <div
            class="
              item-status
              ${data.status === "progress" ? "progress" : ""}
              ${data.status === "done" ? "done" : ""}
            "
          >
            ${statusText}
          </div>

        </div>

        <h3>
          ${escapeHTML(item)}
        </h3>

        ${vendorHTML}

        ${deadlineHTML}

      `;

      card.addEventListener(
        "click",
        () => openModal(
          category.id,
          item
        )
      );

      grid.appendChild(card);

    }
  );

  if (emptyMessage) {
    emptyMessage.style.display =
      visible > 0
        ? "none"
        : "block";
  }

}


/* ============================================================
   MODAL
============================================================ */

function openModal(categoryId, item) {

  currentItem = {
    categoryId,
    item
  };

  const category =
    categories.find(
      c => c.id === categoryId
    );

  if (!category) {
    return;
  }

  const data =
    getItem(
      categoryId,
      item
    );

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
    document.getElementById(
      "overlay"
    );

  if (overlay) {
    overlay.classList.add("active");
  }

}


/* ============================================================
   CLOSE MODAL
============================================================ */

function closeModal() {

  const overlay =
    document.getElementById(
      "overlay"
    );

  if (overlay) {
    overlay.classList.remove("active");
  }

  currentItem = null;

}


/* ============================================================
   STATUS
============================================================ */

function chooseStatus(status) {

  if (
    status !== "not" &&
    status !== "progress" &&
    status !== "done"
  ) {
    return;
  }

  modalStatus = status;

  updateStatusButtons();

}


function updateStatusButtons() {

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

  if (!currentItem) {
    return;
  }

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

  data.status =
    modalStatus;

  data.vendor =
    vendorInput
      ? vendorInput.value
      : "";

  data.price =
    priceInput
      ? priceInput.value
      : "";

  data.deadline =
    deadlineInput
      ? deadlineInput.value
      : "";

  data.link =
    linkInput
      ? linkInput.value
      : "";

  data.notes =
    notesInput
      ? notesInput.value
      : "";

  if (!saveData()) {
    return;
  }

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

  if (!currentItem) {
    return;
  }

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

  if (!saveData()) {
    return;
  }

  closeModal();

  if (currentCategory === "dashboard") {
    showDashboard();
  } else {
    showCategory(currentCategory);
  }

}


/* ============================================================
   FORMAT DATE
============================================================ */

function formatDate(date) {

  if (!date) {
    return "";
  }

  const d =
    new Date(
      `${date}T00:00:00`
    );

  if (Number.isNaN(d.getTime())) {
    return date;
  }

  return d.toLocaleDateString(
    "en-DK",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );

}


/* ============================================================
   ESCAPE HTML
============================================================ */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* ============================================================
   INITIALIZE EVENTS
============================================================ */

function initializeEvents() {

  const itemSearch =
    document.getElementById(
      "itemSearch"
    );

  const itemStatusFilter =
    document.getElementById(
      "itemStatusFilter"
    );

  const importFile =
    document.getElementById(
      "importFile"
    );

  const overlay =
    document.getElementById(
      "overlay"
    );

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

  if (importFile) {

    importFile.addEventListener(
      "change",
      importData
    );

  }

  if (overlay) {

    overlay.addEventListener(
      "click",
      function(event) {

        if (
          event.target === overlay
        ) {

          closeModal();

        }

      }
    );

  }

  document.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key === "Escape"
      ) {

        closeModal();

      }

    }
  );

}


/* ============================================================
   START APPLICATION
============================================================ */

function initializeWeddingPlanner() {

  console.log(
    "Wedding Planner: JavaScript loaded."
  );

  try {

    loadData();

    initializeEvents();

    buildNavigation();

    showDashboard();

    console.log(
      "Wedding Planner: application started successfully."
    );

  } catch (error) {

    console.error(
      "Wedding Planner failed to start:",
      error
    );

  }

}


/*
 * Wait until the complete HTML document is ready.
 */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeWeddingPlanner
  );

} else {

  initializeWeddingPlanner();

}
