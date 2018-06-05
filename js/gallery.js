/*
* Gallery
*
* This gallery supports multiple images.
* It will show all images one by one with fading transitions.
 */

// Functions
let calibrateGalleryHeight = () => {
    // Find highest gallery item and set gallery height\
    let height = 0;
    for(item of galleryItems) {
        height = (item.querySelector('img').height > height) ? item.querySelector('img').height : height;
    }
    gallery.style.height = '' + height + 'px';
};

let setGalleryHeightToGif = () => {
    // Find height of gif and set gallery height\
    let height = gif.querySelector('img').height;
    gallery.style.height = '' + height + 'px';
};

let imageNr = 0;
let fadeToNext = () => {
    window.setInterval(() => {
        // Save currently active item nr
        let imageNrToDeactivate = imageNr;

        // Increase imageNr by 1, reset to 0 at end of gallery items
        imageNr = (imageNr + 1) % galleryItems.length;

        // Deactivate currently active item
        galleryItems[imageNrToDeactivate].classList.remove('active');

        // Activate next item
        galleryItems[imageNr].classList.add('active');
    }, 3000);
};

let fadeTextInOut = () => {
    window.setInterval(() => {
        // Fade text in and out
        if(text.classList.contains('active')) {
            text.classList.remove('active');
        }
        else {
            text.classList.add('active');
        }
        galleryItems[imageNr].classList.add('active');
    }, 1000);
};

let toggleGif = () => {
    if(gif.classList.contains('show') === false) {
        setGalleryHeightToGif();
        gif.classList.add('show');
    }
    else {
        calibrateGalleryHeight();
        gif.classList.remove('show');
    }
};

// Find gallery items
let gallery = document.getElementsByClassName('gallery')[0];
let text = gallery.getElementsByClassName('text')[0];
let gif = gallery.getElementsByClassName('hover')[0];
let galleryItems = gallery.getElementsByClassName('item');

// Set up first gallery item
galleryItems[0].classList.add('active');

// Start fading animation cycle
window.onload = () => {
    calibrateGalleryHeight();
    fadeToNext();

    if(text !== undefined) {
        fadeTextInOut();

        gallery.addEventListener('click', toggleGif);
    }
};

window.onresize = () => {
    calibrateGalleryHeight();
};