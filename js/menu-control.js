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

// Find menu items
let menuItems = document.getElementsByClassName('header-menu-item');
let activeMenuItem = null;

// Select active menu item
for(let item of menuItems) {
    let itemhref = item.getElementsByTagName('A')[0].href;
    if(itemhref === window.location.href || itemhref === window.location.href + '#') {
        selectMenuItem(item);
        activeMenuItem = item;
    }
}

// Set all menu item hover animations
for(let item of menuItems)  {
    item.onmouseover = () => {
        selectMenuItem(item);
    };
    item.onmouseout = () => {
        unselectMenuItem(item);
    };
}