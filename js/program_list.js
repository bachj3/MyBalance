console.log("load script program_list");

var db = null;
var results = 0;
var category = null;

// mit dem Anzeigen der Seite wird gewartet, bis alle Daten aus der Datenbank vorhanden sind
$(document).on('pagebeforeshow', '#page_program_list', function(event, ui) {

    // Auslesen der URL
    var url = document.location;
    // Auslesen des Parameters category
    category = purl(url).param('category');
    // Entschlüsseln des Parameters
    if (category != undefined)
        category = decodeURIComponent(category);

    // Programmliste aus der Datenbank abfragen und erstellen der Liste
    db.transaction(getProgramList, errorCB, successCB);
});

// öffnet die Datenbank Physio
document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);

}, false);

function getProgramList(tx) {
    // Auslesen der Programme (DISTINCT: Resultate nur einmal)
    tx.executeSql('SELECT DISTINCT idProgram, P_Name FROM Program  WHERE idCategory="' + category + '"', [], function(tx, results) {

        $('#program_list').html('');

        for (var i = 0; i < results.rows.length; i++) {

            // die Liste mit den Resultaten füllen
            $('#program_list').append('<li><a onclick="doThisOnClick(' + results.rows.item(i).idProgram + ')" id=idProg' + results.rows.item(i).idProgram + '"><h3>' + results.rows.item(i).P_Name + '</h3><p>05.05.2014</p></a></li>');

        }
        // Liste aktualisieren
        $('#program_list').listview('refresh');

    }, errorCB);
}

// onclick Funktion für Liste
function doThisOnClick(IdProg) {

    $.mobile.changePage("page_exercise_list.html", {
        data : {
            IdProg : encodeURIComponent(IdProg),
            category : encodeURIComponent(category)
        }
    });

}

function errorCB(tx, err) {
    console.log(err);
}

function successCB() {
    console.log("successCB_program_list");
}
