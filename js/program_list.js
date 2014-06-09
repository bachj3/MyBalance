var db = null;
var results = 0;
var category = null;

$(document).on('pagebeforeshow', '#page_program_list', function(event, ui) {

    // Übergabewert von page_physio
    var url = document.location;
    category = purl(url).param('category');
    if (category != undefined)
        category = decodeURIComponent(category);
    console.log("Category nach Decoding: " + category);
    db.transaction(getProgramList, errorCB, successCB);
});

// öffnet DB
document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
}, false);

// sucht alle Programme mit der übergebenen Kategorie-ID und schreibt sie in eine ListView
function getProgramList(tx) {
    tx.executeSql('SELECT DISTINCT idProgram, P_Name FROM Program  WHERE idCategory="' + category + '"', [], function(tx, results) {
        $('#program_list').html('');
        for (var i = 0; i < results.rows.length; i++) {
            $('#program_list').append('<li><a onclick="doThisOnClick(' + results.rows.item(i).idProgram + ')" id=idProg' + results.rows.item(i).idProgram + '"><h3>' + results.rows.item(i).P_Name + '</h3><p>05.05.2014</p></a></li>');
        }
        $('#program_list').listview('refresh');
    }, errorCB);
}

// click-Event
function doThisOnClick(IdProg) {
    console.log(IdProg);
    $.mobile.changePage("page_exercise_list.html", {
        data : {
            IdProg : encodeURIComponent(IdProg),
            category : encodeURIComponent(category)
        }
    });
}

// onFail
function errorCB(tx, err) {
    console.log(err);
}

// onSuccess
function successCB() {
    console.log("successCB_program_list");
}
