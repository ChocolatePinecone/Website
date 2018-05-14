// Internet Explorer 6-11
let isIE = !!document.documentMode;

if(isIE === true) {
    window.location.href = 'browser-unsupported.html';
}