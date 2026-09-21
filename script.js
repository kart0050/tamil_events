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

```
const stored = localStorage.getItem(STORAGE_KEY);

if (stored) {
  savedData = JSON.parse(stored);
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
saveData();

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

link.setAttribute("href", url);

const now = new Date();

const year = now.getFullYear();

const month = String(
  now.getMonth() + 1
).padStart(2, "0");

const day = String(
  now.getDate()
).padStart(2, "0");

/*
 * IMPORTANT:
 * Do not use a template literal here.
 * This avoids the syntax error that was
 * breaking the entire script.
 */

const filename =
  "wedding-planner-backup-" +
  year +
  "-" +
  month +
  "-" +
  day +
  ".json";

link.setAttribute(
  "download",
  filename
);

link.style.display = "none";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

setTimeout(function() {
  URL.revokeObjectURL(url);
}, 1000);

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

reader.onload = function(e) {

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

  const saved = saveData();

  if (!saved) {

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
```

};

reader.onerror = function() {

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

function itemKey(categoryId, item) {

return categoryId + "::" + item;

}

/* ============================================================
GET ITEM
============================================================ */

function getItem(categoryId, item) {

const key = itemKey(
categoryId,
item
);

if (!savedData[key]) {

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

const dashboard =
document.createElement("button");

dashboard.textContent =
"🏠 Dashboard";

dashboard.type = "button";

dashboard.onclick = function() {
showDashboard();
};

dashboard.className =
currentCategory === "dashboard"
? "active"
: "";

nav.appendChild(dashboard);

categories.forEach(function(category) {

```
const button =
  document.createElement("button");

button.textContent =
  category.icon +
  " " +
  category.name;

button.type = "button";

button.onclick = function() {
  showCategory(category.id);
};

button.className =
  currentCategory === category.id
    ? "active"
    : "";

nav.appendChild(button);
```

});

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

function renderDashboard() {

let total = 0;
let done = 0;
let progress = 0;

categories.forEach(function(category) {

```
category.items.forEach(function(item) {

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
```

});

const percent = total
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

const grid =
document.getElementById(
"summaryGrid"
);

if (!grid) {
return;
}

grid.innerHTML = "";

categories.forEach(function(category) {

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

const description =
  document.createElement("p");

description.textContent =
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
card.appendChild(description);
card.appendChild(bar);

card.onclick = function() {
  showCategory(category.id);
};

grid.appendChild(card);
```

});

}

/* ============================================================
CATEGORY
============================================================ */

function showCategory(id) {

const category =
categories.find(function(c) {
return c.id === id;
});

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

const title =
document.getElementById(
"categoryTitle"
);

if (title) {
title.textContent =
category.icon +
" " +
category.name;
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

function getCategoryStats(category) {

const total =
category.items.length;

const done =
category.items.filter(function(item) {

```
  return getItem(
    category.id,
    item
  ).status === "done";

}).length;
```

const percent =
total
? Math.round((done / total) * 100)
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
categories.find(function(c) {
return c.id === currentCategory;
});

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

const searchElement =
document.getElementById(
"itemSearch"
);

const filterElement =
document.getElementById(
"itemStatusFilter"
);

const search =
searchElement
? searchElement.value
.toLowerCase()
.trim()
: "";

const status =
filterElement
? filterElement.value
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

category.items.forEach(function(item) {

```
const data =
  getItem(
    category.id,
    item
  );

const vendor =
  String(data.vendor || "");

const notes =
  String(data.notes || "");

const matchesSearch =
  !search ||
  item.toLowerCase().includes(search) ||
  vendor.toLowerCase().includes(search) ||
  notes.toLowerCase().includes(search);

const matchesStatus =
  status === "all" ||
  data.status === status;

if (!matchesSearch || !matchesStatus) {
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

const statusBadge =
  document.createElement("div");

statusBadge.className =
  "item-status";

if (data.status === "progress") {
  statusBadge.classList.add("progress");
}

if (data.status === "done") {
  statusBadge.classList.add("done");
}

if (data.status === "progress") {
  statusBadge.textContent =
    "In progress";
} else if (data.status === "done") {
  statusBadge.textContent =
    "Completed";
} else {
  statusBadge.textContent =
    "Not started";
}

top.appendChild(icon);
top.appendChild(statusBadge);

const title =
  document.createElement("h3");

title.textContent = item;

const vendorText =
  document.createElement("p");

if (data.vendor) {

  vendorText.textContent =
    "👤 " + data.vendor;

} else {

  vendorText.textContent =
    "Click to add details";

}

card.appendChild(top);
card.appendChild(title);
card.appendChild(vendorText);

if (data.deadline) {

  const deadline =
    document.createElement("div");

  deadline.className =
    "item-meta";

  deadline.textContent =
    "📅 " +
    formatDate(data.deadline);

  card.appendChild(deadline);

}

card.onclick = function() {

  openModal(
    category.id,
    item
  );

};

grid.appendChild(card);
```

});

const empty =
document.getElementById(
"emptyMessage"
);

if (empty) {

```
empty.style.display =
  visible
    ? "none"
    : "block";
```

}

}

/* ============================================================
MODAL
============================================================ */

function openModal(categoryId, item) {

currentItem = {
categoryId: categoryId,
item: item
};

const category =
categories.find(function(c) {
return c.id === categoryId;
});

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
modalCategory.textContent =
category.name;
}

if (modalTitle) {
modalTitle.textContent =
item;
}

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

saveData();

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
date + "T00:00:00"
);

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

document.addEventListener(
"DOMContentLoaded",
function() {

```
const search =
  document.getElementById(
    "itemSearch"
  );

if (search) {

  search.addEventListener(
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

const importFile =
  document.getElementById(
    "importFile"
  );

if (importFile) {

  importFile.addEventListener(
    "change",
    importData
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

      if (event.target === overlay) {
        closeModal();
      }

    }
  );

}

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);

loadData();

buildNavigation();

showDashboard();
```

}
);
