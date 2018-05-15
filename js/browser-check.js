/*
* Browser Check
 */

// Internet Explorer 6-11
let isIE = !!document.documentMode;

// If site is opened with Internet Explorer, change to "browser-unsupported" page
if(isIE === true) {
    window.location.href = 'https://chocolatepinecone.github.io/Website/browser-unsupported.html';
}