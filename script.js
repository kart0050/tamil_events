/* ============================================================
   WEDDING PLANNER
   ============================================================ */

/* ============================================================
   DEFAULT CATEGORIES
   ============================================================ */

const defaultCategories = [

  {
    id: "guests",
    name: "Gæster",
    icon: "👥",
    enabled: true,
    items: [
      "Palaharam (Goodie bag)",
      "Hotels"
    ]
  },

  {
    id: "toej",
    name: "Tøj",
    icon: "👗",
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
    items: [
      "Kopuramevents.fr"
    ]
  },

  {
    id: "accessories",
    name: "Accessories",
    icon: "✨",
    enabled: true,
    items: [
      "360 Booth",
      "Bridal Corner Setup"
    ]
  },

  {
    id: "henna",
    name: "Henna Fest",
    icon: "🌿",
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
    items: [
      "Chinna Mams",
      "Mami ?"
    ]
  },

  {
    id: "maalai",
    name: "Maalai",
    icon: "🌸",
    enabled: true,
    items: [
      "Herning Maalai"
    ]
  },

  {
    id: "food",
    name: "Food",
    icon: "🍛",
    enabled: true,
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
    enabled: true,
    items: [
      "Wedding Cake",
      "Lighter + Knife"
    ]
  },

  {
    id: "preshoot",
    name: "Preshoot",
    icon: "📸",
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
    items: [
      "Lighting",
      "Projector"
    ]
  },

  {
    id: "host",
    name: "Host",
    icon: "🎤",
    enabled: true,
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
    enabled: true,
    items: [
      "Palaharam (Goodie bag)"
    ]
  },

  {
    id: "speech",
    name: "Speech",
    icon: "🎤",
    enabled: true,
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

let categories = [];
let savedData = {};

let currentCategory = "dashboard";
let currentItem = null;
let modalStatus = "not";

let managementMode = null;
let managementCategoryId = null;
let managementItemIndex = null;

/* ============================================================
   HELPERS
   ============================================================ */

function generateId(prefix) {

  return (
    prefix +
    "-" +
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).slice(2, 8)
  );

}

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

function formatDate(value) {

  if (!value) {
    return "";
  }

  const date = new Date(value + "T00:00:00");

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString(
    undefined,
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );

}

/* ============================================================
   NORMALIZE CATEGORIES
   ============================================================ */

function normalizeCategories(input) {

  if (!Array.isArray(input)) {
    return JSON.parse(
      JSON.stringify(defaultCategories)
    );
  }

  return input
    .filter(function(category) {

      return (
        category &&
        typeof category === "object" &&
        typeof category.name === "string"
      );

    })
    .map(function(category) {

      return {

        id:
          typeof category.id === "string"
            ? category.id
            : generateId("category"),

        name:
          category.name.trim() ||
          "Unnamed category",

        icon:
          typeof category.icon === "string" &&
          category.icon.trim()
            ? category.icon.trim()
            : "📁",

        enabled:
          category.enabled !== false,

        items:
          Array.isArray(category.items)
            ? category.items
                .map(function(item) {

                  if (
                    typeof item === "string"
                  ) {

                    return {
                      name: item,
                      enabled: true
                    };

                  }

                  if (
                    item &&
                    typeof item === "object" &&
                    typeof item.name === "string"
                  ) {

                    return {
                      name: item.name,
                      enabled:
                        item.enabled !== false
                    };

                  }

                  return null;

                })
                .filter(Boolean)
            : []

      };

    });

}

/* ============================================================
   LOAD DATA
   ============================================================ */

function loadData() {

  try {

    const stored =
      localStorage.getItem(STORAGE_KEY);

    if (!stored) {

      categories =
        normalizeCategories(
          defaultCategories
        );

      savedData = {};

      saveData();

      return;

    }

    const parsed =
      JSON.parse(stored);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
    ) {

      if (Array.isArray(parsed.categories)) {

        categories =
          normalizeCategories(
            parsed.categories
          );

        savedData =
          parsed.items &&
          typeof parsed.items === "object"
            ? parsed.items
            : {};

      } else {

        /*
          Compatibility with the previous version.
          Old categories are restored and old saved
          item information is kept.
        */

        categories =
          normalizeCategories(
            defaultCategories
          );

        savedData =
          parsed;

      }

    } else {

      categories =
        normalizeCategories(
          defaultCategories
        );

      savedData = {};

    }

  } catch (error) {

    console.error(
      "Could not load saved data:",
      error
    );

    categories =
      normalizeCategories(
        defaultCategories
      );

    savedData = {};

  }

}

/* ============================================================
   SAVE DATA
   ============================================================ */

function saveData() {

  try {

    const payload = {

      version: 5,

      categories: categories,

      items: savedData

    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(payload)
    );

    return true;

  } catch (error) {

    console.error(
      "Could not save data:",
      error
    );

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

    saveData();

    const backup = {

      app: "Tamil Wedding Planner",

      version: 5,

      exportedAt:
        new Date().toISOString(),

      categories:
        categories,

      data:
        savedData

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

    setTimeout(
      function() {

        URL.revokeObjectURL(url);

      },
      1000
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

  const file =
    event.target.files[0];

  if (!file) {
    return;
  }

  const reader =
    new FileReader();

  reader.onload =
    function(e) {

      try {

        const imported =
          JSON.parse(
            e.target.result
          );

        let importedCategories = null;
        let importedItems = null;

        if (
          imported &&
          Array.isArray(
            imported.categories
          )
        ) {

          importedCategories =
            imported.categories;

          importedItems =
            imported.data &&
            typeof imported.data === "object"
              ? imported.data
              : imported.items || {};

        } else if (
          imported &&
          imported.data &&
          typeof imported.data === "object" &&
          !Array.isArray(imported.data)
        ) {

          /*
            Compatibility with the old backup format.
          */

          importedCategories =
            defaultCategories;

          importedItems =
            imported.data;

        } else if (
          imported &&
          typeof imported === "object" &&
          !Array.isArray(imported)
        ) {

          importedCategories =
            defaultCategories;

          importedItems =
            imported;

        }

        if (
          !Array.isArray(
            importedCategories
          ) ||
          !importedItems ||
          typeof importedItems !== "object"
        ) {

          throw new Error(
            "Invalid backup format"
          );

        }

        const confirmed =
          confirm(
            "Import this wedding planner backup?\n\n" +
            "Your current planner data will be replaced by the backup."
          );

        if (!confirmed) {

          event.target.value = "";

          return;

        }

        categories =
          normalizeCategories(
            importedCategories
          );

        savedData =
          importedItems;

        const saved =
          saveData();

        if (!saved) {

          event.target.value = "";

          return;

        }

        currentCategory =
          "dashboard";

        showDashboard();

        alert(
          "Wedding planner data imported successfully!"
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

  reader.onerror =
    function() {

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

function itemKey(
  categoryId,
  item
) {

  return (
    categoryId +
    "::" +
    item
  );

}

/* ============================================================
   GET ITEM DATA
   ============================================================ */

function getItem(
  categoryId,
  item
) {

  const key =
    itemKey(
      categoryId,
      item
    );

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
      notes: ""

    };

  }

  savedData[key].status =
    savedData[key].status || "not";

  savedData[key].vendor =
    savedData[key].vendor || "";

  savedData[key].price =
    savedData[key].price || "";

  savedData[key].deadline =
    savedData[key].deadline || "";

  savedData[key].link =
    savedData[key].link || "";

  savedData[key].notes =
    savedData[key].notes || "";

  return savedData[key];

}

/* ============================================================
   ACTIVE CATEGORIES
   ============================================================ */

function getEnabledCategories() {

  return categories.filter(
    function(category) {

      return category.enabled !== false;

    }
  );

}

/* ============================================================
   NAVIGATION
   ============================================================ */

function buildNavigation() {

  const nav =
    document.getElementById(
      "navigation"
    );

  if (!nav) {
    return;
  }

  nav.innerHTML = "";

  const dashboard =
    document.createElement("button");

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

  getEnabledCategories().forEach(
    function(category) {

      const button =
        document.createElement("button");

      button.type = "button";

      button.textContent =
        category.icon +
        " " +
        category.name;

      button.className =
        currentCategory === category.id
          ? "active"
          : "";

      button.addEventListener(
        "click",
        function() {

          showCategory(
            category.id
          );

        }
      );

      nav.appendChild(button);

    }
  );

}

/* ============================================================
   DASHBOARD
   ============================================================ */

function showDashboard() {

  currentCategory =
    "dashboard";

  const dashboardPage =
    document.getElementById(
      "dashboardPage"
    );

  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  if (dashboardPage) {
    dashboardPage.style.display =
      "block";
  }

  if (categoryPage) {
    categoryPage.style.display =
      "none";
  }

  buildNavigation();

  renderDashboard();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

/* ============================================================
   RENDER DASHBOARD
   ============================================================ */

function renderDashboard() {

  let total = 0;
  let done = 0;
  let progress = 0;

  getEnabledCategories().forEach(
    function(category) {

      category.items.forEach(
        function(item) {

          if (
            item.enabled === false
          ) {
            return;
          }

          total++;

          const data =
            getItem(
              category.id,
              item.name
            );

          if (
            data.status === "done"
          ) {
            done++;
          }

          if (
            data.status === "progress"
          ) {
            progress++;
          }

        }
      );

    }
  );

  const percent =
    total > 0
      ? Math.round(
          (done / total) * 100
        )
      : 0;

  const totalCount =
    document.getElementById(
      "totalCount"
    );

  const doneCount =
    document.getElementById(
      "doneCount"
    );

  const progressCount =
    document.getElementById(
      "progressCount"
    );

  const categoryCount =
    document.getElementById(
      "categoryCount"
    );

  const overallPercent =
    document.getElementById(
      "overallPercent"
    );

  const overallFill =
    document.getElementById(
      "overallFill"
    );

  if (totalCount) {
    totalCount.textContent = total;
  }

  if (doneCount) {
    doneCount.textContent = done;
  }

  if (progressCount) {
    progressCount.textContent =
      progress;
  }

  if (categoryCount) {
    categoryCount.textContent =
      getEnabledCategories().length;
  }

  if (overallPercent) {
    overallPercent.textContent =
      percent + "%";
  }

  if (overallFill) {
    overallFill.style.width =
      percent + "%";
  }

  renderManagementList();
  renderCategorySummary();

}

/* ============================================================
   CATEGORY SUMMARY
   ============================================================ */

function renderCategorySummary() {

  const grid =
    document.getElementById(
      "summaryGrid"
    );

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  getEnabledCategories().forEach(
    function(category) {

      const stats =
        getCategoryStats(
          category
        );

      const card =
        document.createElement("div");

      card.className =
        "summary-card";

      card.innerHTML =

        '<div class="summary-icon">' +
          escapeHTML(category.icon) +
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

      card.addEventListener(
        "click",
        function() {

          showCategory(
            category.id
          );

        }
      );

      grid.appendChild(card);

    }
  );

}

/* ============================================================
   SHOW CATEGORY
   ============================================================ */

function showCategory(id) {

  const category =
    categories.find(
      function(c) {

        return c.id === id;

      }
    );

  if (
    !category ||
    category.enabled === false
  ) {

    showDashboard();

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

  if (dashboardPage) {
    dashboardPage.style.display =
      "none";
  }

  if (categoryPage) {
    categoryPage.style.display =
      "block";
  }

  const categoryTitle =
    document.getElementById(
      "categoryTitle"
    );

  if (categoryTitle) {

    categoryTitle.textContent =
      category.icon +
      " " +
      category.name;

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

function getCategoryStats(
  category
) {

  const enabledItems =
    category.items.filter(
      function(item) {

        return item.enabled !== false;

      }
    );

  const total =
    enabledItems.length;

  let done = 0;

  enabledItems.forEach(
    function(item) {

      const data =
        getItem(
          category.id,
          item.name
        );

      if (
        data.status === "done"
      ) {

        done++;

      }

    }
  );

  const percent =
    total > 0
      ? Math.round(
          (done / total) * 100
        )
      : 0;

  return {
    total: total,
    done: done,
    percent: percent
  };

}

/* ============================================================
   RENDER CATEGORY
   ============================================================ */

function renderCategory() {

  const category =
    categories.find(
      function(c) {

        return c.id === currentCategory;

      }
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
    document.getElementById(
      "itemSearch"
    );

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
    document.getElementById(
      "itemsGrid"
    );

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  let visible = 0;

  category.items.forEach(
    function(item) {

      if (
        item.enabled === false
      ) {
        return;
      }

      const data =
        getItem(
          category.id,
          item.name
        );

      const itemText =
        String(item.name)
          .toLowerCase();

      const vendorText =
        String(
          data.vendor || ""
        )
          .toLowerCase();

      const notesText =
        String(
          data.notes || ""
        )
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

      const card =
        document.createElement("div");

      card.className =
        "item-card";

      if (
        data.status === "done"
      ) {

        card.classList.add("done");

      }

      let statusText =
        "Not started";

      let statusClass = "";

      if (
        data.status === "progress"
      ) {

        statusText =
          "In progress";

        statusClass =
          " progress";

      }

      if (
        data.status === "done"
      ) {

        statusText =
          "Completed";

        statusClass =
          " done";

      }

      let vendorHTML =
        "<p>Click to add details</p>";

      if (data.vendor) {

        vendorHTML =
          "<p>👤 " +
          escapeHTML(
            data.vendor
          ) +
          "</p>";

      }

      let deadlineHTML = "";

      if (data.deadline) {

        deadlineHTML =
          '<div class="item-meta">' +
            "📅 " +
            escapeHTML(
              formatDate(
                data.deadline
              )
            ) +
          "</div>";

      }

      card.innerHTML =

        '<div class="item-top">' +

          '<div class="item-icon">' +
            escapeHTML(category.icon) +
          "</div>" +

          '<div class="item-status' +
            statusClass +
          '">' +
            statusText +
          "</div>" +

        "</div>" +

        "<h3>" +
          escapeHTML(item.name) +
        "</h3>" +

        vendorHTML +

        deadlineHTML;

      card.addEventListener(
        "click",
        function() {

          openModal(
            category.id,
            item.name
          );

        }
      );

      grid.appendChild(card);

    }
  );

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
   ITEM MODAL
   ============================================================ */

function openModal(
  categoryId,
  item
) {

  currentItem = {
    categoryId: categoryId,
    item: item
  };

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
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

    overlay.classList.add(
      "active"
    );

  }

}

/* ============================================================
   CLOSE ITEM MODAL
   ============================================================ */

function closeModal() {

  const overlay =
    document.getElementById(
      "overlay"
    );

  if (overlay) {

    overlay.classList.remove(
      "active"
    );

  }

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

  saveData();

  closeModal();

  if (
    currentCategory === "dashboard"
  ) {

    showDashboard();

  } else {

    showCategory(
      currentCategory
    );

  }

}

/* ============================================================
   CLEAR ITEM
   ============================================================ */

function clearItem() {

  if (!currentItem) {
    return;
  }

  const confirmed =
    confirm(
      "Clear all information for this item?"
    );

  if (!confirmed) {
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

  saveData();

  closeModal();

  if (
    currentCategory === "dashboard"
  ) {

    showDashboard();

  } else {

    showCategory(
      currentCategory
    );

  }

}

/* ============================================================
   MANAGEMENT LIST
   ============================================================ */

function renderManagementList() {

  const container =
    document.getElementById(
      "managementList"
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  categories.forEach(
    function(category) {

      const wrapper =
        document.createElement("div");

      wrapper.className =
        "management-category";

      if (
        category.enabled === false
      ) {

        wrapper.classList.add(
          "disabled"
        );

      }

      const header =
        document.createElement("div");

      header.className =
        "management-category-header";

      header.innerHTML =

        '<div class="management-category-info">' +

          '<div class="management-category-icon">' +
            escapeHTML(category.icon) +
          "</div>" +

          "<div>" +

            "<h3>" +
              escapeHTML(category.name) +
            "</h3>" +

            "<span>" +
              (
                category.enabled === false
                  ? "Disabled"
                  : category.items.filter(
                      function(item) {
                        return item.enabled !== false;
                      }
                    ).length +
                    " active items"
              ) +
            "</span>" +

          "</div>" +

        "</div>";

      const categoryActions =
        document.createElement("div");

      categoryActions.className =
        "management-actions";

      const editCategory =
        createSmallButton(
          "✏️",
          "Edit category",
          function() {

            openCategoryManagement(
              category.id
            );

          }
        );

      const toggleCategory =
        createSmallButton(
          category.enabled === false
            ? "✓"
            : "⏸",
          category.enabled === false
            ? "Enable category"
            : "Disable category",
          function() {

            toggleCategory(
              category.id
            );

          }
        );

      const deleteCategory =
        createSmallButton(
          "🗑️",
          "Delete category",
          function() {

            deleteCategory(
              category.id
            );

          },
          true
        );

      categoryActions.appendChild(
        editCategory
      );

      categoryActions.appendChild(
        toggleCategory
      );

      categoryActions.appendChild(
        deleteCategory
      );

      header.appendChild(
        categoryActions
      );

      wrapper.appendChild(header);

      const items =
        document.createElement("div");

      items.className =
        "management-items";

      category.items.forEach(
        function(item, index) {

          const row =
            document.createElement("div");

          row.className =
            "management-item-row";

          if (
            item.enabled === false
          ) {

            row.classList.add(
              "disabled"
            );

          }

          const itemName =
            document.createElement("span");

          itemName.textContent =
            item.name;

          const itemActions =
            document.createElement("div");

          itemActions.className =
            "management-actions";

          const editItem =
            createSmallButton(
              "✏️",
              "Edit item",
              function() {

                openItemManagement(
                  category.id,
                  index
                );

              }
            );

          const toggleItem =
            createSmallButton(
              item.enabled === false
                ? "✓"
                : "⏸",
              item.enabled === false
                ? "Enable item"
                : "Disable item",
              function() {

                toggleItem(
                  category.id,
                  index
                );

              }
            );

          const deleteItemButton =
            createSmallButton(
              "🗑️",
              "Delete item",
              function() {

                deleteItem(
                  category.id,
                  index
                );

              },
              true
            );

          itemActions.appendChild(
            editItem
          );

          itemActions.appendChild(
            toggleItem
          );

          itemActions.appendChild(
            deleteItemButton
          );

          row.appendChild(itemName);

          row.appendChild(itemActions);

          items.appendChild(row);

        }
      );

      const addItemButton =
        document.createElement("button");

      addItemButton.type = "button";

      addItemButton.className =
        "management-add-item";

      addItemButton.textContent =
        "+ Add item";

      addItemButton.addEventListener(
        "click",
        function() {

          openItemManagement(
            category.id,
            null
          );

        }
      );

      items.appendChild(
        addItemButton
      );

      wrapper.appendChild(items);

      container.appendChild(wrapper);

    }
  );

}

function createSmallButton(
  icon,
  title,
  handler,
  danger
) {

  const button =
    document.createElement("button");

  button.type = "button";

  button.className =
    "icon-button";

  if (danger) {

    button.classList.add(
      "danger"
    );

  }

  button.textContent =
    icon;

  button.title =
    title;

  button.setAttribute(
    "aria-label",
    title
  );

  button.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();

      handler();

    }
  );

  return button;

}

/* ============================================================
   ADD / EDIT CATEGORY
   ============================================================ */

function openCategoryManagement(
  categoryId
) {

  managementMode =
    categoryId
      ? "edit-category"
      : "add-category";

  managementCategoryId =
    categoryId || null;

  managementItemIndex =
    null;

  const title =
    document.getElementById(
      "managementModalTitle"
    );

  const nameInput =
    document.getElementById(
      "managementNameInput"
    );

  const iconInput =
    document.getElementById(
      "managementIconInput"
    );

  const iconGroup =
    document.getElementById(
      "iconGroup"
    );

  if (managementMode === "edit-category") {

    const category =
      categories.find(
        function(c) {

          return c.id === categoryId;

        }
      );

    if (!category) {
      return;
    }

    if (title) {
      title.textContent =
        "Edit category";
    }

    if (nameInput) {
      nameInput.value =
        category.name;
    }

    if (iconInput) {
      iconInput.value =
        category.icon;
    }

    if (iconGroup) {
      iconGroup.style.display =
        "block";
    }

  } else {

    if (title) {
      title.textContent =
        "Add category";
    }

    if (nameInput) {
      nameInput.value = "";
    }

    if (iconInput) {
      iconInput.value = "📁";
    }

    if (iconGroup) {
      iconGroup.style.display =
        "block";
    }

  }

  openManagementOverlay();

}

/* ============================================================
   ADD / EDIT ITEM
   ============================================================ */

function openItemManagement(
  categoryId,
  itemIndex
) {

  managementCategoryId =
    categoryId;

  managementItemIndex =
    itemIndex;

  if (
    itemIndex === null ||
    typeof itemIndex === "undefined"
  ) {

    managementMode =
      "add-item";

  } else {

    managementMode =
      "edit-item";

  }

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
    );

  if (!category) {
    return;
  }

  const title =
    document.getElementById(
      "managementModalTitle"
    );

  const nameInput =
    document.getElementById(
      "managementNameInput"
    );

  const iconGroup =
    document.getElementById(
      "iconGroup"
    );

  const iconInput =
    document.getElementById(
      "managementIconInput"
    );

  if (iconGroup) {
    iconGroup.style.display =
      "none";
  }

  if (managementMode === "edit-item") {

    const item =
      category.items[itemIndex];

    if (!item) {
      return;
    }

    if (title) {
      title.textContent =
        "Edit item";
    }

    if (nameInput) {
      nameInput.value =
        item.name;
    }

  } else {

    if (title) {
      title.textContent =
        "Add item";
    }

    if (nameInput) {
      nameInput.value = "";
    }

  }

  if (iconInput) {
    iconInput.value = "";
  }

  openManagementOverlay();

}

/* ============================================================
   MANAGEMENT OVERLAY
   ============================================================ */

function openManagementOverlay() {

  const overlay =
    document.getElementById(
      "managementOverlay"
    );

  if (overlay) {

    overlay.classList.add(
      "active"
    );

  }

  setTimeout(
    function() {

      const input =
        document.getElementById(
          "managementNameInput"
        );

      if (input) {
        input.focus();
      }

    },
    50
  );

}

function closeManagementOverlay() {

  const overlay =
    document.getElementById(
      "managementOverlay"
    );

  if (overlay) {

    overlay.classList.remove(
      "active"
    );

  }

  managementMode = null;
  managementCategoryId = null;
  managementItemIndex = null;

}

/* ============================================================
   SAVE MANAGEMENT
   ============================================================ */

function saveManagement() {

  const nameInput =
    document.getElementById(
      "managementNameInput"
    );

  const iconInput =
    document.getElementById(
      "managementIconInput"
    );

  const name =
    nameInput
      ? nameInput.value.trim()
      : "";

  if (!name) {

    alert(
      "Please enter a name."
    );

    return;

  }

  /* ADD CATEGORY */

  if (
    managementMode ===
    "add-category"
  ) {

    const category =
      {

        id:
          generateId("category"),

        name:
          name,

        icon:
          iconInput &&
          iconInput.value.trim()
            ? iconInput.value.trim()
            : "📁",

        enabled: true,

        items: []

      };

    categories.push(category);

    saveData();

    closeManagementOverlay();

    renderDashboard();

    buildNavigation();

    return;

  }

  /* EDIT CATEGORY */

  if (
    managementMode ===
    "edit-category"
  ) {

    const category =
      categories.find(
        function(c) {

          return (
            c.id ===
            managementCategoryId
          );

        }
      );

    if (!category) {
      return;
    }

    category.name =
      name;

    category.icon =
      iconInput &&
      iconInput.value.trim()
        ? iconInput.value.trim()
        : "📁";

    saveData();

    closeManagementOverlay();

    renderDashboard();

    buildNavigation();

    if (
      currentCategory ===
      category.id
    ) {

      showCategory(
        category.id
      );

    }

    return;

  }

  /* ADD ITEM */

  if (
    managementMode ===
    "add-item"
  ) {

    const category =
      categories.find(
        function(c) {

          return (
            c.id ===
            managementCategoryId
          );

        }
      );

    if (!category) {
      return;
    }

    const exists =
      category.items.some(
        function(item) {

          return (
            item.name
              .toLowerCase() ===
            name.toLowerCase()
          );

        }
      );

    if (exists) {

      alert(
        "An item with this name already exists in this category."
      );

      return;

    }

    category.items.push({

      name: name,

      enabled: true

    });

    saveData();

    closeManagementOverlay();

    renderManagementList();

    if (
      currentCategory ===
      category.id
    ) {

      renderCategory();

    }

    return;

  }

  /* EDIT ITEM */

  if (
    managementMode ===
    "edit-item"
  ) {

    const category =
      categories.find(
        function(c) {

          return (
            c.id ===
            managementCategoryId
          );

        }
      );

    if (!category) {
      return;
    }

    const item =
      category.items[
        managementItemIndex
      ];

    if (!item) {
      return;
    }

    const oldName =
      item.name;

    if (
      oldName !== name &&
      category.items.some(
        function(other, index) {

          return (
            index !==
              managementItemIndex &&
            other.name
              .toLowerCase() ===
              name.toLowerCase()
          );

        }
      )
    ) {

      alert(
        "An item with this name already exists in this category."
      );

      return;

    }

    const oldKey =
      itemKey(
        category.id,
        oldName
      );

    const newKey =
      itemKey(
        category.id,
        name
      );

    if (
      oldKey !== newKey &&
      savedData[oldKey]
    ) {

      savedData[newKey] =
        savedData[oldKey];

      delete savedData[oldKey];

    }

    item.name =
      name;

    saveData();

    closeManagementOverlay();

    renderManagementList();

    if (
      currentCategory ===
      category.id
    ) {

      renderCategory();

    }

  }

}

/* ============================================================
   TOGGLE CATEGORY
   ============================================================ */

function toggleCategory(
  categoryId
) {

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
    );

  if (!category) {
    return;
  }

  category.enabled =
    category.enabled === false;

  saveData();

  if (
    currentCategory ===
    categoryId &&
    category.enabled === false
  ) {

    currentCategory =
      "dashboard";

  }

  renderDashboard();

  buildNavigation();

  if (
    currentCategory ===
    categoryId
  ) {

    showCategory(
      categoryId
    );

  } else {

    showDashboard();

  }

}

/* ============================================================
   TOGGLE ITEM
   ============================================================ */

function toggleItem(
  categoryId,
  itemIndex
) {

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
    );

  if (!category) {
    return;
  }

  const item =
    category.items[itemIndex];

  if (!item) {
    return;
  }

  item.enabled =
    item.enabled === false;

  saveData();

  renderManagementList();

  if (
    currentCategory ===
    categoryId
  ) {

    renderCategory();

  } else {

    renderDashboard();

  }

}

/* ============================================================
   DELETE CATEGORY
   ============================================================ */

function deleteCategory(
  categoryId
) {

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
    );

  if (!category) {
    return;
  }

  const confirmed =
    confirm(
      'Delete the category "' +
      category.name +
      '"?\n\n' +
      "This will also remove its items from the planner."
    );

  if (!confirmed) {
    return;
  }

  categories =
    categories.filter(
      function(c) {

        return c.id !== categoryId;

      }
    );

  Object.keys(savedData).forEach(
    function(key) {

      if (
        key.indexOf(
          categoryId + "::"
        ) === 0
      ) {

        delete savedData[key];

      }

    }
  );

  saveData();

  currentCategory =
    "dashboard";

  renderDashboard();

  buildNavigation();

}

/* ============================================================
   DELETE ITEM
   ============================================================ */

function deleteItem(
  categoryId,
  itemIndex
) {

  const category =
    categories.find(
      function(c) {

        return c.id === categoryId;

      }
    );

  if (!category) {
    return;
  }

  const item =
    category.items[itemIndex];

  if (!item) {
    return;
  }

  const confirmed =
    confirm(
      'Delete the item "' +
      item.name +
      '"?'
    );

  if (!confirmed) {
    return;
  }

  const key =
    itemKey(
      category.id,
      item.name
    );

  delete savedData[key];

  category.items.splice(
    itemIndex,
    1
  );

  saveData();

  renderManagementList();

  if (
    currentCategory ===
    categoryId
  ) {

    renderCategory();

  } else {

    renderDashboard();

  }

}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

function setupEventListeners() {

  const exportButton =
    document.getElementById(
      "exportButton"
    );

  if (exportButton) {

    exportButton.addEventListener(
      "click",
      exportData
    );

  }

  const importButton =
    document.getElementById(
      "importButton"
    );

  const importFile =
    document.getElementById(
      "importFile"
    );

  if (
    importButton &&
    importFile
  ) {

    importButton.addEventListener(
      "click",
      function() {

        importFile.click();

      }
    );

    importFile.addEventListener(
      "change",
      importData
    );

  }

  const addCategoryButton =
    document.getElementById(
      "addCategoryButton"
    );

  if (addCategoryButton) {

    addCategoryButton.addEventListener(
      "click",
      function() {

        openCategoryManagement();

      }
    );

  }

  const addItemButton =
    document.getElementById(
      "addItemButton"
    );

  if (addItemButton) {

    addItemButton.addEventListener(
      "click",
      function() {

        if (
          currentCategory !==
          "dashboard"
        ) {

          openItemManagement(
            currentCategory,
            null
          );

        }

      }
    );

  }

  const manageCurrentCategoryButton =
    document.getElementById(
      "manageCurrentCategoryButton"
    );

  if (
    manageCurrentCategoryButton
  ) {

    manageCurrentCategoryButton.addEventListener(
      "click",
      function() {

        if (
          currentCategory !==
          "dashboard"
        ) {

          openCategoryManagement(
            currentCategory
          );

        }

      }
    );

  }

  const backButton =
    document.getElementById(
      "backToDashboardButton"
    );

  if (backButton) {

    backButton.addEventListener(
      "click",
      showDashboard
    );

  }

  const closeModalButton =
    document.getElementById(
      "closeModalButton"
    );

  if (closeModalButton) {

    closeModalButton.addEventListener(
      "click",
      closeModal
    );

  }

  const saveButton =
    document.getElementById(
      "saveButton"
    );

  if (saveButton) {

    saveButton.addEventListener(
      "click",
      saveItem
    );

  }

  const clearButton =
    document.getElementById(
      "clearButton"
    );

  if (clearButton) {

    clearButton.addEventListener(
      "click",
      clearItem
    );

  }

  const notButton =
    document.getElementById(
      "notButton"
    );

  if (notButton) {

    notButton.addEventListener(
      "click",
      function() {

        chooseStatus("not");

      }
    );

  }

  const progressButton =
    document.getElementById(
      "progressButton"
    );

  if (progressButton) {

    progressButton.addEventListener(
      "click",
      function() {

        chooseStatus("progress");

      }
    );

  }

  const doneButton =
    document.getElementById(
      "doneButton"
    );

  if (doneButton) {

    doneButton.addEventListener(
      "click",
      function() {

        chooseStatus("done");

      }
    );

  }

  const searchInput =
    document.getElementById(
      "itemSearch"
    );

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderCategory
    );

  }

  const statusFilter =
    document.getElementById(
      "itemStatusFilter"
    );

  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      renderCategory
    );

  }

  const closeManagementButton =
    document.getElementById(
      "closeManagementButton"
    );

  if (closeManagementButton) {

    closeManagementButton.addEventListener(
      "click",
      closeManagementOverlay
    );

  }

  const cancelManagementButton =
    document.getElementById(
      "cancelManagementButton"
    );

  if (cancelManagementButton) {

    cancelManagementButton.addEventListener(
      "click",
      closeManagementOverlay
    );

  }

  const saveManagementButton =
    document.getElementById(
      "saveManagementButton"
    );

  if (saveManagementButton) {

    saveManagementButton.addEventListener(
      "click",
      saveManagement
    );

  }

  const overlay =
    document.getElementById(
      "overlay"
    );

  if (overlay) {

    overlay.addEventListener(
      "click",
      function(event) {

        if (
          event.target ===
          overlay
        ) {

          closeModal();

        }

      }
    );

  }

  const managementOverlay =
    document.getElementById(
      "managementOverlay"
    );

  if (managementOverlay) {

    managementOverlay.addEventListener(
      "click",
      function(event) {

        if (
          event.target ===
          managementOverlay
        ) {

          closeManagementOverlay();

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

        closeManagementOverlay();

      }

    }
  );

}

/* ============================================================
   START APPLICATION
   ============================================================ */

function init() {

  loadData();

  setupEventListeners();

  buildNavigation();

  showDashboard();

}

document.addEventListener(
  "DOMContentLoaded",
  init
);
