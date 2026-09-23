/* =========================================================
   TAMIL WEDDING PLANNER
   SCRIPT.JS
   ========================================================= */

"use strict";


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "TamilWeddingPlanner_v1";


/* =========================================================
   DEFAULT CATEGORIES
   ========================================================= */

const defaultCategories = [

    {
        id: "clothes",
        name: "Clothes",
        icon: "👗",
        mainCategory: "wedding",
        items: [
            "Manavarai saree",
            "Koorai saree (Rød)",
            "Vetti sattai",
            "Shoes",
            "Vetti Sattai Grooms Mate",
            "Saree Bridesmaid",
            "Clothes for Henna Fest",
            "Clothes for preshoot",
            "Amorasareesdk",
            "Ranyasarees"
        ]
    },

    {
        id: "reception-songs",
        name: "Reception Songs",
        icon: "🎵",
        mainCategory: "reception",
        items: [
            "Entrance",
            "Pardans",
            "Preshoot",
            "Bryllupsvideo",
            "After Party"
        ]
    },

    {
        id: "wedding-sign-card",
        name: "Wedding Sign + Card",
        icon: "💌",
        mainCategory: "wedding",
        items: [
            "Aviraa Creations",
            "Ponthayadesigns",
        ]
    },

    {
        id: "decoration",
        name: "Decoration",
        icon: "🌸",
        mainCategory: "wedding",
        items: [
            "Kopuramevents.fr"
        ]
    },

    {
        id: "accessories-gifts",
        name: "Accessories + Gifts",
        icon: "🎁",
        mainCategory: "reception",
        items: [
            "360 Booth",
            "Bridal Corner Setup",
            "Children Sweets",
            "Palaharam (Goodie bag)",
            "Civil Wedding (Ring)",
            "Yndlingsting"
        ]
    },

    {
        id: "henna-fest",
        name: "Henna Fest",
        icon: "🌿",
        mainCategory: "wedding",
        items: [
            "Mehendi (rosedecoration.dk)",
            "Tamilhennecreation",
            "Tent",
            "Visual Eyes"
        ]
    },

    {
        id: "makeup-hair",
        name: "Makeup + Hair",
        icon: "💄",
        mainCategory: "wedding",
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
        mainCategory: "wedding",
        items: [
            "Thaali",
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
        mainCategory: "wedding",
        items: [
            "Empty"
        ]
    },

    {
        id: "maalai",
        name: "Maalai",
        icon: "🌺",
        mainCategory: "wedding",
        items: [
            "Herning Maalai"
        ]
    },

    {
        id: "catering",
        name: "Catering (Food)",
        icon: "🍛",
        mainCategory: "wedding",
        items: [
            "Poovi Mama Horsens",
            "Kammali Randers",
            "Tamil Ondrai Aarhus",
            "Arusuvai",
            "Vaathali og Pako"
        ]
    },

    {
        id: "wedding-cake",
        name: "Wedding Cake",
        icon: "🎂",
        mainCategory: "reception",
        items: [
            "Wedding Cake",
            "Lighter + Knife"
        ]
    },

    {
        id: "photo-video",
        name: "Photo + Video + Preshoot",
        icon: "📸",
        mainCategory: "wedding",
        items: [
            "Digital Pro",
            "Nomad",
            "Ajeenth Video",
            "Visual Eyes",
            "Vividmemoir.dk",
            "Infocus",
            "Gradium",
            "Views of Nivi",
            "Sana"
        ]
    },

    {
        id: "dj",
        name: "DJ",
        icon: "🎧",
        mainCategory: "reception",
        items: [
            "Playloud",
            "Keeth Entertainment",
            "Microphone",
            "Iqon Musik",
            "Resound"
        ]
    },

    {
        id: "hall-kovil",
        name: "Hall / Kovil",
        icon: "🏛️",
        mainCategory: "wedding",
        items: [
            "Sana Palace RA",
            "Uranus Partyhouse",
            "E-Plaza AA",
            "Elegance Brørup",
            "Babylon AA",
            "Sociale Palace Silkeborg",
            "Herning Kovil",
        ]
    },

    {
        id: "entertainment",
        name: "Entertainment",
        icon: "🎭",
        mainCategory: "reception",
        items: [
            "Groom & Bride (Pardans)",
            "Groom & Bride (Cinema Paattu)",
            "Bollywood Dance",
            "Gruppedans",,
            "Girls Dance",
            "Boys Dance",
            "Family Dance",
            "Dance Club",
        ]
    },

    {
        id: "speech-host-operator",
        name: "Speech + Host + Operator",
        icon: "🎤",
        mainCategory: "reception",
        items: [
            "Friends",
            "Groom / Bride Speech",
            "Dad & Mum",
            "Speakers",
            "Lighting",
            "Projector"
        ]
    },
];


/* =========================================================
   STATE
   ========================================================= */

let categories = [];
let savedData = {};

let responsibleIndividualsGroups = [];

let currentCategory = "dashboard";
let currentMainCategory = "wedding";
let currentItem = null;

let modalStatus = "not";

let managementMode = "category";


/* =========================================================
   MAIN CATEGORY LABEL
   ========================================================= */

function getMainCategoryLabel(mainCategory) {
    return mainCategory === "reception"
        ? "Reception"
        : "Wedding";
}


/* =========================================================
   DOM HELPERS
   ========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function cloneDefaults() {
    return JSON.parse(JSON.stringify(defaultCategories));
}


function createId(prefix = "id") {
    return (
        prefix +
        "_" +
        Date.now().toString(36) +
        "_" +
        Math.random()
            .toString(36)
            .substring(2, 8)
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

    const date = new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
}


function showToast(message) {
    const toast = getElement("toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeout);

    showToast.timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================================
   RESPONSIBLE INDIVIDUAL/GROUP NORMALISATION
   ========================================================= */

function normaliseResponsibleIndividualsGroups(input) {
    if (!Array.isArray(input)) {
        return [];
    }

    const seen = new Set();
    const result = [];

    input.forEach(value => {
        const cleanValue = String(value ?? "").trim();

        if (!cleanValue) {
            return;
        }

        const key = cleanValue.toLowerCase();

        if (seen.has(key)) {
            return;
        }

        seen.add(key);
        result.push(cleanValue);
    });

    return result;
}


/* =========================================================
   LOAD DATA
   ========================================================= */

function loadData() {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        categories = cloneDefaults();
        savedData = {};
        responsibleIndividualsGroups = [];
        return;
    }

    try {
        const parsed = JSON.parse(raw);

        categories = normaliseCategories(
            Array.isArray(parsed.categories)
                ? parsed.categories
                : cloneDefaults()
        );

        savedData =
            parsed.savedData &&
            typeof parsed.savedData === "object"
                ? parsed.savedData
                : {};

        responsibleIndividualsGroups =
            normaliseResponsibleIndividualsGroups(
                parsed.responsibleIndividualsGroups
            );

        migrateSavedData();

    } catch (error) {
        console.error(
            "Could not load saved planner data:",
            error
        );

        categories = cloneDefaults();
        savedData = {};
        responsibleIndividualsGroups = [];

        showToast(
            "Saved data could not be loaded. Defaults restored."
        );
    }
}


/* =========================================================
   SAVE DATA
   ========================================================= */

function saveData() {
    const data = {
        version: 8,
        categories,
        savedData,
        responsibleIndividualsGroups:
            normaliseResponsibleIndividualsGroups(
                responsibleIndividualsGroups
            )
    };

    responsibleIndividualsGroups =
        data.responsibleIndividualsGroups;

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


/* =========================================================
   CATEGORY NORMALISATION
   ========================================================= */

function normaliseCategories(input) {
    if (!Array.isArray(input)) {
        return cloneDefaults();
    }

    return input
        .map(category => {

            if (!category || typeof category !== "object") {
                return null;
            }

            const name =
                String(category.name ?? "").trim();

            if (!name) {
                return null;
            }

            return {
                id:
                    String(
                        category.id ||
                        createId("category")
                    ),

                name,

                icon:
                    String(
                        category.icon || "📋"
                    ),

                items:
                    Array.isArray(category.items)
                        ? category.items
                            .map(item => {

                                if (
                                    typeof item === "string"
                                ) {
                                    return {
                                        name: item,
                                        custom: false
                                    };
                                }

                                if (
                                    item &&
                                    typeof item === "object"
                                ) {
                                    return {
                                        name:
                                            String(
                                                item.name ?? ""
                                            ).trim(),

                                        custom:
                                            Boolean(
                                                item.custom
                                            )
                                    };
                                }

                                return null;
                            })
                            .filter(
                                item =>
                                    item &&
                                    item.name
                            )
                        : []
            };
        })
        .filter(Boolean);
}


/* =========================================================
   SAVED ITEM DATA MIGRATION
   ========================================================= */

function migrateSavedData() {
    Object.keys(savedData).forEach(key => {

        const item = savedData[key];

        if (!item || typeof item !== "object") {
            savedData[key] = {};
            return;
        }

        if (
            !item.responsiblePerson &&
            item.vendor
        ) {
            item.responsiblePerson =
                String(item.vendor);
        }

        if (
            item.responsiblePerson === undefined
        ) {
            item.responsiblePerson = "";
        }

        if (item.deposit === undefined) {
            item.deposit = "";
        }

        if (item.mobile === undefined) {
            item.mobile = "";
        }

        if (item.email === undefined) {
            item.email = "";
        }

        if (item.contactPerson === undefined) {
            item.contactPerson = "";
        }

        if (item.status === undefined) {
            item.status = "not";
        }

        if (item.price === undefined) {
            item.price = "";
        }

        if (item.deadline === undefined) {
            item.deadline = "";
        }

        if (item.link === undefined) {
            item.link = "";
        }

        if (item.notes === undefined) {
            item.notes = "";
        }

        if (item.enabled === undefined) {
            item.enabled = true;
        }

        delete item.vendor;
    });
}


/* =========================================================
   ITEM DATA
   ========================================================= */

function getItem(categoryId, item) {
    const itemName =
        typeof item === "string"
            ? item
            : item.name;

    const key =
        `${categoryId}::${itemName}`;

    if (
        !savedData[key] ||
        typeof savedData[key] !== "object"
    ) {
        savedData[key] = {
            status: "not",
            responsiblePerson: "",
            deposit: "",
            price: "",
            mobile: "",
            email: "",
            contactPerson: "",
            deadline: "",
            link: "",
            notes: "",
            enabled: true
        };
    }

    const data = savedData[key];

    if (data.responsiblePerson === undefined) {
        data.responsiblePerson = "";
    }

    if (data.deposit === undefined) {
        data.deposit = "";
    }

    if (data.price === undefined) {
        data.price = "";
    }

    if (data.mobile === undefined) {
        data.mobile = "";
    }

    if (data.email === undefined) {
        data.email = "";
    }

    if (data.contactPerson === undefined) {
        data.contactPerson = "";
    }

    if (data.status === undefined) {
        data.status = "not";
    }

    if (data.deadline === undefined) {
        data.deadline = "";
    }

    if (data.link === undefined) {
        data.link = "";
    }

    if (data.notes === undefined) {
        data.notes = "";
    }

    if (data.enabled === undefined) {
        data.enabled = true;
    }

    delete data.vendor;

    return data;
}

/* =========================================================
   MAIN CATEGORY NAVIGATION
   ========================================================= */

function buildMainCategoryNavigation() {

    const navigation =
        getElement(
            "mainCategoryNavigation"
        );

    if (!navigation) {
        return;
    }


    navigation.innerHTML = "";


    const mainCategories = [

        {
            id: "wedding",
            name: "Wedding",
            icon: "💍"
        },

        {
            id: "reception",
            name: "Reception",
            icon: "🎉"
        }
    ];


    mainCategories.forEach(
        mainCategory => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";

            button.className =
                "main-category-button";


            if (
                currentMainCategory ===
                mainCategory.id
            ) {

                button.classList.add(
                    "active"
                );
            }


            button.innerHTML = `

                <span class="main-category-icon">
                    ${mainCategory.icon}
                </span>

                <span>
                    ${escapeHTML(
                        mainCategory.name
                    )}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    /*
                     * Change the selected
                     * main category.
                     */
                    currentMainCategory =
                        mainCategory.id;


                    /*
                     * Rebuild both navigation
                     * areas so the correct
                     * categories appear.
                     */
                    buildMainCategoryNavigation();
                    buildNavigation();


                    /*
                     * If the user is currently
                     * looking at a category
                     * belonging to the other
                     * section, return to dashboard.
                     */
                    if (
                        currentCategory !==
                            "dashboard" &&

                        currentCategory !==
                            "tagging" &&

                        currentCategory !==
                            "hidden" &&

                        currentCategory !==
                            "budget"
                    ) {

                        const selectedCategory =
                            categories.find(
                                category =>
                                    category.id ===
                                    currentCategory
                            );


                        if (
                            !selectedCategory ||
                            selectedCategory.mainCategory !==
                                currentMainCategory
                        ) {

                            showDashboard();

                            return;
                        }
                    }


                    /*
                     * If already on dashboard,
                     * refresh the dashboard.
                     */
                    if (
                        currentCategory ===
                        "dashboard"
                    ) {

                        renderDashboard();
                    }

                }
            );


            navigation.appendChild(
                button
            );
        }
    );
}



/* =========================================================
   NAVIGATION
   ========================================================= */

function buildNavigation() {
    const topNavigation = getElement("topNavigation");
    const navigation = getElement("navigation");

    if (!topNavigation || !navigation) {
        return;
    }

    topNavigation.innerHTML = "";
    navigation.innerHTML = "";


    /* =====================================================
       TOP NAVIGATION
       Dashboard / Tagging / Hidden Items
       ===================================================== */

    const dashboardButton =
        document.createElement("button");

    dashboardButton.type = "button";
    dashboardButton.className = "nav-button";
    dashboardButton.textContent =
        "🏠 Dashboard";

    dashboardButton.addEventListener(
        "click",
        showDashboard
    );

    topNavigation.appendChild(
        dashboardButton
    );


    const taggingButton =
        document.createElement("button");

    taggingButton.type = "button";
    taggingButton.className = "nav-button";
    taggingButton.textContent =
        "🏷️ Tagging";

    taggingButton.addEventListener(
        "click",
        showTagging
    );

    topNavigation.appendChild(
        taggingButton
    );


    const hiddenButton =
        document.createElement("button");

    hiddenButton.type = "button";
    hiddenButton.className = "nav-button";
    hiddenButton.textContent =
        "👁️ Hidden Items";

    hiddenButton.addEventListener(
        "click",
        showHiddenItems
    );

    topNavigation.appendChild(
        hiddenButton
    );

    /* =====================================================
       BUDGET OVERVIEW
       ===================================================== */

    const budgetButton =
        document.createElement("button");

    budgetButton.type = "button";
    budgetButton.className = "nav-button";
    budgetButton.textContent =
        "💰 Budget Overview";

    budgetButton.addEventListener(
        "click",
        showBudgetOverview
    );

    topNavigation.appendChild(
        budgetButton
    );

    /* =====================================================
       CATEGORY NAVIGATION
       Only wedding categories stay in original navigation
       ===================================================== */

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "nav-button";

        button.textContent =
            `${category.icon} ${category.name}`;

        button.addEventListener(
            "click",
            () => showCategory(category.id)
        );

        navigation.appendChild(
            button
        );
    });
}


/* =========================================================
   PAGE MANAGEMENT
   ========================================================= */

function hideAllPages() {
    const dashboardPage =
        getElement("dashboardPage");

    const categoryPage =
        getElement("categoryPage");

    const taggingPage =
        getElement("taggingPage");

    const budgetPage =
        getElement("budgetPage");


    if (dashboardPage) {
        dashboardPage.classList.add("hidden");
    }

    if (categoryPage) {
        categoryPage.classList.add("hidden");
    }

    if (taggingPage) {
        taggingPage.classList.add("hidden");
    }

    if (budgetPage) {
        budgetPage.classList.add("hidden");
    }
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function showDashboard() {
    hideAllPages();

    const dashboardPage =
        getElement("dashboardPage");

    if (dashboardPage) {
        dashboardPage.classList.remove("hidden");
    }

    currentCategory = "dashboard";
    currentItem = null;

    renderDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function renderDashboard() {
    const summaryGrid =
        getElement("summaryGrid");

    if (!summaryGrid) {
        return;
    }

    summaryGrid.innerHTML = "";

    let totalItems = 0;
    let completedItems = 0;
    let progressItems = 0;

    categories.forEach(category => {

        let categoryTotal = 0;
        let categoryDone = 0;

        category.items.forEach(item => {

            const data =
                getItem(
                    category.id,
                    item
                );

            if (data.enabled === false) {
                return;
            }

            totalItems++;
            categoryTotal++;

            if (data.status === "done") {
                completedItems++;
                categoryDone++;
            }

            if (data.status === "progress") {
                progressItems++;
            }
        });

        const percent =
            categoryTotal > 0
                ? Math.round(
                    (categoryDone /
                        categoryTotal) *
                    100
                )
                : 0;

        const card =
            document.createElement("div");

        card.className =
            "category-summary-card";

        card.innerHTML = `
            <div class="category-card-top">

                <span class="category-icon">
                    ${escapeHTML(category.icon)}
                </span>

                <span class="category-percent">
                    ${percent}%
                </span>

            </div>

            <h3>
                ${escapeHTML(category.name)}
            </h3>

            <p>
                ${categoryDone} of
                ${categoryTotal}
                completed
            </p>

            <div class="progress-bar small">
                <div
                    class="progress-fill"
                    style="width: ${percent}%"
                ></div>
            </div>
        `;

        card.addEventListener(
            "click",
            () => showCategory(category.id)
        );

        summaryGrid.appendChild(card);
    });


    const overallPercent =
        totalItems > 0
            ? Math.round(
                (completedItems /
                    totalItems) *
                100
            )
            : 0;

    const totalItemsElement =
        getElement("totalItems");

    const completedItemsElement =
        getElement("completedItems");

    const progressItemsElement =
        getElement("progressItems");

    const responsibleGroupsCount =
        getElement("responsibleGroupsCount");

    const overallPercentElement =
        getElement("overallPercent");

    const overallProgressFill =
        getElement("overallProgressFill");


    if (totalItemsElement) {
        totalItemsElement.textContent =
            totalItems;
    }

    if (completedItemsElement) {
        completedItemsElement.textContent =
            completedItems;
    }

    if (progressItemsElement) {
        progressItemsElement.textContent =
            progressItems;
    }

    if (responsibleGroupsCount) {
        responsibleGroupsCount.textContent =
            responsibleIndividualsGroups.length;
    }

    if (overallPercentElement) {
        overallPercentElement.textContent =
            `${overallPercent}%`;
    }

    if (overallProgressFill) {
        overallProgressFill.style.width =
            `${overallPercent}%`;
    }
}


/* =========================================================
   TAGGING PAGE
   ========================================================= */

function showTagging() {
    hideAllPages();

    const taggingPage =
        getElement("taggingPage");

    if (taggingPage) {
        taggingPage.classList.remove("hidden");
    }

    currentCategory = "tagging";
    currentItem = null;

    renderTagging();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function renderTagging() {
    const taggingGrid =
        getElement("taggingGrid");

    const emptyMessage =
        getElement("taggingEmptyMessage");

    if (!taggingGrid) {
        return;
    }

    taggingGrid.innerHTML = "";

    responsibleIndividualsGroups =
        normaliseResponsibleIndividualsGroups(
            responsibleIndividualsGroups
        );


    if (
        responsibleIndividualsGroups.length === 0
    ) {
        if (emptyMessage) {
            emptyMessage.style.display =
                "block";
        }

        return;
    }


    if (emptyMessage) {
        emptyMessage.style.display =
            "none";
    }


    responsibleIndividualsGroups.forEach(
        name => {

            const card =
                document.createElement("div");

            card.className =
                "tagging-card";

            const nameElement =
                document.createElement("div");

            nameElement.className =
                "tagging-card-name";

            nameElement.textContent = name;


            const deleteButton =
                document.createElement("button");

            deleteButton.type = "button";
            deleteButton.className =
                "danger-button tagging-delete-button";

            deleteButton.textContent =
                "Delete";

            deleteButton.addEventListener(
                "click",
                () =>
                    deleteResponsibleIndividualGroup(
                        name
                    )
            );


            card.appendChild(
                nameElement
            );

            card.appendChild(
                deleteButton
            );

            taggingGrid.appendChild(card);
        }
    );
}


/* =========================================================
   ADD TAG
   ========================================================= */

function addResponsibleIndividualGroup() {
    const input =
        getElement("taggingInput");

    if (!input) {
        return;
    }

    const value =
        input.value.trim();

    if (!value) {
        showToast(
            "Please enter an individual or group."
        );

        input.focus();

        return;
    }


    const duplicate =
        responsibleIndividualsGroups.some(
            existing =>
                existing.toLowerCase() ===
                value.toLowerCase()
        );

    if (duplicate) {
        showToast(
            "This individual/group already exists."
        );

        input.focus();

        return;
    }


    responsibleIndividualsGroups.push(value);

    responsibleIndividualsGroups =
        normaliseResponsibleIndividualsGroups(
            responsibleIndividualsGroups
        );

    saveData();

    input.value = "";

    renderTagging();

    populateResponsibleIndividualSelect();

    renderDashboard();

    showToast(
        `"${value}" added to Tagging.`
    );

    input.focus();
}


/* =========================================================
   DELETE TAG
   ========================================================= */

function deleteResponsibleIndividualGroup(
    name
) {
    const confirmed =
        window.confirm(
            `Delete "${name}" from the Tagging list?\n\nExisting item assignments will not be removed.`
        );

    if (!confirmed) {
        return;
    }


    const lowerName =
        name.toLowerCase();

    responsibleIndividualsGroups =
        responsibleIndividualsGroups.filter(
            existing =>
                existing.toLowerCase() !==
                lowerName
        );

    saveData();

    renderTagging();

    populateResponsibleIndividualSelect();

    renderDashboard();

    showToast(
        `"${name}" removed from Tagging.`
    );
}


/* =========================================================
   RESPONSIBLE DROPDOWN
   ========================================================= */

function populateResponsibleIndividualSelect(
    selectedValue = null
) {
    const select =
        getElement(
            "responsiblePersonInput"
        );

    if (!select) {
        return;
    }

    const currentValue =
        selectedValue !== null
            ? selectedValue
            : select.value;

    select.innerHTML = "";


    const emptyOption =
        document.createElement("option");

    emptyOption.value = "";
    emptyOption.textContent =
        "No assignment (use tagging)";

    select.appendChild(
        emptyOption
    );


    responsibleIndividualsGroups.forEach(
        name => {

            const option =
                document.createElement(
                    "option"
                );

            option.value = name;
            option.textContent = name;

            select.appendChild(option);
        }
    );


    if (
        currentValue &&
        !responsibleIndividualsGroups.some(
            name =>
                name === currentValue
        )
    ) {
        const legacyOption =
            document.createElement(
                "option"
            );

        legacyOption.value =
            currentValue;

        legacyOption.textContent =
            `${currentValue} (saved assignment)`;

        select.appendChild(
            legacyOption
        );
    }


    select.value =
        currentValue || "";
}


/* =========================================================
   CATEGORY PAGE
   ========================================================= */

function showCategory(categoryId) {
    const category =
        categories.find(
            item =>
                item.id === categoryId
        );

    if (!category) {
        return;
    }

    hideAllPages();

    const categoryPage =
        getElement("categoryPage");

    if (categoryPage) {
        categoryPage.classList.remove(
            "hidden"
        );
    }

    currentCategory = categoryId;
    currentItem = null;


    const categoryTitle =
        getElement("categoryTitle");

    const categoryPageHeading =
        getElement("categoryPageHeading");

    const addItemButton =
        getElement("addItemButton");

    const itemSearch =
        getElement("itemSearch");

    const itemStatusFilter =
        getElement("itemStatusFilter");


    if (categoryTitle) {
        categoryTitle.textContent =
            category.name;
    }

    if (categoryPageHeading) {
        categoryPageHeading.textContent =
            category.name;
    }

    if (addItemButton) {
        addItemButton.style.display =
            "";
    }

    if (itemSearch) {
        itemSearch.value = "";
    }

    if (itemStatusFilter) {
        itemStatusFilter.value = "all";
    }

    renderCategory();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   CATEGORY RENDER
   ========================================================= */

function renderCategory() {
    const category =
        categories.find(
            item =>
                item.id === currentCategory
        );

    if (!category) {
        return;
    }

    const itemsGrid =
        getElement("itemsGrid");

    const emptyMessage =
        getElement("emptyMessage");

    if (!itemsGrid) {
        return;
    }

    itemsGrid.innerHTML = "";


    const searchInput =
        getElement("itemSearch");

    const statusFilter =
        getElement("itemStatusFilter");


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const filter =
        statusFilter
            ? statusFilter.value
            : "all";


    const visibleItems =
        category.items.filter(item => {

            const itemName =
                typeof item === "string"
                    ? item
                    : item.name;

            const data =
                getItem(
                    category.id,
                    item
                );

            if (data.enabled === false) {
                return false;
            }

            if (
                search &&
                !itemName
                    .toLowerCase()
                    .includes(search)
            ) {
                return false;
            }

            if (
                filter !== "all" &&
                data.status !== filter
            ) {
                return false;
            }

            return true;
        });


    if (visibleItems.length === 0) {

        if (emptyMessage) {
            emptyMessage.style.display =
                "block";
        }

    } else {

        if (emptyMessage) {
            emptyMessage.style.display =
                "none";
        }


        visibleItems.forEach(item => {

            const card =
                createItemCard(
                    category,
                    item
                );

            itemsGrid.appendChild(card);
        });
    }


    updateCategoryProgress(
        category
    );
}


/* =========================================================
   ITEM CARD
   ========================================================= */

function createItemCard(
    category,
    item
) {
    const itemName =
        typeof item === "string"
            ? item
            : item.name;

    const data =
        getItem(
            category.id,
            item
        );


    const card =
        document.createElement("div");

    card.className =
        "item-card";


    const statusLabel =
        getStatusLabel(
            data.status
        );


    let details = "";


    if (data.responsiblePerson) {
        details += `
            <div class="item-detail">
                <span>
                    Responsible individual/group
                </span>
                <strong>
                    ${escapeHTML(
                        data.responsiblePerson
                    )}
                </strong>
            </div>
        `;
    }


    if (data.price !== "") {
        details += `
            <div class="item-detail">
                <span>
                    Price
                </span>
                <strong>
                    ${escapeHTML(
                        data.price
                    )} kr.
                </strong>
            </div>
        `;
    }


    if (data.deposit !== "") {
        details += `
            <div class="item-detail">
                <span>
                    Depositum
                </span>
                <strong>
                    ${escapeHTML(
                        data.deposit
                    )} kr.
                </strong>
            </div>
        `;
    }


    if (data.contactPerson) {
        details += `
            <div class="item-detail">
                <span>
                    Contact
                </span>
                <strong>
                    ${escapeHTML(
                        data.contactPerson
                    )}
                </strong>
            </div>
        `;
    }


    if (data.mobile) {
        details += `
            <div class="item-detail">
                <span>
                    Mobile
                </span>
                <strong>
                    ${escapeHTML(
                        data.mobile
                    )}
                </strong>
            </div>
        `;
    }


    if (data.deadline) {
        details += `
            <div class="item-detail">
                <span>
                    Deadline
                </span>
                <strong>
                    ${escapeHTML(
                        formatDate(
                            data.deadline
                        )
                    )}
                </strong>
            </div>
        `;
    }


    card.innerHTML = `
        <div class="item-card-header">

            <span
                class="item-status status-${escapeHTML(
                    data.status
                )}"
            >
                ${escapeHTML(
                    statusLabel
                )}
            </span>

        </div>

        <h3>
            ${escapeHTML(itemName)}
        </h3>

        ${
            details
                ? `
                    <div class="item-details">
                        ${details}
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


    return card;
}


/* =========================================================
   STATUS
   ========================================================= */

function getStatusLabel(status) {
    switch (status) {

        case "done":
            return "Done";

        case "progress":
            return "In progress";

        default:
            return "Not started";
    }
}


function updateStatusButtons() {
    const buttons = {
        not: getElement("notButton"),
        progress: getElement("progressButton"),
        done: getElement("doneButton")
    };

    Object.entries(buttons).forEach(
        ([status, button]) => {

            if (!button) {
                return;
            }

            button.classList.toggle(
                "active",
                modalStatus === status
            );
        }
    );
}


/* =========================================================
   ITEM MODAL
   ========================================================= */

function openModal(
    categoryId,
    item
) {
    const category =
        categories.find(
            category =>
                category.id === categoryId
        );

    if (!category) {
        return;
    }


    const itemName =
        typeof item === "string"
            ? item
            : item.name;


    currentCategory =
        categoryId;

    currentItem =
        itemName;


    const data =
        getItem(
            categoryId,
            item
        );


    modalStatus =
        data.status || "not";


    const overlay =
        getElement("overlay");

    const modalCategory =
        getElement("modalCategory");

    const modalTitle =
        getElement("modalTitle");


    if (modalCategory) {
        modalCategory.textContent =
            category.name;
    }

    if (modalTitle) {
        modalTitle.textContent =
            itemName;
    }


    populateResponsibleIndividualSelect(
        data.responsiblePerson || ""
    );


    setInputValue(
        "depositInput",
        data.deposit
    );

    setInputValue(
        "priceInput",
        data.price
    );

    setInputValue(
        "mobileInput",
        data.mobile
    );

    setInputValue(
        "emailInput",
        data.email
    );

    setInputValue(
        "contactPersonInput",
        data.contactPerson
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


    updateStatusButtons();

    updateItemVisibilityButton(
        data.enabled !== false
    );

    updateCustomDeleteVisibility(
        categoryId,
        itemName
    );


    if (overlay) {

        overlay.classList.add("open");

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   INPUT HELPERS
   ========================================================= */

function setInputValue(
    id,
    value
) {
    const element =
        getElement(id);

    if (element) {
        element.value =
            value ?? "";
    }
}


/* =========================================================
   ITEM MODAL CLOSE
   ========================================================= */

function closeModal() {
    const overlay =
        getElement("overlay");

    if (overlay) {
        overlay.classList.remove(
            "open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    currentItem = null;

    document.body.style.overflow =
        "";
}


/* =========================================================
   ITEM VISIBILITY
   ========================================================= */

function updateItemVisibilityButton(
    enabled
) {
    const button =
        getElement(
            "disableItemButton"
        );

    if (!button) {
        return;
    }

    button.textContent =
        enabled
            ? "Hide Item"
            : "Show Item";
}


function toggleCurrentItemVisibility() {
    if (
        !currentCategory ||
        currentCategory === "dashboard" ||
        currentCategory === "tagging" ||
        currentCategory === "budget" ||
        currentCategory === "hidden" ||
        !currentItem
    ) {
        return;
    }


    const data =
        getItem(
            currentCategory,
            currentItem
        );


    data.enabled =
        data.enabled === false;


    saveData();

    updateItemVisibilityButton(
        data.enabled
    );


    if (data.enabled) {
        showToast(
            "Item restored."
        );
    } else {
        showToast(
            "Item hidden."
        );
    }


    closeModal();


    if (currentCategory === "hidden") {
        renderHiddenItems();
    } else {
        renderCategory();
    }

    renderDashboard();
}


/* =========================================================
   CUSTOM ITEM DELETE
   ========================================================= */

function updateCustomDeleteVisibility(
    categoryId,
    itemName
) {
    const area =
        getElement(
            "customItemDeleteArea"
        );

    if (!area) {
        return;
    }

    const category =
        categories.find(
            item =>
                item.id === categoryId
        );

    if (!category) {
        area.classList.add("hidden");
        return;
    }

    const categoryItem =
        category.items.find(item => {

            const name =
                typeof item === "string"
                    ? item
                    : item.name;

            return name === itemName;
        });


    if (
        categoryItem &&
        typeof categoryItem === "object" &&
        categoryItem.custom
    ) {
        area.classList.remove(
            "hidden"
        );
    } else {
        area.classList.add(
            "hidden"
        );
    }
}


function deleteCurrentCustomItem() {
    if (
        !currentCategory ||
        currentCategory === "dashboard" ||
        currentCategory === "tagging" ||
        currentCategory === "budget" ||
        currentCategory === "hidden" ||
        !currentItem
    ) {
        return;
    }


    const category =
        categories.find(
            item =>
                item.id === currentCategory
        );

    if (!category) {
        return;
    }


    const item =
        category.items.find(
            current => {

                const name =
                    typeof current === "string"
                        ? current
                        : current.name;

                return name === currentItem;
            }
        );


    const isCustom =
        item &&
        typeof item === "object" &&
        item.custom;


    if (!isCustom) {
        showToast(
            "Default items cannot be deleted."
        );

        return;
    }


    const confirmed =
        window.confirm(
            `Delete "${currentItem}" permanently?`
        );

    if (!confirmed) {
        return;
    }


    const key =
        `${currentCategory}::${currentItem}`;


    delete savedData[key];


    category.items =
        category.items.filter(
            current => {

                const name =
                    typeof current === "string"
                        ? current
                        : current.name;

                return name !== currentItem;
            }
        );


    saveData();

    closeModal();

    renderCategory();

    renderDashboard();

    showToast(
        "Custom item deleted."
    );
}


/* =========================================================
   SAVE ITEM
   ========================================================= */

function saveItem() {
    if (
        !currentCategory ||
        currentCategory === "dashboard" ||
        currentCategory === "tagging" ||
        currentCategory === "budget" ||
        currentCategory === "hidden" ||
        !currentItem
    ) {
        return;
    }


    const data =
        getItem(
            currentCategory,
            currentItem
        );


    data.status =
        modalStatus;


    const responsibleInput =
        getElement(
            "responsiblePersonInput"
        );


    data.responsiblePerson =
        responsibleInput
            ? responsibleInput.value.trim()
            : "";


    data.deposit =
        getInputValue(
            "depositInput"
        );

    data.price =
        getInputValue(
            "priceInput"
        );

    data.mobile =
        getInputValue(
            "mobileInput"
        );

    data.email =
        getInputValue(
            "emailInput"
        );

    data.contactPerson =
        getInputValue(
            "contactPersonInput"
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


    saveData();

    const categoryBeforeClose =
        currentCategory;

    closeModal();


    if (
        categoryBeforeClose === "hidden"
    ) {
        renderHiddenItems();
    } else {
        renderCategory();
    }

    renderDashboard();

    showToast(
        "Item saved."
    );
}


function getInputValue(id) {
    const element =
        getElement(id);

    return element
        ? element.value.trim()
        : "";
}


/* =========================================================
   CLEAR ITEM
   ========================================================= */

function clearItem() {
    modalStatus = "not";

    updateStatusButtons();

    populateResponsibleIndividualSelect(
        ""
    );

    setInputValue(
        "depositInput",
        ""
    );

    setInputValue(
        "priceInput",
        ""
    );

    setInputValue(
        "mobileInput",
        ""
    );

    setInputValue(
        "emailInput",
        ""
    );

    setInputValue(
        "contactPersonInput",
        ""
    );

    setInputValue(
        "deadlineInput",
        ""
    );

    setInputValue(
        "linkInput",
        ""
    );

    setInputValue(
        "notesInput",
        ""
    );

    showToast(
        "Fields cleared."
    );
}


/* =========================================================
   HIDDEN ITEMS
   ========================================================= */

function showHiddenItems() {
    hideAllPages();

    const categoryPage =
        getElement("categoryPage");

    if (categoryPage) {
        categoryPage.classList.remove(
            "hidden"
        );
    }

    currentCategory = "hidden";
    currentItem = null;


    const categoryTitle =
        getElement("categoryTitle");

    const categoryPageHeading =
        getElement("categoryPageHeading");

    const addItemButton =
        getElement("addItemButton");

    const itemSearch =
        getElement("itemSearch");

    const itemStatusFilter =
        getElement("itemStatusFilter");


    if (categoryTitle) {
        categoryTitle.textContent =
            "Hidden Items";
    }

    if (categoryPageHeading) {
        categoryPageHeading.textContent =
            "Hidden Items";
    }

    if (addItemButton) {
        addItemButton.style.display =
            "none";
    }

    if (itemSearch) {
        itemSearch.value = "";
    }

    if (itemStatusFilter) {
        itemStatusFilter.value = "all";
    }


    renderHiddenItems();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function renderHiddenItems() {
    const itemsGrid =
        getElement("itemsGrid");

    const emptyMessage =
        getElement("emptyMessage");

    if (!itemsGrid) {
        return;
    }

    itemsGrid.innerHTML = "";


    const hiddenItems = [];


    categories.forEach(category => {

        category.items.forEach(item => {

            const itemName =
                typeof item === "string"
                    ? item
                    : item.name;

            const data =
                getItem(
                    category.id,
                    item
                );


            if (data.enabled === false) {

                hiddenItems.push({
                    category,
                    item,
                    itemName,
                    data
                });
            }
        });
    });


    if (hiddenItems.length === 0) {

        if (emptyMessage) {
            emptyMessage.style.display =
                "block";

            emptyMessage.innerHTML = `
                <div
                    class="empty-icon"
                    aria-hidden="true"
                >
                    👁️
                </div>

                <h3>
                    No hidden items
                </h3>

                <p>
                    Items that you hide will appear here.
                </p>
            `;
        }

        updateHiddenProgress();

        return;
    }


    if (emptyMessage) {
        emptyMessage.style.display =
            "none";
    }


    hiddenItems.forEach(
        ({
            category,
            item,
            itemName,
            data
        }) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "item-card hidden-item-card";


            const responsible =
                data.responsiblePerson
                    ? `
                        <div class="item-detail">
                            <span>
                                Responsible individual/group
                            </span>

                            <strong>
                                ${escapeHTML(
                                    data.responsiblePerson
                                )}
                            </strong>
                        </div>
                    `
                    : "";


            card.innerHTML = `
                <div class="item-card-header">

                    <span class="item-status status-not">
                        Hidden
                    </span>

                </div>

                <h3>
                    ${escapeHTML(itemName)}
                </h3>

                <p class="hidden-item-label">
                    ${escapeHTML(
                        category.icon
                    )}
                    ${escapeHTML(
                        category.name
                    )}
                </p>

                ${
                    responsible
                        ? `
                            <div class="item-details">
                                ${responsible}
                            </div>
                        `
                        : ""
                }

                <br>

                <button
                    type="button"
                    class="secondary-button enable-hidden-button"
                >
                    Show Item Again
                </button>
            `;


            const enableButton =
                card.querySelector(
                    ".enable-hidden-button"
                );


            enableButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    data.enabled = true;

                    saveData();

                    renderHiddenItems();

                    renderDashboard();

                    showToast(
                        `"${itemName}" is visible again.`
                    );
                }
            );


            card.addEventListener(
                "click",
                () =>
                    openModal(
                        category.id,
                        item
                    )
            );


            itemsGrid.appendChild(card);
        }
    );


    updateHiddenProgress();
}


function updateHiddenProgress() {
    const progressText =
        getElement(
            "categoryProgressText"
        );

    const categoryPercent =
        getElement(
            "categoryPercent"
        );

    const progressFill =
        getElement(
            "categoryProgressFill"
        );


    if (progressText) {
        progressText.textContent =
            "Hidden items";
    }

    if (categoryPercent) {
        categoryPercent.textContent =
            "";
    }

    if (progressFill) {
        progressFill.style.width =
            "0%";
    }
}

/* =========================================================
   BUDGET OVERVIEW
   ========================================================= */

function showBudgetOverview() {
    hideAllPages();

    const budgetPage =
        getElement("budgetPage");

    if (budgetPage) {
        budgetPage.classList.remove("hidden");
    }

    currentCategory = "budget";
    currentItem = null;

    renderBudgetOverview();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   BUDGET HELPERS
   ========================================================= */

function parseBudgetNumber(value) {
    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return 0;
    }

    const number =
        Number(
            String(value)
                .replace(",", ".")
                .trim()
        );

    return Number.isFinite(number)
        ? number
        : 0;
}


function formatBudgetCurrency(value) {
    return (
        new Intl.NumberFormat(
            "da-DK",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        ).format(value)
        + " kr."
    );
}


/* =========================================================
   GET ACTIVE BUDGET ITEMS
   ========================================================= */

function getBudgetItems() {
    const result = [];

    categories.forEach(category => {

        category.items.forEach(item => {

            const itemName =
                typeof item === "string"
                    ? item
                    : item.name;

            const data =
                getItem(
                    category.id,
                    item
                );


            /*
             * Hidden items are intentionally excluded
             * from the active Budget Overview.
             */
            if (data.enabled === false) {
                return;
            }


            const deposit =
                parseBudgetNumber(
                    data.deposit
                );

            const price =
                parseBudgetNumber(
                    data.price
                );


            /*
             * Only include items that actually
             * contain financial information.
             */
            if (
                deposit === 0 &&
                price === 0
            ) {
                return;
            }


            result.push({
                categoryId: category.id,
                categoryName: category.name,
                categoryIcon: category.icon,
                itemName,
                responsible:
                    data.responsiblePerson
                        ? data.responsiblePerson.trim()
                        : "",
                deposit,
                price,
                total:
                    deposit + price
            });
        });
    });

    return result;
}


/* =========================================================
   GROUP BUDGET ITEMS
   ========================================================= */

function groupBudgetItems(items) {
    const groups = new Map();


    items.forEach(item => {

        const responsible =
            item.responsible ||
            "Unassigned";


        if (!groups.has(responsible)) {

            groups.set(
                responsible,
                {
                    name: responsible,
                    items: [],
                    deposit: 0,
                    price: 0,
                    total: 0
                }
            );
        }


        const group =
            groups.get(responsible);


        group.items.push(item);

        group.deposit +=
            item.deposit;

        group.price +=
            item.price;

        group.total +=
            item.total;
    });


    /*
     * Put named responsible people/groups first
     * and Unassigned last.
     */
    return Array.from(
        groups.values()
    ).sort(
        (a, b) => {

            if (
                a.name === "Unassigned"
            ) {
                return 1;
            }

            if (
                b.name === "Unassigned"
            ) {
                return -1;
            }

            return a.name.localeCompare(
                b.name
            );
        }
    );
}


/* =========================================================
   RENDER BUDGET OVERVIEW
   ========================================================= */

function renderBudgetOverview() {
    const grid =
        getElement(
            "budgetResponsibleGrid"
        );

    const emptyMessage =
        getElement(
            "budgetEmptyMessage"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    const items =
        getBudgetItems();


    let totalDeposit = 0;
    let totalPrice = 0;


    items.forEach(item => {

        totalDeposit +=
            item.deposit;

        totalPrice +=
            item.price;
    });


    const grandTotal =
        totalDeposit +
        totalPrice;


    /* =====================================================
       OVERALL TOTALS
       ===================================================== */

    const totalDepositElement =
        getElement(
            "budgetTotalDeposit"
        );

    const totalPriceElement =
        getElement(
            "budgetTotalPrice"
        );

    const grandTotalElement =
        getElement(
            "budgetGrandTotal"
        );


    if (totalDepositElement) {
        totalDepositElement.textContent =
            formatBudgetCurrency(
                totalDeposit
            );
    }


    if (totalPriceElement) {
        totalPriceElement.textContent =
            formatBudgetCurrency(
                totalPrice
            );
    }


    if (grandTotalElement) {
        grandTotalElement.textContent =
            formatBudgetCurrency(
                grandTotal
            );
    }


    /* =====================================================
       EMPTY STATE
       ===================================================== */

    if (items.length === 0) {

        if (emptyMessage) {
            emptyMessage.style.display =
                "block";
        }

        return;
    }


    if (emptyMessage) {
        emptyMessage.style.display =
            "none";
    }


    /* =====================================================
       GROUP ITEMS
       ===================================================== */

    const groups =
        groupBudgetItems(items);


    groups.forEach(group => {

        const card =
            document.createElement("div");

        card.className =
            "budget-responsible-card";


        const isUnassigned =
            group.name === "Unassigned";


        const itemsHTML =
            group.items
                .map(item => {

                    return `
                        <div class="budget-item-row">

                            <div class="budget-item-info">

                                <span class="budget-item-category">
                                    ${escapeHTML(
                                        item.categoryIcon
                                    )}
                                    ${escapeHTML(
                                        item.categoryName
                                    )}
                                </span>

                                <strong class="budget-item-name">
                                    ${escapeHTML(
                                        item.itemName
                                    )}
                                </strong>

                            </div>


                            <div class="budget-item-money">

                                <div class="budget-money-column">

                                    <span>
                                        Depositum
                                    </span>

                                    <strong>
                                        ${formatBudgetCurrency(
                                            item.deposit
                                        )}
                                    </strong>

                                </div>


                                <div class="budget-money-column">

                                    <span>
                                        Price
                                    </span>

                                    <strong>
                                        ${formatBudgetCurrency(
                                            item.price
                                        )}
                                    </strong>

                                </div>


                                <div class="budget-money-column budget-item-total">

                                    <span>
                                        Total
                                    </span>

                                    <strong>
                                        ${formatBudgetCurrency(
                                            item.total
                                        )}
                                    </strong>

                                </div>

                            </div>

                        </div>
                    `;
                })
                .join("");


        card.innerHTML = `

            <div class="budget-responsible-header">

                <div>

                    <span class="budget-responsible-icon">
                        ${
                            isUnassigned
                                ? "❓"
                                : "👤"
                        }
                    </span>

                    <div class="budget-responsible-title">

                        <span>
                            ${
                                isUnassigned
                                    ? "Items without assignment"
                                    : "Responsible individual/group"
                            }
                        </span>

                        <h3>
                            ${escapeHTML(
                                group.name
                            )}
                        </h3>

                    </div>

                </div>


                <div class="budget-responsible-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        ${formatBudgetCurrency(
                            group.total
                        )}
                    </strong>

                </div>

            </div>


            <div class="budget-items-list">

                <div class="budget-table-header">

                    <span>
                        Item
                    </span>

                    <span>
                        Depositum
                    </span>

                    <span>
                        Price
                    </span>

                    <span>
                        Total
                    </span>

                </div>

                ${itemsHTML}

            </div>


            <div class="budget-responsible-footer">

                <div>

                    <span>
                        Depositum
                    </span>

                    <strong>
                        ${formatBudgetCurrency(
                            group.deposit
                        )}
                    </strong>

                </div>


                <div>

                    <span>
                        Price
                    </span>

                    <strong>
                        ${formatBudgetCurrency(
                            group.price
                        )}
                    </strong>

                </div>


                <div>

                    <span>
                        Total
                    </span>

                    <strong>
                        ${formatBudgetCurrency(
                            group.total
                        )}
                    </strong>

                </div>

            </div>
        `;


        grid.appendChild(card);
    });
}

/* =========================================================
   CATEGORY PROGRESS
   ========================================================= */

function updateCategoryProgress(
    category
) {
    let total = 0;
    let completed = 0;


    category.items.forEach(item => {

        const data =
            getItem(
                category.id,
                item
            );

        if (data.enabled === false) {
            return;
        }

        total++;

        if (data.status === "done") {
            completed++;
        }
    });


    const percent =
        total > 0
            ? Math.round(
                (completed /
                    total) *
                100
            )
            : 0;


    const progressText =
        getElement(
            "categoryProgressText"
        );

    const categoryPercent =
        getElement(
            "categoryPercent"
        );

    const progressFill =
        getElement(
            "categoryProgressFill"
        );


    if (progressText) {
        progressText.textContent =
            `${completed} of ${total} completed`;
    }

    if (categoryPercent) {
        categoryPercent.textContent =
            `${percent}%`;
    }

    if (progressFill) {
        progressFill.style.width =
            `${percent}%`;
    }
}


/* =========================================================
   MANAGEMENT MODAL
   ========================================================= */

function openManagementModal(
    mode
) {
    managementMode = mode;

    const overlay =
        getElement(
            "managementOverlay"
        );

    const title =
        getElement(
            "managementTitle"
        );

    const categoryLabel =
        getElement(
            "managementCategory"
        );

    const nameInput =
        getElement(
            "managementNameInput"
        );

    const iconGroup =
        getElement(
            "iconGroup"
        );

    const iconInput =
        getElement(
            "managementIconInput"
        );

    const help =
        getElement(
            "managementHelp"
        );


    if (mode === "category") {

        if (categoryLabel) {
            categoryLabel.textContent =
                "Management";
        }

        if (title) {
            title.textContent =
                "Add Category";
        }

        if (nameInput) {
            nameInput.placeholder =
                "Enter category name";
        }

        if (iconGroup) {
            iconGroup.style.display =
                "";
        }

        if (help) {
            help.textContent =
                "Add a new category to your wedding planner.";
        }

    } else {

        if (categoryLabel) {
            categoryLabel.textContent =
                "Management";
        }

        if (title) {
            title.textContent =
                "Add Item";
        }

        if (nameInput) {
            nameInput.placeholder =
                "Enter item name";
        }

        if (iconGroup) {
            iconGroup.style.display =
                "none";
        }

        if (help) {
            help.textContent =
                "Add a custom item to the current category.";
        }
    }


    if (nameInput) {
        nameInput.value = "";
    }

    if (iconInput) {
        iconInput.value = "";
    }


    if (overlay) {
        overlay.classList.add("open");

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    document.body.style.overflow =
        "hidden";


    setTimeout(() => {

        if (nameInput) {
            nameInput.focus();
        }

    }, 100);
}


function closeManagementModal() {
    const overlay =
        getElement(
            "managementOverlay"
        );

    if (overlay) {
        overlay.classList.remove(
            "open"
        );

        overlay.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    document.body.style.overflow =
        "";
}


/* =========================================================
   SAVE MANAGEMENT
   ========================================================= */

function saveManagement() {
    const nameInput =
        getElement(
            "managementNameInput"
        );

    const iconInput =
        getElement(
            "managementIconInput"
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
        showToast(
            "Please enter a name."
        );

        if (nameInput) {
            nameInput.focus();
        }

        return;
    }


    if (managementMode === "category") {

        const duplicate =
            categories.some(
                category =>
                    category.name
                        .toLowerCase() ===
                    name.toLowerCase()
            );


        if (duplicate) {
            showToast(
                "This category already exists."
            );

            return;
        }


        categories.push({
            id: createId("category"),
            name,
            icon: icon || "📋",
            items: []
        });


        saveData();

        buildNavigation();

        closeManagementModal();

        renderDashboard();

        showToast(
            "Category added."
        );

        return;
    }


    if (
        currentCategory === "dashboard" ||
        currentCategory === "tagging" ||
        currentCategory === "budget" ||
        currentCategory === "hidden"
    ) {
        showToast(
            "Please open a category first."
        );

        return;
    }


    const category =
        categories.find(
            item =>
                item.id === currentCategory
        );


    if (!category) {
        return;
    }


    const duplicate =
        category.items.some(item => {

            const itemName =
                typeof item === "string"
                    ? item
                    : item.name;

            return (
                itemName.toLowerCase() ===
                name.toLowerCase()
            );
        });


    if (duplicate) {
        showToast(
            "This item already exists."
        );

        return;
    }


    category.items.push({
        name,
        custom: true
    });


    saveData();

    closeManagementModal();

    renderCategory();

    renderDashboard();

    showToast(
        "Item added."
    );
}


/* =========================================================
   ADD ITEM TO CURRENT CATEGORY
   ========================================================= */

function addItemToCurrentCategory() {
    if (
        !currentCategory ||
        currentCategory === "dashboard" ||
        currentCategory === "tagging" ||
        currentCategory === "budget" ||
        currentCategory === "hidden"
    ) {
        return;
    }

    openManagementModal("item");
}


/* =========================================================
   EXPORT
   ========================================================= */

function exportData() {
    const data = {
        version: 8,
        exportedAt:
            new Date().toISOString(),
        categories,
        savedData,
        responsibleIndividualsGroups:
            normaliseResponsibleIndividualsGroups(
                responsibleIndividualsGroups
            )
    };


    const blob =
        new Blob(
            [
                JSON.stringify(
                    data,
                    null,
                    2
                )
            ],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "tamil-wedding-planner.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);


    showToast(
        "Planner exported."
    );
}


/* =========================================================
   IMPORT
   ========================================================= */

function importData(file) {
    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload = event => {

        try {

            const parsed =
                JSON.parse(
                    event.target.result
                );


            if (
                !parsed ||
                !Array.isArray(
                    parsed.categories
                )
            ) {
                throw new Error(
                    "Invalid planner file."
                );
            }


            categories =
                normaliseCategories(
                    parsed.categories
                );


            savedData =
                parsed.savedData &&
                typeof parsed.savedData === "object"
                    ? parsed.savedData
                    : {};


            responsibleIndividualsGroups =
                normaliseResponsibleIndividualsGroups(
                    parsed.responsibleIndividualsGroups
                );


            migrateSavedData();

            saveData();

            buildNavigation();

            showDashboard();

            showToast(
                "Planner imported successfully."
            );

        } catch (error) {

            console.error(
                "Import failed:",
                error
            );

            showToast(
                "Import failed. Please select a valid planner file."
            );
        }
    };


    reader.readAsText(file);
}


/* =========================================================
   RESET
   ========================================================= */

function resetPlanner() {
    const confirmed =
        window.confirm(
            "Reset the entire wedding planner?\n\nThis will delete all saved progress, custom categories, custom items and Tagging entries."
        );


    if (!confirmed) {
        return;
    }


    categories =
        cloneDefaults();

    savedData = {};

    responsibleIndividualsGroups = [];


    localStorage.removeItem(
        STORAGE_KEY
    );


    saveData();

    buildNavigation();

    showDashboard();

    populateResponsibleIndividualSelect();


    showToast(
        "Planner has been reset."
    );
}


/* =========================================================
   EVENT SETUP
   ========================================================= */

function setupEvents() {

    /* Dashboard */
    const addCategoryButton =
        getElement(
            "addCategoryButton"
        );

    if (addCategoryButton) {
        addCategoryButton.addEventListener(
            "click",
            () =>
                openManagementModal(
                    "category"
                )
        );
    }


    const exportButton =
        getElement(
            "exportButton"
        );

    if (exportButton) {
        exportButton.addEventListener(
            "click",
            exportData
        );
    }


    const importButton =
        getElement(
            "importButton"
        );

    const importFileInput =
        getElement(
            "importFileInput"
        );


    if (
        importButton &&
        importFileInput
    ) {

        importButton.addEventListener(
            "click",
            () =>
                importFileInput.click()
        );


        importFileInput.addEventListener(
            "change",
            event => {

                const file =
                    event.target.files[0];

                if (file) {
                    importData(file);
                }

                event.target.value = "";
            }
        );
    }


    const resetButton =
        getElement(
            "resetButton"
        );

    if (resetButton) {
        resetButton.addEventListener(
            "click",
            resetPlanner
        );
    }


    /* Tagging */
    const addTaggingButton =
        getElement(
            "addTaggingButton"
        );

    if (addTaggingButton) {
        addTaggingButton.addEventListener(
            "click",
            addResponsibleIndividualGroup
        );
    }


    const taggingInput =
        getElement(
            "taggingInput"
        );

    if (taggingInput) {

        taggingInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    addResponsibleIndividualGroup();
                }
            }
        );
    }


    /* Category page */
    const backButton =
        getElement(
            "backToDashboardButton"
        );

    if (backButton) {
        backButton.addEventListener(
            "click",
            showDashboard
        );
    }


    const addItemButton =
        getElement(
            "addItemButton"
        );

    if (addItemButton) {
        addItemButton.addEventListener(
            "click",
            addItemToCurrentCategory
        );
    }


    const itemSearch =
        getElement(
            "itemSearch"
        );

    if (itemSearch) {
        itemSearch.addEventListener(
            "input",
            () => {

                if (
                    currentCategory ===
                    "hidden"
                ) {
                    renderHiddenItems();
                } else if (
                    currentCategory !==
                    "dashboard" &&
                    currentCategory !==
                    "tagging"
                ) {
                    renderCategory();
                }
            }
        );
    }


    const itemStatusFilter =
        getElement(
            "itemStatusFilter"
        );

    if (itemStatusFilter) {
        itemStatusFilter.addEventListener(
            "change",
            () => {

                if (
                    currentCategory !==
                    "dashboard" &&
                    currentCategory !==
                    "tagging" &&
                    currentCategory !==
                    "hidden"
                ) {
                    renderCategory();
                }
            }
        );
    }


    /* Item modal */
    const notButton =
        getElement("notButton");

    const progressButton =
        getElement("progressButton");

    const doneButton =
        getElement("doneButton");


    if (notButton) {
        notButton.addEventListener(
            "click",
            () => {

                modalStatus = "not";

                updateStatusButtons();
            }
        );
    }


    if (progressButton) {
        progressButton.addEventListener(
            "click",
            () => {

                modalStatus = "progress";

                updateStatusButtons();
            }
        );
    }


    if (doneButton) {
        doneButton.addEventListener(
            "click",
            () => {

                modalStatus = "done";

                updateStatusButtons();
            }
        );
    }


    const closeModalButton =
        getElement(
            "closeModalButton"
        );

    const closeModalButtonTop =
        getElement(
            "closeModalButtonTop"
        );


    if (closeModalButton) {
        closeModalButton.addEventListener(
            "click",
            closeModal
        );
    }


    if (closeModalButtonTop) {
        closeModalButtonTop.addEventListener(
            "click",
            closeModal
        );
    }


    const clearButton =
        getElement(
            "clearButton"
        );

    if (clearButton) {
        clearButton.addEventListener(
            "click",
            clearItem
        );
    }


    const saveButton =
        getElement(
            "saveButton"
        );

    if (saveButton) {
        saveButton.addEventListener(
            "click",
            saveItem
        );
    }


    const disableItemButton =
        getElement(
            "disableItemButton"
        );

    if (disableItemButton) {
        disableItemButton.addEventListener(
            "click",
            toggleCurrentItemVisibility
        );
    }


    const deleteCustomItemButton =
        getElement(
            "deleteCustomItemButton"
        );

    if (deleteCustomItemButton) {
        deleteCustomItemButton.addEventListener(
            "click",
            deleteCurrentCustomItem
        );
    }


    /*
     * Important:
     * There is deliberately NO backdrop click
     * handler. Clicking outside the modal will
     * therefore not close it.
     */


    /* Management modal */
    const managementCloseButton =
        getElement(
            "managementCloseButton"
        );

    const managementCancelButton =
        getElement(
            "managementCancelButton"
        );


    if (managementCloseButton) {
        managementCloseButton.addEventListener(
            "click",
            closeManagementModal
        );
    }


    if (managementCancelButton) {
        managementCancelButton.addEventListener(
            "click",
            closeManagementModal
        );
    }


    const managementSaveButton =
        getElement(
            "managementSaveButton"
        );

    if (managementSaveButton) {
        managementSaveButton.addEventListener(
            "click",
            saveManagement
        );
    }


    const managementNameInput =
        getElement(
            "managementNameInput"
        );

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


    /* Escape closes modals */
    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            const overlay =
                getElement("overlay");

            const managementOverlay =
                getElement(
                    "managementOverlay"
                );


            if (
                overlay &&
                overlay.classList.contains(
                    "open"
                )
            ) {
                closeModal();

                return;
            }


            if (
                managementOverlay &&
                managementOverlay.classList.contains(
                    "open"
                )
            ) {
                closeManagementModal();
            }
        }
    );
}


/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadData();

        setupEvents();

        buildNavigation();

        populateResponsibleIndividualSelect();

        showDashboard();

        toggleCurrentItemVisibility()
        
        deleteCurrentCustomItem()
        
        saveItem()
        
        saveManagement()
        
        addItemToCurrentCategory()
    }
);
