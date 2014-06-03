var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("onDeviceReady");
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {

    var img_selfie = document.getElementById('e_ref');
    img_selfie.style.display = 'block';
    img_selfie.src = "data:image/jpeg;base64," + imageData;
}


function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess");
    var img_selfie = document.getElementById('e_ref');

    img_selfie.style.display = 'block';
    img_selfie.src = imageURI;
}

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality : 50
    });
}

function getPhoto(source) {
    console.log("getPhoto");
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



