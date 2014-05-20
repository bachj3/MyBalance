var destinationType;
var bildBreite;

$(function() {
	$("#aufnahme").click(function() {
		navigator.camera.getPicture(onSuccess1, onFail, {
			quality : 50, destinationType : destinationType.DATA_URL
		});
	
	});
	$("#loeschen").click(function() {
		$('#bild').css({
			'display' : "none"
		});
		
		$("#meldung").html('Bildanzeige gel&ouml;scht');
	});
	$("#speichern").click(function() {
		navigator.camera.getPicture(onSuccess2, onFail, {
			quality : 50, destinationType : destinationType.FILE_URI,
			saveToPhotoAlbum : true,
			encodingType : navigator.camera.EncodingType.PNG
		});
		
	});
	document.addEventListener('deviceready', function() {
		destinationType = navigator.camera.DestinationType;
	}, false);
});

function onSuccess1(imageData) {
	bildBreite = (screen.width * 0.9) + "px";
	$('#bild').attr('src', "data:image/jpg;base64," + imageData);
	$('#bild').css({
		'display' : "block", 'width' : bildBreite, 'margin' : 'auto'
	});
	$("#meldung").html('Aufnahme erfolgreich');
}

function onSuccess2(imageData) {
	$("#meldung").html('Fehler bei der Aufnahme: ' + message);
	$('#bild').css({
		'display' : "none"
	});
}

function onFail(message){
    $("#meldung").html('Fehler bei der Aufnahme: ' + message);
    $('#bild').css({
        'display' : "none"
    });
    
}
