/*
* Gallery
 */

// Functions
let setSquareHeight = () => {
    for (let item of galleryItems) {
        item.style.height = getComputedStyle(item).getPropertyValue('width');
    }
};

let miniaturizeSiblings = (skipMe) => {
    for (let item of galleryItems) {
        if(item !== skipMe) {
            item.classList.add('tile-miniaturized');
        }
    }
};

let normalizeSiblings = (skipMe) => {
    for (let item of galleryItems) {
        if(item !== skipMe) {
            item.classList.remove('tile-miniaturized');
        }
    }
};

// Find gallery items
let galleryItems = document.getElementsByClassName('gallery');

// Make all gallery items square
setSquareHeight();

// Chain height calculation to window resizing
window.onresize = setSquareHeight;

// Add hover resizing of gallery
let lastWidth = 0;

for (let item of galleryItems) {
    item.onmouseover = () => {
        let gif = item.getElementsByClassName('gif')[0];
        lastWidth = getComputedStyle(item).getPropertyValue('width');
        miniaturizeSiblings(item);
        item.style.transition = 'width var(--transition-medium)';
        item.style.width = getComputedStyle(gif).getPropertyValue('width');
        item.classList.add('tile-expanded');
        console.log('in');
    };

    item.onmouseout = () => {
        console.log('out');
        normalizeSiblings(item);
        item.classList.remove('tile-expanded');
        item.style.width = lastWidth;
    }
}