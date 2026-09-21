/* ============================================================
OUR WEDDING PLANNER
============================================================ */

const STORAGE_KEY = "tamilWeddingPlanner_v5";

const defaultCategories = [
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
.replace(/&/g, "&")
.replace(/</g, "<")
.replace(/>/g, ">")
.replace(/"/g, """)
.replace(/'/g, "'");
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
LOAD
============================================================ */

function loadData() {
try {
const stored =
localStorage.getItem(STORAGE_KEY);

```
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
  !Array.isArray(parsed)
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
} else {
  categories =
    structuredClone(defaultCategories);

  savedData = {};

  saveData();
}
```

} catch (error) {

```
console.error(
  "Could not load planner data:",
  error
);

categories =
  structuredClone(defaultCategories);

savedData = {};
```

}

normaliseCategories();
normaliseSavedData();
}

/* ============================================================
NORMALISE
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

```
    return {
      id:
        category.id ||
        createId(
          category.name || "category"
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
          : [],

      enabled:
        typeof category.enabled === "boolean"
          ? category.enabled
          : true,

      predefined:
        typeof category.predefined === "boolean"
          ? category.predefined
          : true
    };

  });
```

}

function normaliseSavedData() {

Object.keys(savedData).forEach(key => {

```
const data = savedData[key];

if (
  !data ||
  typeof data !== "object"
) {
  delete savedData[key];
  return;
}

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

if (
  typeof data.userCreated !== "boolean"
) {
  data.userCreated = false;
}
```

});
}

/* ============================================================
SAVE
============================================================ */

function saveData() {

try {

```
localStorage.setItem(
  STORAGE_KEY,
  JSON.stringify({
    version: 6,
    categories,
    savedData,
    weddingDate:
      getWeddingDate()
  })
);

return true;
```

} catch (error) {

```
console.error(
  "Could not save planner data:",
  error
);

alert(
  "Your planner data could not be saved in this browser."
);

return false;
```

}
}

/* ============================================================
ITEM DATA
============================================================ */

function itemKey(
categoryId,
item
) {
return categoryId + "::" + item;
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

  notes: "",

  enabled: true,

  userCreated: false
};
```

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

if (
typeof data.userCreated !== "boolean"
) {
data.userCreated = false;
}

return data;
}

/* ============================================================
WEDDING DATE
============================================================ */

function getWeddingDate() {

const input =
document.getElementById(
"weddingDate"
);

if (input && input.value) {
return input.value;
}

try {

```
const stored =
  localStorage.getItem(STORAGE_KEY);

if (!stored) {
  return "";
}

const parsed =
  JSON.parse(stored);

return parsed.weddingDate || "";
```

} catch {
return "";
}
}

function saveWeddingDate() {

const input =
document.getElementById(
"weddingDate"
);

if (!input) {
return;
}

saveData();

renderCountdown();
}

function calculateMonthsAndDays(
targetDate
) {

const now =
new Date();

now.setHours(
0,
0,
0,
0
);

const target =
new Date(
targetDate + "T00:00:00"
);

if (
Number.isNaN(
target.getTime()
)
) {
return null;
}

if (target <= now) {
return {
months: 0,
days: 0,
past: true
};
}

let months =
(
target.getFullYear() -
now.getFullYear()
) *
12 +
(
target.getMonth() -
now.getMonth()
);

const monthDate =
new Date(now);

monthDate.setMonth(
monthDate.getMonth() +
months
);

if (
monthDate > target
) {
months--;

```
monthDate.setMonth(
  monthDate.getMonth() - 1
);
```

}

const milliseconds =
target.getTime() -
monthDate.getTime();

const days =
Math.round(
milliseconds /
(1000 * 60 * 60 * 24)
);

return {
months: Math.max(0, months),
days: Math.max(0, days),
past: false
};
}

function renderCountdown() {

const input =
document.getElementById(
"weddingDate"
);

const monthsElement =
document.getElementById(
"countdownMonths"
);

const daysElement =
document.getElementById(
"countdownDays"
);

const textElement =
document.getElementById(
"countdownText"
);

if (!input) {
return;
}

const weddingDate =
getWeddingDate();

if (weddingDate) {
input.value =
weddingDate;
}

if (!weddingDate) {

```
if (monthsElement) {
  monthsElement.textContent = "0";
}

if (daysElement) {
  daysElement.textContent = "0";
}

if (textElement) {
  textElement.textContent =
    "Choose your wedding date to start the countdown.";
}

return;
```

}

const result =
calculateMonthsAndDays(
weddingDate
);

if (!result) {
return;
}

if (result.past) {

```
if (monthsElement) {
  monthsElement.textContent = "0";
}

if (daysElement) {
  daysElement.textContent = "0";
}

if (textElement) {
  textElement.textContent =
    "Your wedding date has arrived. ❤️";
}

return;
```

}

if (monthsElement) {
monthsElement.textContent =
result.months;
}

if (daysElement) {
daysElement.textContent =
result.days;
}

if (textElement) {

```
const formatted =
  formatDate(
    weddingDate
  );

textElement.textContent =
  "The countdown to " +
  formatted +
  " is on. 💍";
```

}
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
document.createElement(
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

nav.appendChild(
dashboard
);

categories
.filter(
category =>
category.enabled
)
.forEach(category => {

```
  const button =
    document.createElement(
      "button"
    );

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
    () =>
      showCategory(
        category.id
      )
  );

  nav.appendChild(
    button
  );
});
```

}

/* ============================================================
SHOW DASHBOARD
============================================================ */

function showDashboard() {

currentCategory =
"dashboard";

showPage(
"dashboardPage"
);

buildNavigation();
renderDashboard();
renderCountdown();

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

function showPage(
pageId
) {

[
"dashboardPage",
"categoryPage",
"managePage"
].forEach(id => {

```
const element =
  document.getElementById(
    id
  );

if (!element) {
  return;
}

element.style.display =
  id === pageId
    ? "block"
    : "none";
```

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
.forEach(category => {

```
  category.items.forEach(item => {

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

  });

});
```

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

grid.innerHTML = "";

categories
.filter(
category =>
category.enabled
)
.forEach(category => {

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

});
```

}

/* ============================================================
CATEGORY
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

showPage(
"categoryPage"
);

const categoryTitle =
document.getElementById(
"categoryTitle"
);

const categoryIcon =
document.getElementById(
"categoryIcon"
);

if (categoryTitle) {
categoryTitle.textContent =
category.name;
}

if (categoryIcon) {
categoryIcon.textContent =
category.icon;
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

let total = 0;
let done = 0;

category.items.forEach(item => {

```
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
```

});

return {
total,
done,
percent:
total > 0
? Math.round(
(done / total) * 100
)
: 0
};
}

/* ============================================================
CATEGORY RENDER
============================================================ */

function renderCategory() {

const category =
categories.find(
c =>
c.id === currentCategory
);

if (!category) {
return;
}

const stats =
getCategoryStats(
category
);

const percent =
document.getElementById(
"categoryPercent"
);

const progressText =
document.getElementById(
"categoryProgressText"
);

if (percent) {
percent.textContent =
stats.percent + "%";
}

if (progressText) {
progressText.textContent =
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

category.items.forEach(item => {

```
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
  document.createElement(
    "div"
  );

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
```

});

const empty =
document.getElementById(
"emptyMessage"
);

if (empty) {
empty.style.display =
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
c.id === categoryId
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

showCategory(
currentCategory
);
}

/* ============================================================
ADD ITEM
============================================================ */

function addItem() {

const category =
categories.find(
c =>
c.id === currentCategory
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
existing.toLowerCase() ===
cleanItem.toLowerCase()
);

if (exists) {
alert(
"This item already exists."
);

```
return;
```

}

category.items.push(
cleanItem
);

const data =
getItem(
category.id,
cleanItem
);

data.userCreated =
true;

saveData();

renderCategory();
}

/* ============================================================
ADD CATEGORY MODAL
============================================================ */

function openCategoryModal() {

const overlay =
document.getElementById(
"categoryOverlay"
);

const name =
document.getElementById(
"newCategoryName"
);

const icon =
document.getElementById(
"newCategoryIcon"
);

if (name) {
name.value = "";
}

if (icon) {
icon.value = "";
}

if (overlay) {
overlay.classList.add(
"active"
);
}

setTimeout(() => {

```
if (name) {
  name.focus();
}
```

}, 100);
}

function closeCategoryModal() {

const overlay =
document.getElementById(
"categoryOverlay"
);

if (overlay) {
overlay.classList.remove(
"active"
);
}
}

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

```
alert(
  "Please enter a category name."
);

return;
```

}

const exists =
categories.some(
category =>
category.name
.toLowerCase() ===
name.toLowerCase()
);

if (exists) {

```
alert(
  "A category with this name already exists."
);

return;
```

}

categories.push({

```
id:
  createId(name),

name,

icon:
  icon || "📋",

items: [],

enabled: true,

predefined: false
```

});

saveData();

closeCategoryModal();

buildNavigation();

renderDashboard();
}

/* ============================================================
MANAGE CATEGORIES
============================================================ */

function showManageCategories() {

currentCategory =
"manage";

showPage(
"managePage"
);

buildNavigation();

renderManageCategories();

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

function renderManageCategories() {

const container =
document.getElementById(
"manageCategories"
);

if (!container) {
return;
}

container.innerHTML = "";

categories.forEach(category => {

```
const row =
  document.createElement(
    "div"
  );

row.className =
  "manage-category";

if (!category.enabled) {
  row.classList.add(
    "disabled"
  );
}

row.innerHTML =

  '<div class="manage-category-main">' +

  '<div class="manage-category-icon">' +
  escapeHTML(
    category.icon
  ) +
  "</div>" +

  "<div>" +

  '<div class="manage-category-name">' +
  escapeHTML(
    category.name
  ) +
  "</div>" +

  '<div class="manage-category-count">' +
  category.items.length +
  " items" +
  "</div>" +

  "</div>" +

  "</div>" +

  '<button type="button" class="toggle-category">' +
  "</button>";

const toggle =
  row.querySelector(
    ".toggle-category"
  );

if (category.enabled) {
  toggle.classList.add(
    "active"
  );

  toggle.setAttribute(
    "aria-label",
    "Disable " +
      category.name
  );
} else {
  toggle.setAttribute(
    "aria-label",
    "Enable " +
      category.name
  );
}

toggle.addEventListener(
  "click",
  () =>
    toggleCategory(
      category.id
    )
);

container.appendChild(
  row
);
```

});
}

function toggleCategory(
categoryId
) {

const category =
categories.find(
c =>
c.id === categoryId
);

if (!category) {
return;
}

category.enabled =
!category.enabled;

if (
!category.enabled &&
currentCategory === category.id
) {
currentCategory =
"dashboard";
}

saveData();

renderManageCategories();

buildNavigation();

if (
currentCategory ===
"dashboard"
) {
renderDashboard();
}
}

/* ============================================================
EXPORT
============================================================ */

function exportData() {

saveData();

const backup = {

```
app:
  "Tamil Wedding Planner",

version:
  6,

exportedAt:
  new Date().toISOString(),

weddingDate:
  getWeddingDate(),

categories,

savedData
```

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

link.href =
url;

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
() =>
URL.revokeObjectURL(
url
),
1000
);
}

/* ============================================================
IMPORT
============================================================ */

function importData(
event
) {

const file =
event.target.files[0];

if (!file) {
return;
}

const reader =
new FileReader();

reader.onload =
function (e) {

```
  try {

    const imported =
      JSON.parse(
        e.target.result
      );

    if (
      !imported ||
      !Array.isArray(
        imported.categories
      ) ||
      !imported.savedData
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
      event.target.value = "";
      return;
    }

    categories =
      imported.categories;

    savedData =
      imported.savedData;

    normaliseCategories();
    normaliseSavedData();

    if (
      saveData()
    ) {

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
```

reader.onerror =
function () {

```
  alert(
    "Could not read the selected file."
  );

  event.target.value =
    "";
};
```

reader.readAsText(
file
);
}

/* ============================================================
RESET
============================================================ */

function resetPlanner() {

const confirmed =
confirm(
"Reset the wedding planner?\n\nThis will restore the original categories and items and remove your saved item details.\n\nYour wedding date will also be cleared."
);

if (!confirmed) {
return;
}

const doubleConfirmed =
confirm(
"Are you absolutely sure?\n\nThis action cannot be undone unless you have an exported backup."
);

if (!doubleConfirmed) {
return;
}

categories =
structuredClone(
defaultCategories
);

categories =
categories.map(
category => ({
...category,
enabled: true,
predefined: true
})
);

savedData =
{};

localStorage.removeItem(
STORAGE_KEY
);

saveData();

currentCategory =
"dashboard";

showDashboard();

alert(
"The wedding planner has been reset."
);
}

/* ============================================================
EVENTS
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

const closeCategoryButton =
document.getElementById(
"closeCategoryButton"
);

const cancelCategoryButton =
document.getElementById(
"cancelCategoryButton"
);

const saveCategoryButton =
document.getElementById(
"saveCategoryButton"
);

const categoryOverlay =
document.getElementById(
"categoryOverlay"
);

const addItemButton =
document.getElementById(
"addItemButton"
);

const backToDashboardButton =
document.getElementById(
"backToDashboardButton"
);

const manageCategoriesButton =
document.getElementById(
"manageCategoriesButton"
);

const backFromManageButton =
document.getElementById(
"backFromManageButton"
);

const weddingDate =
document.getElementById(
"weddingDate"
);

if (exportButton) {
exportButton.addEventListener(
"click",
exportData
);
}

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

if (resetButton) {
resetButton.addEventListener(
"click",
resetPlanner
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

if (overlay) {
overlay.addEventListener(
"click",
event => {

```
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

if (categoryOverlay) {
categoryOverlay.addEventListener(
"click",
event => {

```
    if (
      event.target ===
      categoryOverlay
    ) {
      closeCategoryModal();
    }

  }
);
```

}

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

if (addCategoryButton) {
addCategoryButton.addEventListener(
"click",
openCategoryModal
);
}

if (closeCategoryButton) {
closeCategoryButton.addEventListener(
"click",
closeCategoryModal
);
}

if (cancelCategoryButton) {
cancelCategoryButton.addEventListener(
"click",
closeCategoryModal
);
}

if (saveCategoryButton) {
saveCategoryButton.addEventListener(
"click",
addCategory
);
}

if (addItemButton) {
addItemButton.addEventListener(
"click",
addItem
);
}

if (backToDashboardButton) {
backToDashboardButton.addEventListener(
"click",
showDashboard
);
}

if (manageCategoriesButton) {
manageCategoriesButton.addEventListener(
"click",
showManageCategories
);
}

if (backFromManageButton) {
backFromManageButton.addEventListener(
"click",
showDashboard
);
}

if (weddingDate) {
weddingDate.addEventListener(
"change",
saveWeddingDate
);
}

document.addEventListener(
"keydown",
event => {

```
  if (
    event.key === "Escape"
  ) {

    closeModal();

    closeCategoryModal();
  }

  if (
    event.key === "Enter" &&
    document
      .getElementById(
        "categoryOverlay"
      )
      ?.classList.contains(
        "active"
      )
  ) {

    addCategory();
  }

}
```

);
}

/* ============================================================
START
============================================================ */

document.addEventListener(
"DOMContentLoaded",
function () {

```
loadData();

setupEvents();

buildNavigation();

showDashboard();
```

}
);
