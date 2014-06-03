var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("onDeviceReady");
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess");
    var img_selfie = document.getElementById('e_ref');

    img_selfie.style.display = 'block';
    img_selfie.src = imageURI;
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
    conole.log('Failed because: ' + message);
}


function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    
 function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }