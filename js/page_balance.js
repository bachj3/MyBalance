document.getElementById('balance_image').addEventListener('click', diffImage, false);

// Bei einem Klick auf das Bild, wird das Bild geändert und die Slider entsprechend angepasst
function diffImage() {
    var img = document.getElementById("balance_image");

    // Überprüfung, welches Bild angezeigt wird
    if (img.src.match(/unbalanced/)) {
        // Ändern des Quellpfades für das Bild
        img.src = "img/icn/balanced.png";

        // Slider wird initialisiert
        $('.slider').slider();

        $('#slider_food').slider('enable');
        // Value des Sliders wird auf 5 gesetzt
        $('#slider_food').val("5");
        // Der Slider wird refreshed um den neuen Wert anzuzeigen
        $('#slider_food').slider('disable');
        $('#slider_food').slider('refresh');

        $('#slider_activity').slider('enable');
        $('#slider_activity').val("5");
        $('#slider_activity').slider('disable');
        $('#slider_activity').slider('refresh');

        $('#slider_relaxation').slider('enable');
        $('#slider_relaxation').val("5");
        $('#slider_relaxation').slider('disable');

        $('#slider_relaxation').slider('refresh');

    } else {

        // Ändern des Quellpfades für das Bild
        img.src = "img/icn/unbalanced.png";
        // Slider wird initialisiert
        $('.slider').slider();

        $('#slider_food').slider('enable');
        // Value des Sliders wird auf 6 gesetzt
        $('#slider_food').val("6");
        // Der Slider wird refreshed um den neuen Wert anzuzeigen
        $('#slider_food').slider('disable');
        $('#slider_food').slider('refresh');

        $('#slider_activity').slider('enable');
        $('#slider_activity').val("7");
        $('#slider_activity').slider('disable');
        $('#slider_activity').slider('refresh');

        $('#slider_relaxation').slider('enable');
        $('#slider_relaxation').val("7");
        $('#slider_relaxation').slider('disable');

        $('#slider_relaxation').slider('refresh');
    }
}