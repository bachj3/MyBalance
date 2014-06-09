var db = null;
var results = 0;
var IdExe = null;

$(document).on('pagebeforeshow', '#page_exercise_detail_relax', function(event, ui) {
    // Übergabewert von page_exercise_list
    var url = document.location;
    IdExe = purl(url).param('IdExe');
    if (IdExe != undefined)
        IdExe = decodeURIComponent(IdExe);
    console.log("IdExe nach Decoding: " + IdExe);
    db.transaction(getExercises, errorCB, successCB);
});

// öffnet DB
document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
}, false);

// sucht alle Exercises mit der übergebenen ID und schreibt sie in die Detail-Elemente
function getExercises(tx) {
    tx.executeSql('SELECT * FROM Program WHERE idExercise=' + IdExe, [], function(tx, results) {
        for (var i = 0; i < results.rows.length; i++) {
            document.getElementById('e_ref').src = 'img/' + results.rows.item(i).Ref;
            document.getElementById('e_name').innerHTML = results.rows.item(i).E_Name;
            document.getElementById('e_description').innerHTML = results.rows.item(i).E_Description;
            document.getElementById('duration_value').value = results.rows.item(i).D;
            document.getElementById('rest_value').value = results.rows.item(i).Re;
        }
    }, errorCB);
}

// onFail
function errorCB(tx, err) {
    console.log(err);
}

// onSuccess
function successCB() {
    console.log("successCB_exercise_list");
}
