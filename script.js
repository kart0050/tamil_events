/* ============================================================
   OUR WEDDING PLANNER
   script.js
   ============================================================ */

const STORAGE_KEY = "tamilWeddingPlanner_v8";

/* ============================================================
   DEFAULT CATEGORIES
   ============================================================ */

const defaultCategories = [
  {
    id: "guests",
    name: "Gæster",
    icon: "👥",
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
    enabled: true,
    items: [
      "Kopuramevents.fr"
    ]
  },

  {
    id: "accessories",
    name: "Accessories",
    icon: "✨",
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
    enabled: true,
    items: [
      "Herning Maalai"
    ]
  },

  {
    id: "food",
    name: "Food",
    icon: "🍛",
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
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
    predefined: true,
    enabled: true,
    items: [
      "Palaharam (Goodie bag)"
    ]
  },

  {
    id: "speech",
    name: "Speech",
    icon: "🎤",
    predefined: true,
    enabled: true,
    items: [
      "Speech planning",
      "Speakers",
      "Order of speeches"
    ]
  }
];


/* ============================================================
   APPLICATION STATE
   ============================================================ */

let categories = [];
let savedData = {};

let currentCategory = "dashboard";
let currentItem = null;

let modalStatus = "not";

let weddingDate = "";


/* ============================================================
   HELPERS
   ============================================================ */

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
  if (!dateString) {
    return "";
  }

  const date = new Date(
    dateString + "T00:00:00"
  );

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString(
    "da-DK",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }
  );
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
        structuredClone(defaultCategories);

      savedData = {};

      weddingDate = "";

      saveData();

      return;
    }

    const parsed =
      JSON.parse(stored);

    if (
      parsed &&
      typeof parsed === "object"
    ) {
      categories =
        Array.isArray(parsed.categories)
          ? parsed.categories
          : structuredClone(defaultCategories);

      savedData =
        parsed.savedData &&
        typeof parsed.savedData === "object"
          ? parsed.savedData
          : {};

      weddingDate =
        parsed.weddingDate || "";
    } else {
      categories =
        structuredClone(defaultCategories);

      savedData = {};

      weddingDate = "";
    }

  } catch (error) {

    console.error(
      "Could not load planner data:",
      error
    );

    categories =
      structuredClone(defaultCategories);

    savedData = {};

    weddingDate = "";
  }

  normaliseCategories();
}


/* ============================================================
   NORMALISE CATEGORIES
   ============================================================ */

function normaliseCategories() {

  if (!Array.isArray(categories)) {
    categories = [];
  }

  categories =
    categories
      .filter(
        category =>
          category &&
          typeof category === "object"
      )
      .map(category => {

        return {
          id:
            category.id ||
            createId(
              category.name ||
              "category"
            ),

          name:
            String(
              category.name ||
              "Unnamed category"
            ),

          icon:
            String(
              category.icon ||
              "📋"
            ),

          predefined:
            Boolean(
              category.predefined
            ),

          enabled:
            category.enabled !== false,

          items:
            Array.isArray(category.items)
              ? category.items.map(
                  item => String(item)
                )
              : []
        };

      });
}


/* ============================================================
   SAVE DATA
   ============================================================ */

function saveData() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 8,
        weddingDate,
        categories,
        savedData
      })
    );

    return true;

  } catch (error) {

    console.error(
      "Could not save planner data:",
      error
    );

    alert(
      "Your planner data could not be saved in this browser."
    );

    return false;
  }
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

      notes: "",

      enabled: true,

      custom: false
    };
  }

  const data =
    savedData[key];

  data.status =
    [
      "not",
      "progress",
      "done"
    ].includes(
      data.status
    )
      ? data.status
      : "not";

  data.vendor =
    data.vendor || "";

  data.price =
    data.price || "";

  data.deadline =
    data.deadline || "";

  data.link =
    data.link || "";

  data.notes =
    data.notes || "";

  if (
    typeof data.enabled !== "boolean"
  ) {
    data.enabled = true;
  }

  if (
    typeof data.custom !== "boolean"
  ) {
    data.custom = false;
  }

  return data;
}


/* ============================================================
   WEDDING DATE
   ============================================================ */

function setWeddingDate(date) {

  weddingDate =
    date || "";

  saveData();

  updateCountdown();
}


function updateCountdown() {

  const countdown =
    document.getElementById(
      "weddingCountdown"
    );

  const countdownText =
    document.getElementById(
      "weddingCountdownText"
    );

  const dateInput =
    document.getElementById(
      "weddingDateInput"
    );

  if (dateInput) {
    dateInput.value =
      weddingDate;
  }

  if (
    !countdown &&
    !countdownText
  ) {
    return;
  }

  if (!weddingDate) {

    if (countdown) {
      countdown.textContent =
        "Set your wedding date";
    }

    if (countdownText) {
      countdownText.textContent =
        "Choose your date to start the countdown.";
    }

    return;
  }

  const today =
    new Date();

  const target =
    new Date(
      weddingDate +
      "T00:00:00"
    );

  today.setHours(
    0,
    0,
    0,
    0
  );

  target.setHours(
    0,
    0,
    0,
    0
  );

  const difference =
    target.getTime() -
    today.getTime();

  const days =
    Math.ceil(
      difference /
      (1000 * 60 * 60 * 24)
    );

  if (days > 0) {

    const months =
      Math.floor(
        days / 30
      );

    const remainingDays =
      days % 30;

    if (countdown) {

      countdown.textContent =
        days +
        " days";
    }

    if (countdownText) {

      countdownText.textContent =
        months +
        " month" +
        (months === 1 ? "" : "s") +
        " and " +
        remainingDays +
        " day" +
        (remainingDays === 1 ? "" : "s") +
        " to go";

    }

  } else if (days === 0) {

    if (countdown) {
      countdown.textContent =
        "Today ❤️";
    }

    if (countdownText) {
      countdownText.textContent =
        "It's your wedding day!";
    }

  } else {

    const pastDays =
      Math.abs(days);

    if (countdown) {
      countdown.textContent =
        "Married ❤️";
    }

    if (countdownText) {
      countdownText.textContent =
        "Your wedding was " +
        pastDays +
        " days ago.";
    }
  }
}


/* ============================================================
   EXPORT
   ============================================================ */

function exportData() {

  try {

    saveData();

    const backup = {

      app:
        "Our Wedding Planner",

      version: 8,

      exportedAt:
        new Date().toISOString(),

      weddingDate,

      categories,

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
          type:
            "application/json"
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    const now =
      new Date();

    link.download =
      "wedding-planner-backup-" +
      now.getFullYear() +
      "-" +
      String(
        now.getMonth() + 1
      ).padStart(2, "0") +
      "-" +
      String(
        now.getDate()
      ).padStart(2, "0") +
      ".json";

    document.body.appendChild(
      link
    );

    link.click();

    document.body.removeChild(
      link
    );

    setTimeout(
      () => {
        URL.revokeObjectURL(
          url
        );
      },
      1000
    );

  } catch (error) {

    console.error(
      "Export failed:",
      error
    );

    alert(
      "Sorry, the planner data could not be exported."
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
    function (e) {

      try {

        const imported =
          JSON.parse(
            e.target.result
          );

        if (
          !imported ||
          !Array.isArray(
            imported.categories
          )
        ) {

          throw new Error(
            "Invalid backup"
          );
        }

        const confirmed =
          confirm(
            "Import this wedding planner backup?\n\nYour current planner data will be replaced."
          );

        if (!confirmed) {

          event.target.value =
            "";

          return;
        }

        categories =
          imported.categories;

        savedData =
          imported.savedData &&
          typeof imported.savedData ===
            "object"
            ? imported.savedData
            : {};

        weddingDate =
          imported.weddingDate ||
          "";

        normaliseCategories();

        if (saveData()) {

          showDashboard();

          updateCountdown();

          alert(
            "Wedding planner imported successfully! ❤️"
          );
        }

      } catch (error) {

        console.error(
          "Import failed:",
          error
        );

        alert(
          "This file is not a valid wedding planner backup."
        );
      }

      event.target.value =
        "";
    };

  reader.onerror =
    function () {

      alert(
        "Could not read the selected file."
      );

      event.target.value =
        "";
    };

  reader.readAsText(file);
}


/* ============================================================
   RESET PLANNER
   ============================================================ */

function resetPlanner() {

  const confirmed =
    confirm(
      "Reset the entire wedding planner?\n\nThis will remove your categories, items, wedding date and saved information."
    );

  if (!confirmed) {
    return;
  }

  const secondConfirm =
    confirm(
      "Are you absolutely sure?\n\nThis cannot be undone unless you have an exported backup."
    );

  if (!secondConfirm) {
    return;
  }

  categories =
    structuredClone(
      defaultCategories
    );

  savedData = {};

  weddingDate = "";

  currentCategory =
    "dashboard";

  currentItem =
    null;

  saveData();

  showDashboard();

  updateCountdown();

  alert(
    "Your wedding planner has been reset."
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

  nav.innerHTML =
    "";

  const dashboard =
    document.createElement(
      "button"
    );

  dashboard.type =
    "button";

  dashboard.className =
    currentCategory ===
    "dashboard"
      ? "active"
      : "";

  dashboard.innerHTML =
    "🏠 <span>Dashboard</span>";

  dashboard.addEventListener(
    "click",
    showDashboard
  );

  nav.appendChild(
    dashboard
  );

  categories
    .filter(
      category =>
        category.enabled
    )
    .forEach(
      category => {

        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          currentCategory ===
          category.id
            ? "active"
            : "";

        button.innerHTML =
          escapeHTML(
            category.icon
          ) +
          " <span>" +
          escapeHTML(
            category.name
          ) +
          "</span>";

        button.addEventListener(
          "click",
          () =>
            showCategory(
              category.id
            )
        );

        nav.appendChild(
          button
        );
      }
    );
}


/* ============================================================
   SHOW DASHBOARD
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

  const managePage =
    document.getElementById(
      "managePage"
    );

  if (dashboardPage) {
    dashboardPage.style.display =
      "block";
  }

  if (categoryPage) {
    categoryPage.style.display =
      "none";
  }

  if (managePage) {
    managePage.style.display =
      "none";
  }

  buildNavigation();

  renderDashboard();

  updateCountdown();

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

  categories
    .filter(
      category =>
        category.enabled
    )
    .forEach(
      category => {

        category.items.forEach(
          item => {

            const data =
              getItem(
                category.id,
                item
              );

            if (!data.enabled) {
              return;
            }

            total++;

            if (
              data.status ===
              "done"
            ) {
              done++;
            }

            if (
              data.status ===
              "progress"
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
          (done / total) *
          100
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
    totalCount.textContent =
      total;
  }

  if (doneCount) {
    doneCount.textContent =
      done;
  }

  if (progressCount) {
    progressCount.textContent =
      progress;
  }

  if (categoryCount) {
    categoryCount.textContent =
      categories.filter(
        category =>
          category.enabled
      ).length;
  }

  if (overallPercent) {
    overallPercent.textContent =
      percent + "%";
  }

  if (overallFill) {
    overallFill.style.width =
      percent + "%";
  }

  const grid =
    document.getElementById(
      "summaryGrid"
    );

  if (!grid) {
    return;
  }

  grid.innerHTML =
    "";

  categories
    .filter(
      category =>
        category.enabled
    )
    .forEach(
      category => {

        const stats =
          getCategoryStats(
            category
          );

        const card =
          document.createElement(
            "div"
          );

        card.className =
          "summary-card";

        card.innerHTML =

          '<div class="summary-icon">' +
          escapeHTML(
            category.icon
          ) +
          "</div>" +

          "<h3>" +
          escapeHTML(
            category.name
          ) +
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
          () =>
            showCategory(
              category.id
            )
        );

        grid.appendChild(
          card
        );
      }
    );
}


/* ============================================================
   CATEGORY STATS
   ============================================================ */

function getCategoryStats(
  category
) {

  let total = 0;
  let done = 0;

  category.items.forEach(
    item => {

      const data =
        getItem(
          category.id,
          item
        );

      if (!data.enabled) {
        return;
      }

      total++;

      if (
        data.status ===
        "done"
      ) {
        done++;
      }
    }
  );

  const percent =
    total > 0
      ? Math.round(
          (done / total) *
          100
        )
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

function showCategory(
  id
) {

  const category =
    categories.find(
      c =>
        c.id === id
    );

  if (
    !category ||
    !category.enabled
  ) {
    return;
  }

  currentCategory =
    id;

  const dashboardPage =
    document.getElementById(
      "dashboardPage"
    );

  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  const managePage =
    document.getElementById(
      "managePage"
    );

  if (dashboardPage) {
    dashboardPage.style.display =
      "none";
  }

  if (categoryPage) {
    categoryPage.style.display =
      "block";
  }

  if (managePage) {
    managePage.style.display =
      "none";
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
    search.value =
      "";
  }

  if (filter) {
    filter.value =
      "all";
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
    categories.find(
      c =>
        c.id ===
        currentCategory
    );

  if (!category) {
    return;
  }

  const stats =
    getCategoryStats(
      category
    );

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
      stats.percent +
      "%";
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

  grid.innerHTML =
    "";

  let visible = 0;

  category.items.forEach(
    item => {

      const data =
        getItem(
          category.id,
          item
        );

      if (!data.enabled) {
        return;
      }

      const itemText =
        item.toLowerCase();

      const vendorText =
        String(
          data.vendor || ""
        ).toLowerCase();

      const notesText =
        String(
          data.notes || ""
        ).toLowerCase();

      const matchesSearch =
        !search ||
        itemText.includes(
          search
        ) ||
        vendorText.includes(
          search
        ) ||
        notesText.includes(
          search
        );

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
        document.createElement(
          "div"
        );

      card.className =
        "item-card";

      if (
        data.status ===
        "done"
      ) {
        card.classList.add(
          "done"
        );
      }

      let statusText =
        "Not started";

      let statusClass =
        "";

      if (
        data.status ===
        "progress"
      ) {

        statusText =
          "In progress";

        statusClass =
          " progress";
      }

      if (
        data.status ===
        "done"
      ) {

        statusText =
          "Completed";

        statusClass =
          " done";
      }

      const vendorHTML =
        data.vendor
          ? "<p>👤 " +
            escapeHTML(
              data.vendor
            ) +
            "</p>"
          : "<p>Click to add details</p>";

      const deadlineHTML =
        data.deadline
          ? '<div class="item-meta">📅 ' +
            escapeHTML(
              formatDate(
                data.deadline
              )
            ) +
            "</div>"
          : "";

      card.innerHTML =

        '<div class="item-top">' +

        '<div class="item-icon">' +
        escapeHTML(
          category.icon
        ) +
        "</div>" +

        '<div class="item-status' +
        statusClass +
        '">' +
        statusText +
        "</div>" +

        "</div>" +

        "<h3>" +
        escapeHTML(
          item
        ) +
        "</h3>" +

        vendorHTML +

        deadlineHTML;

      card.addEventListener(
        "click",
        () =>
          openModal(
            category.id,
            item
          )
      );

      grid.appendChild(
        card
      );
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
    categoryId,
    item
  };

  const category =
    categories.find(
      c =>
        c.id ===
        categoryId
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
   CLOSE MODAL
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

  currentItem =
    null;
}


/* ============================================================
   STATUS
   ============================================================ */

function chooseStatus(
  status
) {

  modalStatus =
    status;

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
      modalStatus ===
        "not"
    );
  }

  if (progressButton) {

    progressButton.classList.toggle(
      "active",
      modalStatus ===
        "progress"
    );
  }

  if (doneButton) {

    doneButton.classList.toggle(
      "active",
      modalStatus ===
        "done"
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

  data.enabled =
    true;

  saveData();

  closeModal();

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

  data.status =
    "not";

  data.vendor =
    "";

  data.price =
    "";

  data.deadline =
    "";

  data.link =
    "";

  data.notes =
    "";

  saveData();

  closeModal();

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
}


/* ============================================================
   ADD CATEGORY
   ============================================================ */

function addCategory() {

  const nameInput =
    document.getElementById(
      "newCategoryName"
    );

  const iconInput =
    document.getElementById(
      "newCategoryIcon"
    );

  const name =
    nameInput
      ? nameInput.value.trim()
      : "";

  const icon =
    iconInput
      ? iconInput.value.trim()
      : "";

  if (!name) {

    alert(
      "Please enter a category name."
    );

    if (nameInput) {
      nameInput.focus();
    }

    return;
  }

  const exists =
    categories.some(
      category =>
        category.name
          .toLowerCase() ===
        name.toLowerCase()
    );

  if (exists) {

    alert(
      "A category with this name already exists."
    );

    return;
  }

  const category = {

    id:
      createId(name),

    name,

    icon:
      icon || "💍",

    predefined:
      false,

    enabled:
      true,

    items:
      []
  };

  categories.push(
    category
  );

  if (!saveData()) {
    return;
  }

  if (nameInput) {
    nameInput.value =
      "";
  }

  if (iconInput) {
    iconInput.value =
      "";
  }

  closeManagementModal();

  buildNavigation();

  renderDashboard();

  alert(
    '"' +
    name +
    '" has been added successfully. ❤️'
  );
}


/* ============================================================
   ADD ITEM
   ============================================================ */

function addItem(
  categoryId
) {

  const category =
    categories.find(
      c =>
        c.id ===
        categoryId
    );

  if (!category) {
    return;
  }

  const item =
    prompt(
      'Add a new item to "' +
      category.name +
      '":'
    );

  if (item === null) {
    return;
  }

  const cleanItem =
    item.trim();

  if (!cleanItem) {
    return;
  }

  const exists =
    category.items.some(
      existing =>
        existing
          .toLowerCase() ===
        cleanItem
          .toLowerCase()
    );

  if (exists) {

    alert(
      "This item already exists."
    );

    return;
  }

  category.items.push(
    cleanItem
  );

  const data =
    getItem(
      category.id,
      cleanItem
    );

  data.custom =
    true;

  saveData();

  renderCategory();
}


/* ============================================================
   TOGGLE ITEM
   ============================================================ */

function toggleItem(
  categoryId,
  item
) {

  const data =
    getItem(
      categoryId,
      item
    );

  data.enabled =
    !data.enabled;

  saveData();

  renderManageCategory();

  if (
    currentCategory ===
    categoryId
  ) {
    renderCategory();
  }

  renderDashboard();
}


/* ============================================================
   DELETE CUSTOM ITEM
   ============================================================ */

function deleteItem(
  categoryId,
  item
) {

  const category =
    categories.find(
      c =>
        c.id ===
        categoryId
    );

  if (!category) {
    return;
  }

  const data =
    getItem(
      categoryId,
      item
    );

  if (!data.custom) {

    alert(
      "Predefined items cannot be deleted. You can disable them instead."
    );

    return;
  }

  const confirmed =
    confirm(
      'Delete "' +
      item +
      '"?'
    );

  if (!confirmed) {
    return;
  }

  category.items =
    category.items.filter(
      existing =>
        existing !==
        item
    );

  delete savedData[
    itemKey(
      categoryId,
      item
    )
  ];

  saveData();

  renderManageCategory();

  if (
    currentCategory ===
    categoryId
  ) {
    renderCategory();
  }

  renderDashboard();
}


/* ============================================================
   MANAGE CATEGORIES
   ============================================================ */

function showManageCategories() {

  currentCategory =
    "manage";

  const dashboardPage =
    document.getElementById(
      "dashboardPage"
    );

  const categoryPage =
    document.getElementById(
      "categoryPage"
    );

  const managePage =
    document.getElementById(
      "managePage"
    );

  if (dashboardPage) {
    dashboardPage.style.display =
      "none";
  }

  if (categoryPage) {
    categoryPage.style.display =
      "none";
  }

  if (managePage) {
    managePage.style.display =
      "block";
  }

  buildNavigation();

  renderManageCategory();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ============================================================
   RENDER MANAGE CATEGORIES
   ============================================================ */

function renderManageCategory() {

  const container =
    document.getElementById(
      "manageCategories"
    );

  if (!container) {
    return;
  }

  container.innerHTML =
    "";

  categories.forEach(
    category => {

      const wrapper =
        document.createElement(
          "div"
        );

      wrapper.className =
        "manage-category";

      if (!category.enabled) {

        wrapper.classList.add(
          "disabled"
        );
      }

      const itemCount =
        category.items.length;

      wrapper.innerHTML =

        '<div class="manage-category-main">' +

        '<div class="manage-category-icon">' +
        escapeHTML(
          category.icon
        ) +
        "</div>" +

        '<div class="manage-category-info">' +

        "<h3>" +
        escapeHTML(
          category.name
        ) +
        "</h3>" +

        "<p>" +
        itemCount +
        " item" +
        (itemCount === 1
          ? ""
          : "s") +
        "</p>" +

        "</div>" +

        "</div>" +

        '<div class="manage-category-actions">' +

        '<button type="button" class="modern-toggle">' +

        (
          category.enabled
            ? "✓ Enabled"
            : "○ Disabled"
        ) +

        "</button>" +

        "</div>";

      const toggleButton =
        wrapper.querySelector(
          ".modern-toggle"
        );

      if (toggleButton) {

        toggleButton.addEventListener(
          "click",
          () =>
            toggleCategory(
              category.id
            )
        );
      }

      container.appendChild(
        wrapper
      );
    }
  );
}


/* ============================================================
   TOGGLE CATEGORY
   ============================================================ */

function toggleCategory(
  categoryId
) {

  const category =
    categories.find(
      c =>
        c.id ===
        categoryId
    );

  if (!category) {
    return;
  }

  category.enabled =
    !category.enabled;

  if (
    !category.enabled &&
    currentCategory ===
      categoryId
  ) {

    currentCategory =
      "dashboard";
  }

  saveData();

  buildNavigation();

  renderManageCategory();

  renderDashboard();

  if (
    currentCategory ===
    categoryId
  ) {
    renderCategory();
  }
}


/* ============================================================
   MANAGEMENT MODAL
   ============================================================ */

function openManagementModal(
  mode = "category"
) {

  const overlay =
    document.getElementById(
      "managementOverlay"
    );

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

  const saveButton =
    document.getElementById(
      "saveManagementButton"
    );

  if (!overlay) {
    return;
  }

  if (mode === "category") {

    if (title) {
      title.textContent =
        "Add category";
    }

    if (nameInput) {
      nameInput.placeholder =
        "e.g. Transportation";
    }

    if (iconGroup) {
      iconGroup.style.display =
        "block";
    }

    if (saveButton) {

      saveButton.onclick =
        addCategory;
    }
  }

  overlay.classList.add(
    "active"
  );

  setTimeout(
    () => {

      if (nameInput) {
        nameInput.focus();
      }

    },
    100
  );
}


function closeManagementModal() {

  const overlay =
    document.getElementById(
      "managementOverlay"
    );

  if (overlay) {

    overlay.classList.remove(
      "active"
    );
  }
}


/* ============================================================
   SETUP EVENTS
   ============================================================ */

function setupEvents() {

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

  const resetButton =
    document.getElementById(
      "resetButton"
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

  const overlay =
    document.getElementById(
      "overlay"
    );

  const search =
    document.getElementById(
      "itemSearch"
    );

  const filter =
    document.getElementById(
      "itemStatusFilter"
    );

  const addCategoryButton =
    document.getElementById(
      "addCategoryButton"
    );

  const addItemButton =
    document.getElementById(
      "addItemButton"
    );

  const manageCategoriesButton =
    document.getElementById(
      "manageCategoriesButton"
    );

  const backButton =
    document.getElementById(
      "backToDashboardButton"
    );

  const closeManagementButton =
    document.getElementById(
      "closeManagementButton"
    );

  const cancelManagementButton =
    document.getElementById(
      "cancelManagementButton"
    );

  const managementOverlay =
    document.getElementById(
      "managementOverlay"
    );

  const weddingDateInput =
    document.getElementById(
      "weddingDateInput"
    );


  /* ----------------------------------------------------------
     EXPORT
     ---------------------------------------------------------- */

  if (exportButton) {

    exportButton.addEventListener(
      "click",
      exportData
    );
  }


  /* ----------------------------------------------------------
     IMPORT
     ---------------------------------------------------------- */

  if (
    importButton &&
    importFile
  ) {

    importButton.addEventListener(
      "click",
      () =>
        importFile.click()
    );
  }

  if (importFile) {

    importFile.addEventListener(
      "change",
      importData
    );
  }


  /* ----------------------------------------------------------
     RESET
     ---------------------------------------------------------- */

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      resetPlanner
    );
  }


  /* ----------------------------------------------------------
     ITEM MODAL
     ---------------------------------------------------------- */

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


  /* ----------------------------------------------------------
     STATUS
     ---------------------------------------------------------- */

  if (notButton) {

    notButton.addEventListener(
      "click",
      () =>
        chooseStatus(
          "not"
        )
    );
  }

  if (progressButton) {

    progressButton.addEventListener(
      "click",
      () =>
        chooseStatus(
          "progress"
        )
    );
  }

  if (doneButton) {

    doneButton.addEventListener(
      "click",
      () =>
        chooseStatus(
          "done"
        )
    );
  }


  /* ----------------------------------------------------------
     ITEM MODAL OVERLAY
     ---------------------------------------------------------- */

  if (overlay) {

    overlay.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          overlay
        ) {
          closeModal();
        }

      }
    );
  }


  /* ----------------------------------------------------------
     SEARCH
     ---------------------------------------------------------- */

  if (search) {

    search.addEventListener(
      "input",
      renderCategory
    );
  }


  /* ----------------------------------------------------------
     FILTER
     ---------------------------------------------------------- */

  if (filter) {

    filter.addEventListener(
      "change",
      renderCategory
    );
  }


  /* ----------------------------------------------------------
     ADD CATEGORY
     ---------------------------------------------------------- */

  if (addCategoryButton) {

    addCategoryButton.addEventListener(
      "click",
      () =>
        openManagementModal(
          "category"
        )
    );
  }


  /* ----------------------------------------------------------
     ADD ITEM
     ---------------------------------------------------------- */

  if (addItemButton) {

    addItemButton.addEventListener(
      "click",
      () => {

        if (
          currentCategory &&
          currentCategory !==
            "dashboard" &&
          currentCategory !==
            "manage"
        ) {

          addItem(
            currentCategory
          );
        }

      }
    );
  }


  /* ----------------------------------------------------------
     MANAGE CATEGORIES
     ---------------------------------------------------------- */

  if (manageCategoriesButton) {

    manageCategoriesButton.addEventListener(
      "click",
      showManageCategories
    );
  }


  /* ----------------------------------------------------------
     BACK TO DASHBOARD
     ---------------------------------------------------------- */

  if (backButton) {

    backButton.addEventListener(
      "click",
      showDashboard
    );
  }


  /* ----------------------------------------------------------
     MANAGEMENT MODAL
     ---------------------------------------------------------- */

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

  if (managementOverlay) {

    managementOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          managementOverlay
        ) {
          closeManagementModal();
        }

      }
    );
  }


  /* ----------------------------------------------------------
     WEDDING DATE
     ---------------------------------------------------------- */

  if (weddingDateInput) {

    weddingDateInput.value =
      weddingDate;

    weddingDateInput.addEventListener(
      "change",
      event =>
        setWeddingDate(
          event.target.value
        )
    );
  }


  /* ----------------------------------------------------------
     KEYBOARD
     ---------------------------------------------------------- */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {

        closeModal();

        closeManagementModal();
      }

    }
  );
}


/* ============================================================
   START APPLICATION
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadData();

    setupEvents();

    buildNavigation();

    showDashboard();

    updateCountdown();

  }
);
