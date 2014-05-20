console.log("script exercise_detail");

var db = null;
var results = 0;
var IdEx = null;

$(document).on('pagebeforeshow', '#page_exercise_detail_therapy', function(event, ui) {

    // Übergabewert von page_exercies_list
    var url = document.location;
    IdEx = purl(url).param('IdEx');
    // console.log("idEx: " + IdEx);
    if (IdEx != undefined)
        IdEx = decodeURIComponent(IdEx);
    console.log("IdEx nach Decoding: " + IdEx); 

    db.transaction(getExercises, errorCB, successCB);
});

document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
    // alert("deviceready_read_database");
}, false);

function getExercises(tx) {

    tx.executeSql('SELECT * FROM Program', [], function(tx, results) {

        // for (var i = 0; i < results.rows.length; i++) {
        for (var i = 0; i < 1; i++) {
            // document.getElementById('e_ref').src = 'img/' + results.rows.item(i).Ref;
            // document.getElementById('e_name').innerHTML = results.rows.item(i).E_Name;
            // document.getElementById('e_description').innerHTML = results.rows.item(i).E_Description;
            // document.getElementById('set_value').value = results.rows.item(i).S;
            // document.getElementById('repetitions_value').value = results.rows.item(i).R;
            // document.getElementById('weight_value').value = results.rows.item(i).W;
            // document.getElementById('duration_value').value = results.rows.item(i).D;
            // document.getElementById('rest_value').value = results.rows.item(i).Re;
        }
    }, errorCB);
}

function errorCB(tx, err) {
    console.log(err);
    // alert(err);
}

function successCB() {
    // alert("ok");
    console.log("successCB_exercise_detail);
}

