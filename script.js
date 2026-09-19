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
DOM HELPERS
============================================================ */

const $ = (id) =>
document.getElementById(id);

/* ============================================================
STORAGE FUNCTIONS
============================================================ */

function loadData() {

try {

```
const stored =
  localStorage.getItem(
    STORAGE_KEY
  );

if (!stored) {

  savedData = {};

  return;
}


const parsed =
  JSON.parse(stored);


if (
  parsed &&
  typeof parsed === "object" &&
  !Array.isArray(parsed)
) {

  savedData = parsed;

} else {

  savedData = {};

}
```

} catch (error) {

```
console.error(
  "Could not load saved data:",
  error
);

savedData = {};
```

}

}

function saveData() {

try {

```
localStorage.setItem(
  STORAGE_KEY,
  JSON.stringify(savedData)
);

return true;
```

} catch (error) {

```
console.error(
  "Could not save data:",
  error
);

alert(
  "Could not save the planner data in this browser."
);

return false;
```

}

}

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

```
savedData[key] = {

  status: "not",

  vendor: "",

  price: "",

  deadline: "",

  link: "",

  notes: ""

};
```

}

/*
Protect against older/incomplete
saved records.
*/

const data =
savedData[key];

data.status =
data.status || "not";

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

return data;

}

/* ============================================================
EXPORT
============================================================ */

function exportData() {

try {

```
const exportObject = {

  app: "Our Wedding Planner",

  version: 2,

  exportedAt:
    new Date().toISOString(),

  data: savedData

};


const json =
  JSON.stringify(
    exportObject,
    null,
    2
  );


const blob =
  new Blob(
    [json],
    {
      type:
        "application/json;charset=utf-8"
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


const date =
  new Date()
    .toISOString()
    .slice(0, 10);


link.href =
  url;


link.download =
  `wedding-planner-${date}.json`;


link.style.display =
  "none";


document.body.appendChild(
  link
);


link.click();


document.body.removeChild(
  link
);


setTimeout(
  () => URL.revokeObjectURL(url),
  1000
);


alert(
  "Your wedding planner has been exported successfully! ❤️"
);
```

} catch (error) {

```
console.error(
  "Export failed:",
  error
);


alert(
  "Could not export your wedding planner."
);
```

}

}

/* ============================================================
IMPORT
============================================================ */

function importData(
event
) {

const file =
event.target.files &&
event.target.files[0];

if (!file) {

```
return;
```

}

const reader =
new FileReader();

reader.onload =
function() {

```
  try {

    const imported =
      JSON.parse(
        reader.result
      );


    let importedData = null;


    /*
      New backup format.
    */

    if (
      imported &&
      typeof imported === "object" &&
      imported.data &&
      typeof imported.data === "object" &&
      !Array.isArray(imported.data)
    ) {

      importedData =
        imported.data;

    }


    /*
      Also support a plain JSON
      data object.
    */

    else if (
      imported &&
      typeof imported === "object" &&
      !Array.isArray(imported)
    ) {

      importedData =
        imported;

    }


    if (
      !importedData ||
      typeof importedData !== "object" ||
      Array.isArray(importedData)
    ) {

      throw new Error(
        "Invalid backup format."
      );

    }


    const confirmed =
      window.confirm(
        "Import this wedding planner backup?\n\n" +
        "This will replace the planner data currently " +
        "saved in this browser."
      );


    if (!confirmed) {

      event.target.value = "";

      return;

    }


    savedData =
      importedData;


    const saved =
      saveData();


    if (!saved) {

      event.target.value = "";

      return;

    }


    /*
      Refresh the current view.
    */

    buildNavigation();


    if (
      currentCategory ===
      "dashboard"
    ) {

      renderDashboard();

    } else {

      renderCategory();

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
      "Could not import this file.\n\n" +
      "Please select a valid wedding planner JSON backup."
    );

  }


  /*
    Reset the input so the same
    file can be selected again.
  */

  event.target.value = "";

};
```

reader.onerror =
function() {

```
  alert(
    "Could not read the selected file."
  );


  event.target.value = "";

};
```

reader.readAsText(
file
);

}

/* ============================================================
NAVIGATION
============================================================ */

function buildNavigation() {

const nav =
$("navigation");

if (!nav) {

```
return;
```

}

nav.innerHTML = "";

const dashboard =
document.createElement(
"button"
);

dashboard.type =
"button";

dashboard.textContent =
"🏠 Dashboard";

dashboard.className =
currentCategory ===
"dashboard"
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

```
  const button =
    document.createElement(
      "button"
    );


  button.type =
    "button";


  button.textContent =
    `${category.icon} ${category.name}`;


  button.className =
    currentCategory ===
    category.id
      ? "active"
      : "";


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
```

);

}

/* ============================================================
DASHBOARD
============================================================ */

function showDashboard() {

currentCategory =
"dashboard";

$("dashboardPage").hidden =
false;

$("categoryPage").hidden =
true;

buildNavigation();

renderDashboard();

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

function renderDashboard() {

let total = 0;

let done = 0;

let progress = 0;

categories.forEach(
category => {

```
  category.items.forEach(
    item => {

      total++;


      const data =
        getItem(
          category.id,
          item
        );


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
```

);

const percent =
total
? Math.round(
(done / total) * 100
)
: 0;

$("totalCount").textContent =
total;

$("doneCount").textContent =
done;

$("progressCount").textContent =
progress;

$("categoryCount").textContent =
categories.length;

$("overallPercent").textContent =
percent + "%";

$("overallFill").style.width =
percent + "%";

const grid =
$("summaryGrid");

grid.innerHTML = "";

categories.forEach(
category => {

```
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


  card.tabIndex =
    0;


  card.setAttribute(
    "role",
    "button"
  );


  card.innerHTML = `

    <div
      class="summary-icon"
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


  card.addEventListener(
    "click",
    () =>
      showCategory(
        category.id
      )
  );


  card.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        showCategory(
          category.id
        );

      }

    }
  );


  grid.appendChild(
    card
  );

}
```

);

}

/* ============================================================
CATEGORY
============================================================ */

function showCategory(
id
) {

const category =
categories.find(
c => c.id === id
);

if (!category) {

```
return;
```

}

currentCategory =
id;

$("dashboardPage").hidden =
true;

$("categoryPage").hidden =
false;

$("categoryTitle").textContent =
`${category.icon} ${category.name}`;

$("itemSearch").value =
"";

$("itemStatusFilter").value =
"all";

buildNavigation();

renderCategory();

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

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

function renderCategory() {

const category =
categories.find(
c => c.id === currentCategory
);

if (!category) {

```
return;
```

}

const stats =
getCategoryStats(
category
);

$("categoryPercent").textContent =
stats.percent + "%";

$("categoryProgressText").textContent =
`${stats.done} / ${stats.total} completed`;

const search =
$("itemSearch").value
.toLowerCase()
.trim();

const status =
$("itemStatusFilter").value;

const grid =
$("itemsGrid");

grid.innerHTML = "";

let visible =
0;

category.items.forEach(
item => {

```
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
    data.status ===
    "progress"
  ) {

    statusText =
      "In progress";

  }


  if (
    data.status ===
    "done"
  ) {

    statusText =
      "Completed";

  }


  const statusClass =
    data.status === "progress"
      ? "progress"
      : data.status === "done"
        ? "done"
        : "";


  card.innerHTML = `

    <div class="item-top">

      <div class="item-icon">
        ${category.icon}
      </div>

      <div
        class="item-status ${statusClass}"
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
```

);

$("emptyMessage").hidden =
visible !== 0;

}

/* ============================================================
MODAL
============================================================ */

function openModal(
categoryId,
item
) {

currentItem = {

```
categoryId,

item
```

};

const category =
categories.find(
c => c.id === categoryId
);

if (!category) {

```
return;
```

}

const data =
getItem(
categoryId,
item
);

$("modalCategory").textContent =
category.name;

$("modalTitle").textContent =
item;

$("vendorInput").value =
data.vendor;

$("priceInput").value =
data.price;

$("deadlineInput").value =
data.deadline;

$("linkInput").value =
data.link;

$("notesInput").value =
data.notes;

modalStatus =
data.status;

updateStatusButtons();

$("overlay").hidden =
false;

$("overlay").classList.add(
"active"
);

setTimeout(
() =>
$("vendorInput").focus(),
50
);

}

function closeModal() {

$("overlay").classList.remove(
"active"
);

$("overlay").hidden =
true;

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

$("notButton").classList.toggle(
"active",
modalStatus === "not"
);

$("progressButton").classList.toggle(
"active",
modalStatus === "progress"
);

$("doneButton").classList.toggle(
"active",
modalStatus === "done"
);

}

/* ============================================================
SAVE ITEM
============================================================ */

function saveItem() {

if (!currentItem) {

```
return;
```

}

const data =
getItem(
currentItem.categoryId,
currentItem.item
);

data.status =
modalStatus;

data.vendor =
$("vendorInput").value;

data.price =
$("priceInput").value;

data.deadline =
$("deadlineInput").value;

data.link =
$("linkInput").value;

data.notes =
$("notesInput").value;

saveData();

closeModal();

if (
currentCategory ===
"dashboard"
) {

```
showDashboard();
```

} else {

```
showCategory(
  currentCategory
);
```

}

}

/* ============================================================
CLEAR ITEM
============================================================ */

function clearItem() {

if (!currentItem) {

```
return;
```

}

const confirmed =
window.confirm(
"Clear all information for this item?"
);

if (!confirmed) {

```
return;
```

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

```
showDashboard();
```

} else {

```
showCategory(
  currentCategory
);
```

}

}

/* ============================================================
HELPERS
============================================================ */

function formatDate(
date
) {

if (!date) {

```
return "";
```

}

const d =
new Date(
date + "T00:00:00"
);

if (
Number.isNaN(
d.getTime()
)
) {

```
return date;
```

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

function escapeHTML(
value
) {

return String(value)

```
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
```

}

/* ============================================================
EVENT LISTENERS
============================================================ */

function setupEvents() {

/*
Search.
*/

$("itemSearch").addEventListener(
"input",
renderCategory
);

/*
Status filter.
*/

$("itemStatusFilter").addEventListener(
"change",
renderCategory
);

/*
Export.
*/

$("exportButton").addEventListener(
"click",
exportData
);

/*
Import button opens the
hidden file selector.
*/

$("importButton").addEventListener(
"click",
() => {

```
  $("importFile").click();

}
```

);

/*
Import selected file.
*/

$("importFile").addEventListener(
"change",
importData
);

/*
Modal buttons.
*/

$("closeModalButton").addEventListener(
"click",
closeModal
);

$("saveButton").addEventListener(
"click",
saveItem
);

$("clearButton").addEventListener(
"click",
clearItem
);

$("notButton").addEventListener(
"click",
() =>
chooseStatus("not")
);

$("progressButton").addEventListener(
"click",
() =>
chooseStatus("progress")
);

$("doneButton").addEventListener(
"click",
() =>
chooseStatus("done")
);

/*
Clicking outside the modal closes it.
*/

$("overlay").addEventListener(
"click",
event => {

```
  if (
    event.target ===
    $("overlay")
  ) {

    closeModal();

  }

}
```

);

/*
Escape closes the modal.
*/

document.addEventListener(
"keydown",
event => {

```
  if (
    event.key === "Escape" &&
    !$("overlay").hidden
  ) {

    closeModal();

  }

}
```

);

}

/* ============================================================
START APPLICATION
============================================================ */

function startApp() {

loadData();

setupEvents();

buildNavigation();

showDashboard();

}

/*
The script uses defer in index.html,
but this check also makes it safe if
the script is loaded differently.
*/

if (
document.readyState ===
"loading"
) {

document.addEventListener(
"DOMContentLoaded",
startApp,
{
once: true
}
);

} else {

startApp();

}
