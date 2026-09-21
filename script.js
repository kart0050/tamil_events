```javascript
/* ============================================================
   WEDDING PLANNER
============================================================ */


/* ============================================================
   CATEGORIES
============================================================ */

const categories = [

  {
    id:"guests",
    name:"Gæster",
    icon:"👥",
    items:[
      "Palaharam (Goodie bag)",
      "Hotels"
    ]
  },

  {
    id:"toej",
    name:"Tøj",
    icon:"👗",
    items:[
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
    id:"reception",
    name:"Reception Songs",
    icon:"🎵",
    items:[
      "Entrance",
      "Pardans",
      "Preshoot",
      "Bryllupsvideo",
      "After Party"
    ]
  },

  {
    id:"sign-card",
    name:"Wedding Sign + Card",
    icon:"💌",
    items:[
      "Aviraa Creations",
      "Ponthayadesigns",
      "Kopuramevents.fr"
    ]
  },

  {
    id:"kovil-decoration",
    name:"Decoration Kovil",
    icon:"🛕",
    items:[
      "Kopuramevents.fr"
    ]
  },

  {
    id:"accessories",
    name:"Accessories",
    icon:"✨",
    items:[
      "360 Booth",
      "Bridal Corner Setup"
    ]
  },

  {
    id:"henna",
    name:"Henna Fest",
    icon:"🌿",
    items:[
      "Uduupu ?",
      "Mehendi (rosedecoration.dk)",
      "Tamilhennecreation",
      "Tent",
      "Visual Eyes"
    ]
  },

  {
    id:"kalyaanam",
    name:"Kalyaanam Veedu",
    icon:"🏠",
    items:[
      "Herning Kovil",
      "Civil Weds (Ring)",
      "Udlandet",
      "Amorasareesdk",
      "Ranyasarees"
    ]
  },

  {
    id:"makeup",
    name:"Makeup + Hair",
    icon:"💄",
    items:[
      "Janani",
      "abinii_makeupartist",
      "thiva_mua"
    ]
  },

  {
    id:"jewellery",
    name:"Jewellery",
    icon:"💎",
    items:[
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
    id:"melam",
    name:"Melam",
    icon:"🥁",
    items:[
      "Chinna Mams",
      "Mami ?"
    ]
  },

  {
    id:"maalai",
    name:"Maalai",
    icon:"🌸",
    items:[
      "Herning Maalai"
    ]
  },

  {
    id:"food",
    name:"Food",
    icon:"🍛",
    items:[
      "Poovi Mama Horsens",
      "Kammali Randers",
      "Tamil Ondrai Aarhus",
      "Dhoni",
      "Appam",
      "Vaathali og Pako"
    ]
  },

  {
    id:"cake",
    name:"Bryllupskage",
    icon:"🎂",
    items:[
      "Wedding Cake",
      "Lighter + Knife"
    ]
  },

  {
    id:"preshoot",
    name:"Preshoot",
    icon:"📸",
    items:[
      "Views of Nivi",
      "Sana",
      "Visual Eyes",
      "Nomad",
      "Through the ringer",
      "Swiss (Interlaken)"
    ]
  },

  {
    id:"photo-video",
    name:"Photo + Video",
    icon:"📷",
    items:[
      "Visual Eyes",
      "Vividmemoir.dk",
      "infocus"
    ]
  },

  {
    id:"dj",
    name:"DJ",
    icon:"🎧",
    items:[
      "Playloud",
      "Keeth Entertainment",
      "Microphone",
      "Iqon Musik",
      "Resound"
    ]
  },

  {
    id:"hall",
    name:"Hall",
    icon:"🏛️",
    items:[
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
    id:"entertainment",
    name:"Entertainment",
    icon:"💃",
    items:[
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
    id:"operator",
    name:"Operator",
    icon:"🎛️",
    items:[
      "Lighting",
      "Projector"
    ]
  },

  {
    id:"host",
    name:"Host",
    icon:"🎤",
    items:[
      "Vinu",
      "Mams",
      "Saddi",
      "Speech",
      "Games"
    ]
  },

  {
    id:"games",
    name:"Games (Yndlingsting)",
    icon:"🎲",
    items:[
      "Palaharam (Goodie bag)"
    ]
  },

  {
    id:"speech",
    name:"Speech",
    icon:"🎤",
    items:[
      "Speech planning",
      "Speakers",
      "Order of speeches"
    ]
  }

];


/* ============================================================
   STORAGE
============================================================ */

const STORAGE_KEY =
  "tamilWeddingPlanner_v4";

let savedData = {};

let currentCategory =
  "dashboard";

let currentItem =
  null;

let modalStatus =
  "not";


/* ============================================================
   LOAD DATA
============================================================ */

function loadData() {

  try {

    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (stored) {

      savedData =
        JSON.parse(stored);

    } else {

      savedData = {};

    }

  } catch (error) {

    console.error(
      "Could not load saved data:",
      error
    );

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
   EXPORT DATA
============================================================ */

function exportData() {

  try {

    /*
     * Make sure everything currently in memory
     * is also stored in localStorage.
     */

    saveData();


    /*
     * Create a complete backup object.
     */

    const backup = {

      app:
        "Tamil Wedding Planner",

      version:
        1,

      exportedAt:
        new Date().toISOString(),

      data:
        savedData

    };


    /*
     * Convert the backup to readable JSON.
     */

    const json =
      JSON.stringify(
        backup,
        null,
        2
      );


    /*
     * Create a downloadable file.
     */

    const blob =
      new Blob(
        [json],
        {
          type:
            "application/json;charset=utf-8"
        }
      );


    /*
     * Create a temporary URL.
     */

    const url =
      URL.createObjectURL(blob);


    /*
     * Create an invisible download link.
     */

    const link =
      document.createElement("a");


    link.href =
      url;


    /*
     * Create a filename with today's date.
     */

    const now =
      new Date();

    const year =
      now.getFullYear();

    const month =
      String(
        now.getMonth() + 1
      ).padStart(2,"0");

    const day =
      String(
        now.getDate()
      ).padStart(2,"0");


    link.download =
      `wedding-planner-backup-${year}-${month}-${day}.json`;


    /*
     * Trigger the download.
     */

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    /*
     * Release the temporary URL.
     */

    setTimeout(
      () => {
        URL.revokeObjectURL(url);
      },
      1000
    );


    /*
     * Small confirmation.
     */

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
   IMPORT DATA
============================================================ */

function importData(event) {

  const file =
    event.target.files[0];


  if (!file) {
    return;
  }


  /*
   * Make sure the file is JSON.
   */

  if (
    !file.name.toLowerCase().endsWith(".json")
  ) {

    alert(
      "Please select a .json wedding planner backup file."
    );

    event.target.value = "";

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


        /*
         * Accept our backup format:
         *
         * {
         *   app: "...",
         *   version: 1,
         *   exportedAt: "...",
         *   data: {...}
         * }
         */

        let importedData;


        if (
          imported &&
          imported.data &&
          typeof imported.data === "object"
        ) {

          importedData =
            imported.data;

        } else {

          /*
           * Also support a plain old
           * localStorage JSON backup.
           */

          importedData =
            imported;

        }


        /*
         * Validate the imported object.
         */

        if (
          !importedData ||
          typeof importedData !== "object" ||
          Array.isArray(importedData)
        ) {

          throw new Error(
            "Invalid backup format"
          );

        }


        /*
         * Ask the user before replacing
         * their current data.
         */

        const confirmed =
          confirm(
            "Import this wedding planner backup?\n\n" +
            "Your current planner data will be replaced by the backup."
          );


        if (!confirmed) {

          event.target.value = "";

          return;

        }


        /*
         * Replace current data.
         */

        savedData =
          importedData;


        /*
         * Save imported data.
         */

        const saved =
          saveData();


        if (!saved) {

          event.target.value = "";

          return;

        }


        /*
         * Refresh the page.
         */

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


      /*
       * Clear the file input so the
       * same file can be selected again.
       */

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
   GET ITEM
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


  if (!savedData[key]) {

    savedData[key] = {

      status:"not",

      vendor:"",

      price:"",

      deadline:"",

      link:"",

      notes:""

    };

  }


  /*
   * Protect against old/incomplete data.
   */

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


  dashboard.textContent =
    "🏠 Dashboard";


  dashboard.onclick =
    () => showDashboard();


  dashboard.className =
    currentCategory === "dashboard"
      ? "active"
      : "";


  nav.appendChild(
    dashboard
  );


  categories.forEach(
    category => {

      const button =
        document.createElement("button");


      button.textContent =
        `${category.icon} ${category.name}`;


      button.onclick =
        () =>
          showCategory(
            category.id
          );


      button.className =
        currentCategory === category.id
          ? "active"
          : "";


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


  document.getElementById(
    "dashboardPage"
  ).style.display =
    "block";


  document.getElementById(
    "categoryPage"
  ).style.display =
    "none";


  buildNavigation();

  renderDashboard();


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function renderDashboard() {

  let total =
    0;

  let done =
    0;

  let progress =
    0;


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
    total
      ? Math.round(
          (done / total) * 100
        )
      : 0;


  document.getElementById(
    "totalCount"
  ).textContent =
    total;


  document.getElementById(
    "doneCount"
  ).textContent =
    done;


  document.getElementById(
    "progressCount"
  ).textContent =
    progress;


  document.getElementById(
    "categoryCount"
  ).textContent =
    categories.length;


  document.getElementById(
    "overallPercent"
  ).textContent =
    percent + "%";


  document.getElementById(
    "overallFill"
  ).style.width =
    percent + "%";


  const grid =
    document.getElementById(
      "summaryGrid"
    );


  grid.innerHTML = "";


  categories.forEach(
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
          ${escapeHTML(
            category.name
          )}
        </h3>

        <p>
          ${stats.done}
          /
          ${stats.total}
          completed
        </p>

        <div class="summary-bar">

          <div
            style="
              width:${stats.percent}%;
            "
          ></div>

        </div>

      `;


      card.onclick =
        () =>
          showCategory(
            category.id
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


  document.getElementById(
    "dashboardPage"
  ).style.display =
    "none";


  document.getElementById(
    "categoryPage"
  ).style.display =
    "block";


  document.getElementById(
    "categoryTitle"
  ).textContent =
    `${category.icon} ${category.name}`;


  document.getElementById(
    "itemSearch"
  ).value =
    "";


  document.getElementById(
    "itemStatusFilter"
  ).value =
    "all";


  buildNavigation();

  renderCategory();


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* ============================================================
   CATEGORY STATS
============================================================ */

function getCategoryStats(
  category
) {

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
    total
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
    getCategoryStats(
      category
    );


  document.getElementById(
    "categoryPercent"
  ).textContent =
    stats.percent + "%";


  document.getElementById(
    "categoryProgressText"
  ).textContent =
    `${stats.done} / ${stats.total} completed`;


  const search =
    document.getElementById(
      "itemSearch"
    ).value
      .toLowerCase()
      .trim();


  const status =
    document.getElementById(
      "itemStatusFilter"
    ).value;


  const grid =
    document.getElementById(
      "itemsGrid"
    );


  grid.innerHTML = "";


  let visible =
    0;


  category.items.forEach(
    item => {

      const data =
        getItem(
          category.id,
          item
        );


      const matchesSearch =
        !search ||

        item
          .toLowerCase()
          .includes(search) ||

        data.vendor
          .toLowerCase()
          .includes(search) ||

        data.notes
          .toLowerCase()
          .includes(search);


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
        `item-card ${
          data.status === "done"
            ? "done"
            : ""
        }`;


      let statusText =
        "Not started";


      if (
        data.status === "progress"
      ) {

        statusText =
          "In progress";

      }


      if (
        data.status === "done"
      ) {

        statusText =
          "Completed";

      }


      card.innerHTML = `

        <div class="item-top">

          <div class="item-icon">
            ${category.icon}
          </div>

          <div
            class="
              item-status

              ${
                data.status === "progress"
                  ? "progress"
                  : ""
              }

              ${
                data.status === "done"
                  ? "done"
                  : ""
              }
            "
          >
            ${statusText}
          </div>

        </div>


        <h3>
          ${escapeHTML(item)}
        </h3>


        ${
          data.vendor

          ? `
            <p>
              👤
              ${escapeHTML(
                data.vendor
              )}
            </p>
          `

          : `
            <p>
              Click to add details
            </p>
          `
        }


        ${
          data.deadline

          ? `
            <div class="item-meta">
              📅
              ${formatDate(
                data.deadline
              )}
            </div>
          `

          : ""
        }

      `;


      card.onclick =
        () =>
          openModal(
            category.id,
            item
          );


      grid.appendChild(
        card
      );

    }
  );


  document.getElementById(
    "emptyMessage"
  ).style.display =
    visible
      ? "none"
      : "block";

}


/* ============================================================
   MODAL
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


  const data =
    getItem(
      categoryId,
      item
    );


  document.getElementById(
    "modalCategory"
  ).textContent =
    category.name;


  document.getElementById(
    "modalTitle"
  ).textContent =
    item;


  document.getElementById(
    "vendorInput"
  ).value =
    data.vendor;


  document.getElementById(
    "priceInput"
  ).value =
    data.price;


  document.getElementById(
    "deadlineInput"
  ).value =
    data.deadline;


  document.getElementById(
    "linkInput"
  ).value =
    data.link;


  document.getElementById(
    "notesInput"
  ).value =
    data.notes;


  modalStatus =
    data.status;


  updateStatusButtons();


  document.getElementById(
    "overlay"
  ).classList.add(
    "active"
  );

}


function closeModal() {

  document.getElementById(
    "overlay"
  ).classList.remove(
    "active"
  );


  currentItem =
    null;

}


function chooseStatus(
  status
) {

  modalStatus =
    status;


  updateStatusButtons();

}


function updateStatusButtons() {

  document.getElementById(
    "notButton"
  ).classList.toggle(
    "active",
    modalStatus === "not"
  );


  document.getElementById(
    "progressButton"
  ).classList.toggle(
    "active",
    modalStatus === "progress"
  );


  document.getElementById(
    "doneButton"
  ).classList.toggle(
    "active",
    modalStatus === "done"
  );

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


  data.status =
    modalStatus;


  data.vendor =
    document.getElementById(
      "vendorInput"
    ).value;


  data.price =
    document.getElementById(
      "priceInput"
    ).value;


  data.deadline =
    document.getElementById(
      "deadlineInput"
    ).value;


  data.link =
    document.getElementById(
      "linkInput"
    ).value;


  data.notes =
    document.getElementById(
      "notesInput"
    ).value;


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
   FORMAT DATE
============================================================ */

function formatDate(
  date
) {

  if (!date) {
    return "";
  }


  const d =
    new Date(
      date +
      "T00:00:00"
    );


  return d.toLocaleDateString(
    "en-DK",
    {
      day:"numeric",
      month:"short",
      year:"numeric"
    }
  );

}


/* ============================================================
   ESCAPE HTML
============================================================ */

function escapeHTML(
  value
) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* ============================================================
   EVENTS
============================================================ */

document
  .getElementById(
    "itemSearch"
  )
  .addEventListener(
    "input",
    renderCategory
  );


document
  .getElementById(
    "itemStatusFilter"
  )
  .addEventListener(
    "change",
    renderCategory
  );


/*
 * Import button/file input.
 */

document
  .getElementById(
    "importFile"
  )
  .addEventListener(
    "change",
    importData
  );


/*
 * Close modal when clicking outside it.
 */

document
  .getElementById(
    "overlay"
  )
  .addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeModal();

      }

    }
  );


/*
 * Close modal with Escape.
 */

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


/* ============================================================
   START APPLICATION
============================================================ */

loadData();

buildNavigation();

showDashboard();
```
