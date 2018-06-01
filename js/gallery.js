/*
* Gallery
*
* This gallery supports multiple images.
* It will show all images one by one with fading transitions.
 */

// Functions
let setGalleryHeight = () => {
    // Find highest gallery item and set gallery height\
    let height = 0;
    for(item of galleryItems) {
        height = (item.querySelector('img').height > height) ? item.querySelector('img').height : height;
    }
    console.log('height set to: ', height);
    gallery.style.height = '' + height + 'px';
};

let imageNr = 0;
let fade = () => {
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

// Find gallery items
let gallery = document.getElementsByClassName('gallery')[0];
let galleryItems = gallery.getElementsByClassName('item');

// Set up first gallery item
galleryItems[0].classList.add('active');

// Start fading animation cycle
window.onload = () => {
    setGalleryHeight();
    fade();
};

window.onresize = () => {
    setGalleryHeight();
};