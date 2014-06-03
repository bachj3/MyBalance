document.getElementById("group_activity").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('1')
        }
    });
});

document.getElementById("group_relax").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('2')
        }
    });
});

document.getElementById("group_therapy").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent("3")
        }
    });
});

document.getElementById("group_selfie").addEventListener('click', function() {
    $.mobile.changePage("page_program_list.html", {
        data : {
            category : encodeURIComponent('4')
        }
    });
});

