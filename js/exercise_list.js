console.log("load script exercise_list");

var db = null;
var results = 0;
var IdProg = null;
var category = null;

$(document).on('pagebeforeshow', '#page_exercise_list', function(event, ui) {

    // Übergabewert von page_program_list
    var url = document.location;
    console.log(url);
    IdProg = purl(url).param('IdProg');
    if (IdProg != undefined)
        IdProg = decodeURIComponent(IdProg);

    category = purl(url).param('category');
    if (category != undefined)
        category = decodeURIComponent(category);
    console.log("category nach Decoding: " + category);

    db.transaction(getExerciseList, errorCB, successCB);
});

// öffnet die Datenbank Physio
document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
}, false);

function getExerciseList(tx) {
    console.log("IdProg: " + IdProg);
    tx.executeSql('SELECT Ref, idProgram, idExercise, E_Name, E_Description, S, R, W, D, Re FROM Program WHERE idProgram=' + IdProg, [], function(tx, results) {
        // WHERE idProgram="' + IdProg + '"

        $('#exercise_list').html('');
        for (var i = 0; i < results.rows.length; i++) {

            $('#exercise_list').append('<li><a onclick="doThisOnClick_ex(' + results.rows.item(i).idExercise + ')" id="idEx' + results.rows.item(i).idExercise + '"><img src="img/' + results.rows.item(i).Ref + '"><h3>' + results.rows.item(i).E_Name + '</h3></a></li>');

        }
        $('#exercise_list').listview('refresh');

    }, errorCB);
}

function doThisOnClick_ex(IdExe) {
    console.log("doThisOnClick_ex: " + IdExe);

    if (category == "1") {
        $.mobile.changePage("page_exercise_detail_activity.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    
    else if (category == "2") {
        $.mobile.changePage("page_exercise_detail_relax.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    
    else if (category == "3") {
        $.mobile.changePage("page_exercise_detail_therapy.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }
    
    else if (category == "4") {
        $.mobile.changePage("page_exercise_detail_selfie.html", {
            data : {
                IdExe : encodeURIComponent(IdExe)
            }
        });
    }

}

function errorCB(tx, err) {
    // alert(err);
    console.log(err);
}

function successCB() {
    // alert("ok list filler");
    console.log("successCB_exercise_list");
}