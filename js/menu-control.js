/*
* Menu Control
 */

// Animation functions

let selectMenuItem = (item) => {
    if(item !== activeMenuItem) {
        item.classList.add('selected');
        item.getElementsByClassName('header-menu-item-selection-box')[0].classList.add('selected');
    }
};

let unselectMenuItem = (item) => {
    if(item !== activeMenuItem) {
        item.classList.remove('selected');
        item.getElementsByClassName('header-menu-item-selection-box')[0].classList.remove('selected');
    }
};

let toggleMobileMenu = () => {
    if(mobileMenuDropDown.classList.contains('show')) {
        // Hide dropdown
        mobileMenuDropDown.classList.remove('show');

        //Animate burger
        mobileMenuButton.getElementsByClassName('burger-container')[0].classList.remove('active');

        // Enable page scrolling
        document.body.classList.remove('block-scrolling');
    }
    else {
        // Show dropdown
        mobileMenuDropDown.classList.add('show');

        //Animate burger
        mobileMenuButton.getElementsByClassName('burger-container')[0].classList.add('active');

        // Block page scrolling
        document.body.classList.add('block-scrolling');
    }
};

let selectMobileMenuItem = (item) => {
    item.classList.add('selected');
};

// Find menu items
let menuItems = document.getElementsByClassName('header-menu-item');
let activeMenuItem = null;
let mobileMenuButton = document.getElementsByClassName('mobile-menu')[0];
let mobileMenuDropDown = document.getElementsByClassName('mobile-menu-dropdown')[0];
let mobileMenuItems = document.getElementsByClassName('mobile-menu-dropdown-content')[0].getElementsByTagName('A');

// Add mobile menu functionality
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Configure menu items
let exactMatch = null;
let includeMatch = null;
for(let item of menuItems) {
    // Get item href
    let itemhref = item.getElementsByTagName('A')[0].href;

    // Select menu item if href is exactly the same as current URL
    if(itemhref === window.location.href) {
        exactMatch = item;
    }
    // Select menu item if href is partially the same as current URL (This is the case when sub-items are selected)
    else if(window.location.href.includes(itemhref)) {
        includeMatch = item;
    }

    // Set menu item hover animation
    item.onmouseover = () => {
        selectMenuItem(item);
    };
    item.onmouseout = () => {
        unselectMenuItem(item);
    };
}

// Visualize menu item selection
let menuItemToSet = (exactMatch !== null) ? exactMatch : includeMatch;
selectMenuItem(menuItemToSet);
activeMenuItem = menuItemToSet;

// Select current mobile menu item
exactMatch = null;
includeMatch = null;
for(let item of mobileMenuItems) {
    // Get item href
    let itemhref = item.href;

    // Select menu item if href is exactly the same as current URL
    if(itemhref === window.location.href) {
        exactMatch = item;
    }
    // Select menu item if href is partially the same as current URL (This is the case when sub-items are selected)
    else if(window.location.href.includes(itemhref)) {
        includeMatch = item;
    }
}

// Visualize mobile menu item selection
menuItemToSet = (exactMatch !== null) ? exactMatch : includeMatch;
selectMobileMenuItem(menuItemToSet);