var db = null;
var results = 0;
var IdProg = null;
var category = null;

$(document).on('pagebeforeshow', '#page_exercise_list', function(event, ui) {

    // Übergabewert von page_program_list
    var url = document.location;
    IdProg = purl(url).param('IdProg');
    if (IdProg != undefined)
        IdProg = decodeURIComponent(IdProg);
    console.log("IdProg nach Decoding: " + IdProg);

    category = purl(url).param('category');
    if (category != undefined)
        category = decodeURIComponent(category);
    console.log("category nach Decoding: " + category);

    db.transaction(getExerciseList, errorCB, successCB);
});

// öffnet DB
document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
}, false);

// sucht alle Übungen mit der übergebenen Programm-ID und schreibt sie in eine ListView
function getExerciseList(tx) {
    tx.executeSql('SELECT Ref, idProgram, idExercise, E_Name, E_Description FROM Program WHERE idProgram=' + IdProg, [], function(tx, results) {
        $('#exercise_list').html('');
        for (var i = 0; i < results.rows.length; i++) {
            $('#exercise_list').append('<li><a onclick="doThisOnClick_ex(' + results.rows.item(i).idExercise + ')" id="idEx' + results.rows.item(i).idExercise + '"><img src="img/' + results.rows.item(i).Ref + '"><h3>' + results.rows.item(i).E_Name + '</h3></a></li>');
        }
        $('#exercise_list').listview('refresh');
    }, errorCB);
}

// click-Event
function doThisOnClick_ex(IdExe) {
    console.log("doThisOnClick_ex: " + IdExe);
    // für Kategorie 1
    if (category == "1") {
        $.mobile.changePage("page_exercise_detail_activity.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    // für Kategorie 2
    else if (category == "2") {
        $.mobile.changePage("page_exercise_detail_relax.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    // für Kategorie 3
    else if (category == "3") {
        $.mobile.changePage("page_exercise_detail_therapy.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    // für Kategorie 4
    else if (category == "4") {
        $.mobile.changePage("page_exercise_detail_selfie.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
}

// onFail
function errorCB(tx, err) {
    console.log(err);
}

// onSuccess
function successCB() {
    console.log("successCB_exercise_list");
}