// click-EventListener für Kategorie Bewegung
document.getElementById("group_activity").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('1')
        }
    });
});

// click-EventListener für Kategorie Erholung
document.getElementById("group_relax").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('2')
        }
    });
});

// click-EventListener für Kategorie Therapie
document.getElementById("group_therapy").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent("3")
        }
    });
});

// click-EventListener für Kategorie eigene Programme
document.getElementById("group_selfie").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('4')
        }
    });
});

