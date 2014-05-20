console.log("load script program_list");

var db = null;
var results = 0;
var category = null;

$(document).on('pagebeforeshow', '#page_program_list', function(event, ui) {

    console.log("URL: " + document.location);

    // Übergabewert von page_physio
    var url = document.location;
    category = purl(url).param('category');
    // console.log("Category: " + category);
    if (category != undefined)
        category = decodeURIComponent(category);
    console.log("Category nach Decoding: " + category);

    db.transaction(getProgramList, errorCB, successCB);
});

document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
    // console.log("deviceready_program_list");

}, false);

function getProgramList(tx) {
    // console.log("SQL Category: " + category);
    tx.executeSql('SELECT DISTINCT idProgram, P_Name FROM Program  WHERE idCategory="' + category + '"', [], function(tx, results) {

        $('#program_list').html('');

        for (var i = 0; i < results.rows.length; i++) {

            // var idProgram = results.rows.item(i).idProgram;
            // console.log("idProgram: " + idProgram);

            $('#program_list').append('<li><a onclick="doThisOnClick(' + results.rows.item(i).idProgram + ')" id=idProg' + results.rows.item(i).idProgram + '"><h3>' + results.rows.item(i).P_Name + '</h3><p>05.05.2014</p></a></li>');

        }
        $('#program_list').listview('refresh');

    }, errorCB);
}

function doThisOnClick(IdProg) {
    console.log(IdProg);
    $.mobile.changePage("page_exercise_list.html", {
        data : {
            IdProg : encodeURIComponent(IdProg)
        }
    });

}

function errorCB(tx, err) {
    // alert(err);
    console.log(err);
}

function successCB() {
    // alert("ok list filler");
    console.log("successCB_program_list");
}
