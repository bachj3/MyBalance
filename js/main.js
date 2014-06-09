document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    FastClick.attach(document.body);
    // $.mobile.fixedToolbars.show();
}