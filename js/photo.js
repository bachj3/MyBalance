var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

// Quell- und Zieltype zuweisen
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

// neues Foto mit Kamera erstellen
function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality : 50
    });
}

// Foto vom übergebenen Pfad (Fotoalbum) auswählen
function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        sourceType : source
    });
}

// gemachtes Foto in Übung anzeigen
function onPhotoDataSuccess(imageData) {
    var img_selfie = document.getElementById('e_ref');
    img_selfie.style.display = 'block';
    img_selfie.src = "data:image/jpeg;base64, " + imageData;
}


// ausgewähltes Foto in Übung anzeigen
function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess");
    var img_selfie = document.getElementById('e_ref');

    img_selfie.style.display = 'block';
    img_selfie.src = imageURI;
}

// onFail
function onFail(message) {
    alert('Failed because: ' + message);
    conole.log('Failed because: ' + message);
}



