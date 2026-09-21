/* ============================================================
   WEDDING PLANNER
   ============================================================ */

const STORAGE_KEY = "tamilWeddingPlanner_v5";


/* ============================================================
   DEFAULT CATEGORIES
   ============================================================ */

const defaultCategories = [
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
   DATA
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

  const date =
    new Date(dateString + "T00:00:00");

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

      saveData();

      return;
    }

    const parsed =
      JSON.parse(stored);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      Array.isArray(parsed.categories)
    ) {
      categories =
        parsed.categories;

      savedData =
        parsed.savedData &&
        typeof parsed.savedData === "object"
          ? parsed.savedData
          : {};
    } else {
      categories =
        structuredClone(defaultCategories);

      savedData = {};

      saveData();
    }

  } catch (error) {

    console.error(
      "Could not load planner data:",
      error
    );

    categories =
      structuredClone(defaultCategories);

    savedData = {};
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
        version: 5,
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

function itemKey(categoryId, item) {
  return categoryId + "::" + item;
}


/* ============================================================
   GET ITEM
   ============================================================ */

function getItem(categoryId, item) {

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
      enabled: true

    };
  }

  const data =
    savedData[key];

  data.status =
    ["not", "progress", "done"]
      .includes(data.status)
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

  return data;
}


/* ============================================================
   EXPORT
   ============================================================ */

function exportData() {

  try {

    saveData();

    const backup = {

      app:
        "Tamil Wedding Planner",

      version:
        5,

      exportedAt:
        new Date().toISOString(),

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
          type: "application/json"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    const now =
      new Date();

    const filename =
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

    link.download =
      filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(
      () => URL.revokeObjectURL(url),
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

        let importedCategories =
          null;

        let importedSavedData =
          null;


        if (
          imported &&
          Array.isArray(
            imported.categories
          )
        ) {

          importedCategories =
            imported.categories;

          importedSavedData =
            imported.savedData || {};

        }


        else if (
          imported &&
          imported.data &&
          typeof imported.data === "object"
        ) {

          importedCategories =
            structuredClone(
              defaultCategories
            );

          importedSavedData =
            imported.data;
        }


        if (
          !Array.isArray(
            importedCategories
          ) ||
          !importedSavedData ||
          typeof importedSavedData !== "object"
        ) {

          throw new Error(
            "Invalid backup"
          );
        }


        const confirmed =
          confirm(
            "Import this wedding planner backup?\n\n" +
            "Your current planner data will be replaced."
          );

        if (!confirmed) {

          event.target.value =
            "";

          return;
        }


        categories =
          importedCategories;

        savedData =
          importedSavedData;

        normaliseCategories();


        if (saveData()) {

          showDashboard();

          alert(
            "Wedding planner data imported successfully! ❤️"
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
    document.createElement("button");

  dashboard.type =
    "button";

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

  nav.appendChild(
    dashboard
  );


  categories.forEach(
    category => {

      const button =
        document.createElement("button");

      button.type =
        "button";

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
        () => showCategory(
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


  const grid =
    document.getElementById(
      "summaryGrid"
    );

  if (!grid) {
    return;
  }

  grid.innerHTML =
    "";


  categories.forEach(
    category => {

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
        () => showCategory(
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
   CATEGORY STATS
   ============================================================ */

function getCategoryStats(category) {

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
    total,
    done,
    percent
  };
}


/* ============================================================
   CATEGORY RENDER
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
        card.classList.add(
          "done"
        );
      }


      let statusText =
        "Not started";

      let statusClass =
        "";


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
          escapeHTML(item) +
        "</h3>" +

        vendorHTML +

        deadlineHTML;


      card.addEventListener(
        "click",
        () => openModal(
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


  currentItem =
    null;
}


/* ============================================================
   STATUS
   ============================================================ */

function chooseStatus(status) {

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


  data.enabled =
    true;


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
   MANAGE PLANNER PAGE
   ============================================================ */

function showManagePlanner() {

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

  renderManagePlanner();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ============================================================
   RENDER MANAGE PLANNER
   ============================================================ */

function renderManagePlanner() {

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
        document.createElement("div");


      wrapper.className =
        "manage-category";


      wrapper.innerHTML =

        '<div class="manage-category-header">' +

          '<div>' +

            '<span class="manage-category-icon">' +
              escapeHTML(
                category.icon
              ) +
            "</span>" +

            "<strong>" +
              escapeHTML(
                category.name
              ) +
            "</strong>" +

          "</div>" +

        "</div>" +


        '<div class="manage-items"></div>';


      const itemsContainer =
        wrapper.querySelector(
          ".manage-items"
        );


      category.items.forEach(
        item => {

          const row =
            document.createElement("div");


          row.className =
            "manage-item";


          row.innerHTML =
            "<span>" +
              escapeHTML(
                item
              ) +
            "</span>";


          itemsContainer.appendChild(
            row
          );

        }
      );


      container.appendChild(
        wrapper
      );

    }
  );
}


/* ============================================================
   OPEN MANAGEMENT MODAL
   ============================================================ */

function openManagementModal(
  mode = "category"
) {

  managementMode =
    mode;


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

  const iconInput =
    document.getElementById(
      "managementIconInput"
    );

  const iconGroup =
    document.getElementById(
      "iconGroup"
    );

  const saveButton =
    document.getElementById(
      "saveManagementButton"
    );


  if (
    !overlay ||
    !title ||
    !nameInput ||
    !saveButton
  ) {
    return;
  }


  nameInput.value =
    "";

  if (iconInput) {
    iconInput.value =
      "";
  }


  if (
    mode === "item"
  ) {

    const category =
      categories.find(
        c =>
          c.id ===
          currentCategory
      );


    if (!category) {
      return;
    }


    title.textContent =
      "Add item";


    nameInput.placeholder =
      "e.g. Wedding flowers";


    if (iconGroup) {
      iconGroup.style.display =
        "none";
    }


    saveButton.textContent =
      "Add item";

  } else {

    title.textContent =
      "Add category";


    nameInput.placeholder =
      "e.g. Flowers";


    if (iconGroup) {
      iconGroup.style.display =
        "block";
    }


    saveButton.textContent =
      "Add category";
  }


  overlay.classList.add(
    "active"
  );


  setTimeout(
    () => nameInput.focus(),
    100
  );
}


/* ============================================================
   CLOSE MANAGEMENT MODAL
   ============================================================ */

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


  if (!nameInput) {
    return;
  }


  const name =
    nameInput.value.trim();


  if (!name) {

    alert(
      managementMode === "item"
        ? "Please enter an item name."
        : "Please enter a category name."
    );

    nameInput.focus();

    return;
  }


  /* ==========================================================
     ADD ITEM
     ========================================================== */

  if (
    managementMode === "item"
  ) {

    const category =
      categories.find(
        c =>
          c.id ===
          currentCategory
      );


    if (!category) {
      return;
    }


    const exists =
      category.items.some(
        existing =>
          existing.toLowerCase() ===
          name.toLowerCase()
      );


    if (exists) {

      alert(
        "This item already exists."
      );

      nameInput.focus();

      return;
    }


    category.items.push(
      name
    );


    getItem(
      category.id,
      name
    );


    if (!saveData()) {
      return;
    }


    closeManagementModal();


    renderCategory();

    renderDashboard();

    buildNavigation();


    return;
  }


  /* ==========================================================
     ADD CATEGORY
     ========================================================== */

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

    nameInput.focus();

    return;
  }


  const icon =
    iconInput
      ? iconInput.value.trim()
      : "";


  const category = {

    id:
      createId(name),

    name:
      name,

    icon:
      icon || "📋",

    items:
      []

  };


  categories.push(
    category
  );


  if (!saveData()) {
    return;
  }


  closeManagementModal();


  renderManagePlanner();

  renderDashboard();

  buildNavigation();


  alert(
    '"' +
    name +
    '" has been added successfully.'
  );
}


/* ============================================================
   ADD ITEM BUTTON
   ============================================================ */

function addItemToCurrentCategory() {

  if (
    !categories.some(
      c =>
        c.id ===
        currentCategory
    )
  ) {
    return;
  }


  openManagementModal(
    "item"
  );
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

  const backToDashboardButton =
    document.getElementById(
      "backToDashboardButton"
    );

  const manageCurrentCategoryButton =
    document.getElementById(
      "manageCurrentCategoryButton"
    );

  const manageBackButton =
    document.getElementById(
      "manageBackButton"
    );

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


  /* ==========================================================
     EXPORT
     ========================================================== */

  if (exportButton) {

    exportButton.addEventListener(
      "click",
      exportData
    );
  }


  /* ==========================================================
     IMPORT
     ========================================================== */

  if (
    importButton &&
    importFile
  ) {

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


  /* ==========================================================
     ITEM MODAL
     ========================================================== */

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
      () =>
        chooseStatus("not")
    );
  }


  if (progressButton) {

    progressButton.addEventListener(
      "click",
      () =>
        chooseStatus("progress")
    );
  }


  if (doneButton) {

    doneButton.addEventListener(
      "click",
      () =>
        chooseStatus("done")
    );
  }


  if (overlay) {

    overlay.addEventListener(
      "click",
      event => {

        if (
          event.target === overlay
        ) {

          closeModal();
        }

      }
    );
  }


  /* ==========================================================
     SEARCH
     ========================================================== */

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


  /* ==========================================================
     ADD CATEGORY
     ========================================================== */

  if (addCategoryButton) {

    addCategoryButton.addEventListener(
      "click",
      () =>
        openManagementModal(
          "category"
        )
    );
  }


  /* ==========================================================
     ADD ITEM
     ========================================================== */

  if (addItemButton) {

    addItemButton.addEventListener(
      "click",
      addItemToCurrentCategory
    );
  }


  /* ==========================================================
     BACK TO DASHBOARD
     ========================================================== */

  if (backToDashboardButton) {

    backToDashboardButton.addEventListener(
      "click",
      showDashboard
    );
  }


  if (manageBackButton) {

    manageBackButton.addEventListener(
      "click",
      showDashboard
    );
  }


  /* ==========================================================
     MANAGE CURRENT CATEGORY
     ========================================================== */

  if (manageCurrentCategoryButton) {

    manageCurrentCategoryButton.addEventListener(
      "click",
      showManagePlanner
    );
  }


  /* ==========================================================
     MANAGEMENT MODAL
     ========================================================== */

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


  /* ==========================================================
     ENTER KEY IN MANAGEMENT MODAL
     ========================================================== */

  if (managementNameInput) {

    managementNameInput.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          saveManagement();
        }

      }
    );
  }


  /* ==========================================================
     ESCAPE
     ========================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
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

  }
);
