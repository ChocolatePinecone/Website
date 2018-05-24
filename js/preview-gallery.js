/*
* Preview gallery
 */

// Functions
let setSquareHeight = () => {
    for(let item of galleryItems) {
        // Only make tile square if it is not horizontally expanded
        if(item.classList.contains('tile-expanded') === false) {
            item.style.height = getComputedStyle(item).getPropertyValue('width');
        }
    }
};

let miniaturizeSiblings = (skipMe) => {
    for(let item of galleryItems) {
        if(item !== skipMe) {
            item.classList.add('tile-miniaturized');
        }
    }
};

let normalizeSiblings = (skipMe) => {
    for(let item of galleryItems) {
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

// Configure gallery elements
let galleryWidths = [];
let galleryGifsLoaded = [];
let galleryGifImages = [];

for(let item of galleryItems) {
    // Calculate and save percentage width of gallery img
    galleryWidths.push('' + (Math.round(item.offsetWidth / item.parentElement.offsetWidth * 100)) + '%');
    let index = galleryWidths.length - 1;

    // Configure gif loading registration
    galleryGifsLoaded.push(false);
    galleryGifImages.push(new Image());
    galleryGifImages[index].src = item.getElementsByClassName('gif')[0].src;
    galleryGifImages[index].onload = () => {
        galleryGifsLoaded[index] = true;
    };

    // Set transition for smooth animation
    item.style.transition = 'width var(--transition-medium)';

    // Add hover resizing animation (only works when gif is loaded)
    item.addEventListener('mouseenter', () => {
        if(galleryGifsLoaded[index] === true) {
            expandGallery(item);
        }
    });

    item.addEventListener('mouseleave', () => {
        if(galleryGifsLoaded[index] === true) {
            normalizeGallery(item, galleryWidths[index]);
        }
    });

    item.addEventListener('click', () => {
        if(galleryGifsLoaded[index] === true) {
            normalizeGallery(item, galleryWidths[index]);
        }
    });

    item.addEventListener('touchmove', () => {
        if(galleryGifsLoaded[index] === true) {
            normalizeGallery(item, galleryWidths[index]);
        }
    });
}

// Make all gallery items square
setSquareHeight();

// Chain height calculation to window resizing
window.onresize = setSquareHeight;