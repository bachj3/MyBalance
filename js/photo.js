alert("photo.js");

var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("onDeviceReady");
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

//
function onPhotoDataSuccess(imageData) {
    console.log("onPhotoDataSuccess");
    // console.log(imageData);
    // alert(imageData);

    var img_selfie = document.getElementById('e_ref');

    img_selfie.style.display = 'block';

    img_selfie.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess");
    // console.log(imageURI);
    // alert(imageURI);

    var img_selfie = document.getElementById('e_ref');

    img_selfie.style.display = 'block';

    // Zeigt das gemachte Foto an
    img_selfie.src = imageURI;
}

function capturePhoto() {
    console.log("capturePhoto");
    // Erstellt ein Foto als base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        destinationType : Camera.DestinationType.FILE_URI,
        quality : 50
    });
}

function capturePhotoEdit() {
    console.log("capturePhotoEdit");
    // Macht ein Foto und erlaubt es zu editieren
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        destinationType : Camera.DestinationType.FILE_URI,
        quality : 20,
        allowEdit : true
    });
}

function getPhoto(source) {
    console.log("getPhoto");
    // Holt Foto vom entsprechenden Pfad
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        sourceType : source
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
    conole.log('Failed because: ' + message);
}
