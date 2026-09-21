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
LOAD DATA
============================================================ */

function loadData() {

try {

const stored = localStorage.getItem(STORAGE_KEY);

if (stored) {

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

} else {

  savedData = {};

}
```

} catch (error) {

```
console.error("Could not load saved data:", error);

savedData = {};
```

}

}

/* ============================================================
SAVE DATA
============================================================ */

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
console.error("Could not save data:", error);

alert(
  "Your data could not be saved in this browser."
);

return false;
```

}

}

/* ============================================================
EXPORT DATA
============================================================ */

function exportData() {

try {

```
if (!saveData()) {
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
    type: "application/json"
  }
);

const url = URL.createObjectURL(blob);

const link = document.createElement("a");

link.href = url;

const now = new Date();

const year = String(
  now.getFullYear()
);

const month = String(
  now.getMonth() + 1
).padStart(2, "0");

const day = String(
  now.getDate()
).padStart(2, "0");

/*
 * Deliberately use normal string concatenation here.
 * This avoids the template-literal syntax problem
 * that was causing the previous script to fail.
 */

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
  function () {
    URL.revokeObjectURL(url);
  },
  1000
);

console.log(
  "Wedding planner data exported successfully."
);
```

} catch (error) {

```
console.error(
  "Export failed:",
  error
);

alert(
  "Sorry, the wedding planner data could not be exported."
);
```

}

}

/* ============================================================
IMPORT DATA
============================================================ */

function importData(event) {

const file = event.target.files[0];

if (!file) {
return;
}

if (
!file.name
.toLowerCase()
.endsWith(".json")
) {

```
alert(
  "Please select a .json wedding planner backup file."
);

event.target.value = "";

return;
```

}

const reader = new FileReader();

reader.onload = function (e) {

```
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

  renderDashboard();

  if (currentCategory !== "dashboard") {

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
    "This file is not a valid wedding planner backup."
  );

}

event.target.value = "";
```

};

reader.onerror = function () {

```
alert(
  "Could not read the selected file."
);

event.target.value = "";
```

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

const key = itemKey(
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

const nav = document.getElementById(
"navigation"
);

if (!nav) {
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
function (category) {

```
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
    function () {
      showCategory(category.id);
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
RENDER DASHBOARD
============================================================ */

function renderDashboard() {

let total = 0;

let done = 0;

let progress = 0;

categories.forEach(
function (category) {

```
  category.items.forEach(
    function (item) {

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

    }
  );

}
```

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

const grid =
document.getElementById(
"summaryGrid"
);

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

if (!grid) {
return;
}

grid.innerHTML = "";

categories.forEach(
function (category) {

```
  const stats =
    getCategoryStats(category);

  const card =
    document.createElement("div");

  card.className =
    "summary-card";

  const icon =
    document.createElement("div");

  icon.style.fontSize = "25px";
  icon.style.marginBottom = "10px";
  icon.textContent = category.icon;

  const title =
    document.createElement("h3");

  title.textContent =
    category.name;

  const text =
    document.createElement("p");

  text.textContent =
    stats.done +
    " / " +
    stats.total +
    " completed";

  const bar =
    document.createElement("div");

  bar.className =
    "summary-bar";

  const fill =
    document.createElement("div");

  fill.style.width =
    stats.percent + "%";

  bar.appendChild(fill);

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(bar);

  card.addEventListener(
    "click",
    function () {
      showCategory(category.id);
    }
  );

  grid.appendChild(card);

}
```

);

}

/* ============================================================
CATEGORY
============================================================ */

function showCategory(id) {

const category =
categories.find(
function (c) {
return c.id === id;
}
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

dashboardPage.style.display =
"none";

categoryPage.style.display =
"block";

const title =
document.getElementById(
"categoryTitle"
);

if (title) {

```
title.textContent =
  category.icon +
  " " +
  category.name;
```

}

const search =
document.getElementById(
"itemSearch"
);

if (search) {
search.value = "";
}

const filter =
document.getElementById(
"itemStatusFilter"
);

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

const total =
category.items.length;

const done =
category.items.filter(
function (item) {

```
    return (
      getItem(
        category.id,
        item
      ).status === "done"
    );

  }
).length;
```

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
function (c) {
return c.id === currentCategory;
}
);

if (!category) {
return;
}

const stats =
getCategoryStats(category);

const percent =
document.getElementById(
"categoryPercent"
);

const progressText =
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

const empty =
document.getElementById(
"emptyMessage"
);

if (percent) {

```
percent.textContent =
  stats.percent + "%";
```

}

if (progressText) {

```
progressText.textContent =
  stats.done +
  " / " +
  stats.total +
  " completed";
```

}

if (!grid) {
return;
}

const search =
searchInput
? searchInput.value
.toLowerCase()
.trim()
: "";

const status =
statusFilter
? statusFilter.value
: "all";

grid.innerHTML = "";

let visible = 0;

category.items.forEach(
function (item) {

```
  const data =
    getItem(
      category.id,
      item
    );


  const vendor =
    String(data.vendor || "")
      .toLowerCase();

  const notes =
    String(data.notes || "")
      .toLowerCase();


  const itemName =
    item.toLowerCase();


  const matchesSearch =
    !search ||
    itemName.includes(search) ||
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
    "item-card";


  if (data.status === "done") {
    card.classList.add("done");
  }


  const top =
    document.createElement("div");

  top.className =
    "item-top";


  const icon =
    document.createElement("div");

  icon.className =
    "item-icon";

  icon.textContent =
    category.icon;


  const statusElement =
    document.createElement("div");

  statusElement.className =
    "item-status";


  let statusText =
    "Not started";


  if (data.status === "progress") {

    statusText =
      "In progress";

    statusElement.classList.add(
      "progress"
    );

  }


  if (data.status === "done") {

    statusText =
      "Completed";

    statusElement.classList.add(
      "done"
    );

  }


  statusElement.textContent =
    statusText;


  top.appendChild(icon);

  top.appendChild(
    statusElement
  );


  const title =
    document.createElement("h3");

  title.textContent =
    item;


  card.appendChild(top);

  card.appendChild(title);


  const vendorElement =
    document.createElement("p");


  if (data.vendor) {

    vendorElement.textContent =
      "👤 " + data.vendor;

  } else {

    vendorElement.textContent =
      "Click to add details";

  }


  card.appendChild(
    vendorElement
  );


  if (data.deadline) {

    const deadline =
      document.createElement("div");

    deadline.className =
      "item-meta";

    deadline.textContent =
      "📅 " +
      formatDate(
        data.deadline
      );

    card.appendChild(
      deadline
    );

  }


  card.addEventListener(
    "click",
    function () {

      openModal(
        category.id,
        item
      );

    }
  );


  grid.appendChild(card);

}
```

);

if (empty) {

```
empty.style.display =
  visible > 0
    ? "none"
    : "block";
```

}

}

/* ============================================================
MODAL
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
function (c) {
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

if (modalCategory) {

```
modalCategory.textContent =
  category.name;
```

}

if (modalTitle) {

```
modalTitle.textContent =
  item;
```

}

setInputValue(
"vendorInput",
data.vendor
);

setInputValue(
"priceInput",
data.price
);

setInputValue(
"deadlineInput",
data.deadline
);

setInputValue(
"linkInput",
data.link
);

setInputValue(
"notesInput",
data.notes
);

modalStatus =
data.status;

updateStatusButtons();

const overlay =
document.getElementById(
"overlay"
);

if (overlay) {

```
overlay.classList.add(
  "active"
);
```

}

}

function setInputValue(
id,
value
) {

const element =
document.getElementById(id);

if (element) {

```
element.value =
  value || "";
```

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

```
overlay.classList.remove(
  "active"
);
```

}

currentItem = null;

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

```
notButton.classList.toggle(
  "active",
  modalStatus === "not"
);
```

}

if (progressButton) {

```
progressButton.classList.toggle(
  "active",
  modalStatus === "progress"
);
```

}

if (doneButton) {

```
doneButton.classList.toggle(
  "active",
  modalStatus === "done"
);
```

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

data.status =
modalStatus;

data.vendor =
getInputValue(
"vendorInput"
);

data.price =
getInputValue(
"priceInput"
);

data.deadline =
getInputValue(
"deadlineInput"
);

data.link =
getInputValue(
"linkInput"
);

data.notes =
getInputValue(
"notesInput"
);

if (!saveData()) {
return;
}

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
buildNavigation();

renderCategory();
```

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

if (
currentCategory ===
"dashboard"
) {

```
showDashboard();
```

} else {

```
buildNavigation();

renderCategory();
```

}

}

/* ============================================================
GET INPUT
============================================================ */

function getInputValue(id) {

const element =
document.getElementById(id);

if (!element) {
return "";
}

return element.value;

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
date + "T00:00:00"
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
EVENTS
============================================================ */

function setupEvents() {

const search =
document.getElementById(
"itemSearch"
);

if (search) {

```
search.addEventListener(
  "input",
  function () {
    renderCategory();
  }
);
```

}

const statusFilter =
document.getElementById(
"itemStatusFilter"
);

if (statusFilter) {

```
statusFilter.addEventListener(
  "change",
  function () {
    renderCategory();
  }
);
```

}

const exportButton =
document.getElementById(
"exportButton"
);

if (exportButton) {

```
exportButton.addEventListener(
  "click",
  exportData
);
```

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

```
importButton.addEventListener(
  "click",
  function () {
    importFile.click();
  }
);
```

}

if (importFile) {

```
importFile.addEventListener(
  "change",
  importData
);
```

}

const closeButton =
document.getElementById(
"closeModalButton"
);

if (closeButton) {

```
closeButton.addEventListener(
  "click",
  closeModal
);
```

}

const notButton =
document.getElementById(
"notButton"
);

if (notButton) {

```
notButton.addEventListener(
  "click",
  function () {
    chooseStatus("not");
  }
);
```

}

const progressButton =
document.getElementById(
"progressButton"
);

if (progressButton) {

```
progressButton.addEventListener(
  "click",
  function () {
    chooseStatus("progress");
  }
);
```

}

const doneButton =
document.getElementById(
"doneButton"
);

if (doneButton) {

```
doneButton.addEventListener(
  "click",
  function () {
    chooseStatus("done");
  }
);
```

}

const clearButton =
document.getElementById(
"clearButton"
);

if (clearButton) {

```
clearButton.addEventListener(
  "click",
  clearItem
);
```

}

const saveButton =
document.getElementById(
"saveButton"
);

if (saveButton) {

```
saveButton.addEventListener(
  "click",
  saveItem
);
```

}

const overlay =
document.getElementById(
"overlay"
);

if (overlay) {

```
overlay.addEventListener(
  "click",
  function (event) {

    if (
      event.target ===
      overlay
    ) {

      closeModal();

    }

  }
);
```

}

document.addEventListener(
"keydown",
function (event) {

```
  if (
    event.key === "Escape"
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

function startApplication() {

loadData();

setupEvents();

buildNavigation();

showDashboard();

}

/*

* The script is loaded at the bottom of index.html,
* but waiting for DOMContentLoaded makes this safe even
* if the script is moved later in the future.
  */

if (
document.readyState === "loading"
) {

document.addEventListener(
"DOMContentLoaded",
startApplication
);

} else {

startApplication();

}
