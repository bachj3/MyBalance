var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
    console.log("onDeviceReady");
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    console.log("onPhotoDataSuccess");
  // Uncomment to view the base64 encoded image data
  // console.log(imageData);
  alert(imageData);

  // Get image handle
  //
  var img_selfie = document.getElementById('img_selfie');

  // Unhide image elements
  //
  img_selfie.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  img_selfie.src = "data:image/jpeg;base64," + imageData;
  $(document).find('no_img').remove();
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    console.log("onPhotoURISuccess");
  // Uncomment to view the image file URI 
  // console.log(imageURI);
  alert(imageURI);

  // Get image handle
  //
  var img_selfie = document.getElementById('img_selfie');

  // Unhide image elements
  //
  img_selfie.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  img_selfie.src = imageURI;
  $(document).find('no_img').remove();
}

// A button will call this function
//
function capturePhoto() {
    console.log("capturePhoto");
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {destinationType: Camera.DestinationType.FILE_URI, quality: 50 });
}

// A button will call this function
//
function capturePhotoEdit() {
    console.log("capturePhotoEdit");
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { destinationType: Camera.DestinationType.FILE_URI,quality: 20, allowEdit: true }); 
}

// A button will call this function
//
function getPhoto(source) {
    console.log("getPhoto");
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: source });
}

// Called if something bad happens.
// 
function onFail(message) {
  alert('Failed because: ' + message);
}
