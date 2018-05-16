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

// Find menu items
let menuItems = document.getElementsByClassName('header-menu-item');
let activeMenuItem = null;
let mobileMenuButton = document.getElementsByClassName('mobile-menu')[0];
let mobileMenuDropDown = document.getElementsByClassName('mobile-menu-dropdown')[0];

// Add mobile menu functionality
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Select active menu item
for(let item of menuItems) {
    let itemhref = item.getElementsByTagName('A')[0].href;
    if(itemhref === window.location.href || itemhref === window.location.href + '#') {
        selectMenuItem(item);
        activeMenuItem = item;
    }
}

// Set all menu item hover animations
for(let item of menuItems) {
    item.onmouseover = () => {
        selectMenuItem(item);
    };
    item.onmouseout = () => {
        unselectMenuItem(item);
    };
}