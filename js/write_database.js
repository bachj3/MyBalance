console.log("script write_database");
var db = null;

var IdCategory = ["3", "3", "3", "3", "1", "2", "4"];
var IdProgram = ["2", "2", "1", "1", "100", "200", "400"];
var P_Name = ["Fussprogramm", "Fussprogramm", "Kr&auml;ftigung Hand", "Kr&auml;ftigung Hand", "Bewegungsprogramm", "Entspannungsprogramm", "Eigenes Programm"];
var IdExercise = ["7", "8", "11", "12", "101", "201", "401"];
var E_Name = ["Dorsalflexion", "Eversion", "Hand Dorsalextension", "Hand Kneifkraft", "Schwimmen", "Lesen", "Meine &Uumlbung"];
var E_Description = [
"Setzen Sie Ihren gesunden Fuss auf den Fussr&uuml;cken Ihres verletzen Fusses und erzeugen Sie dabei eine entsprechende Spannung auf den Vorfuss.", 
"Ein doppeltes Deuserband kommt &uuml;ber beide Fussr&uuml;cken. Bewegen Sie Ihr verletztes Bein maximal nach aussen, so dass das Deuserband maximal gespannt wird. Dann wird nur die Ferse auf den Boden gestellt.", 
"Ellbogen 90&deg; gebeugt, nach aussen gedrehter Arm. In dieser Position liegt der Handr&uuml;cken auf der Waage. Mit der Hand kr&auml;ftig das Gewicht auf die Waage dr&uuml;cken. Die Spannung halten und die &Uuml;bung wiederholen.", 
"Kneten Sie den Therapieball.", 
"Schwimmen bietet eine ideale Kombination von Ausdauer, Muskelaufbau und Fettverbrennung.",
"Lesen Sie doch wieder einmal ein Buch",
"-"];
var S = ["2", "3", "2", "3", "-", "-", "-"];
var R = ["12", "8", "4", "20", "-", "-", "-"];
var W = ["-", "-", "1.5", "-", "-", "-", "-"];
var D = ["-", "-", "00:00:10", "00:00:15", "00:30:00", "00:30:00", "00:30:00"];
var Re = ["00:00:30", "00:00:30", "00:00:30", "00:00:10", "-", "00:15:00", "00:00:00"];
var Ref = ["Fuss_Dorsalflexion_Anspannungsuebung.png", "Fuss_Eversion_Sitz.png", "Hand_Hand_Dorsalextension.png", "Hand_Hand_Kneifkraft.png", "Schwimmen.png", "Lesen.png", "no_imgage.png" ];

// document.getElementById("refresh").addEventListener('click', function() {
    // db.transaction(deleteTable, errorCB, successCB);
    // db.transaction(writeExercises, errorCB, successCB);
    // // deleteDatabase("Physio.db");
    // alert("table filled");
// 
// });

document.addEventListener("deviceready", function() {
    db = window.openDatabase("Physio", "1.0", "physio", 2000000);
    console.log("deviceready_write_database");
    db.transaction(deleteTable, errorCB, successCB);
    db.transaction(writeExercises, errorCB, successCB);
    console.log("table filled");
}, false);


function deleteTable(tx) {
    tx.executeSql('DROP TABLE IF EXISTS Program');

}

function writeExercises(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Program(id unique, idCategory, idProgram, P_Name, idExercise, E_Name, E_Description, S, R, W, D, Re, Ref)');

    for (var i = 0; i < IdCategory.length; i++) {
        var index = i + 1;
        // console.log(index);
        tx.executeSql('INSERT INTO Program(id, idCategory, idProgram, P_Name, idExercise, E_Name, E_Description, S, R, W, D, Re, Ref) VALUES (' + index + ', "' + IdCategory[i] + '", ' + IdProgram[i] + ', "' + P_Name[i] + '", ' + IdExercise[i] + ', "' + E_Name[i] + '", "' + E_Description[i] + '", "' + S[i] + '", "' + R[i] + '", "' + W[i] + '", "' + D[i] + '", "' + Re[i] + '", "' + Ref[i] + '")');
    }
}

function errorCB(tx, err) {
    console.log(err);
    alert(err);
}

function successCB() {
    console.log("successCB_write_database");
}