/*
* Preview gallery
 */

// Functions
let setSquareHeight = () => {
    for(let i = 0; i < galleryItems.length; i++) {
        let item = galleryItems[i];
        item.style.height = getComputedStyle(item).getPropertyValue('width');
    }
};

let miniaturizeSiblings = (skipMe) => {
    for(let i = 0; i < galleryItems.length; i++) {
        let item = galleryItems[i];
        if(item !== skipMe) {
            item.classList.add('tile-miniaturized');
        }
    }
};

let normalizeSiblings = (skipMe) => {
    for(let i = 0; i < galleryItems.length; i++) {
        let item = galleryItems[i];
        if(item !== skipMe) {
            item.classList.remove('tile-miniaturized');
        }
    }
};

let expandGallery = (item) => {
    let gif = item.getElementsByClassName('gif')[0];
    miniaturizeSiblings(item);
    item.style.width = getComputedStyle(gif).getPropertyValue('width');
    item.classList.add('tile-expanded');
};

let normalizeGallery = (item, width) => {
    normalizeSiblings(item);
    item.classList.remove('tile-expanded');
    item.style.width = width;
};

// Find gallery items
let galleryItems = document.getElementsByClassName('preview-gallery');

// Make all gallery items square
setSquareHeight();

// Chain height calculation to window resizing
window.onresize = setSquareHeight;

// Configure gallery elements
let galleryWidths = [];

for(let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    // Save width of gallery img
    galleryWidths.push(getComputedStyle(item).getPropertyValue('width'));
    let index = galleryWidths.length - 1;

    // Set transition for smooth animation
    item.style.transition = 'width var(--transition-medium)';

    // Add hover resizing animation
    item.addEventListener('mouseenter', () => {
        expandGallery(item);
    });

    item.addEventListener('mouseleave', () => {
        normalizeGallery(item, galleryWidths[index]);
    });

    item.addEventListener('click', () => {
        normalizeGallery(item, galleryWidths[index]);
    });

    item.addEventListener('touchmove', () => {
        normalizeGallery(item, galleryWidths[index]);
    });
}