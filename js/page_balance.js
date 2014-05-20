document.getElementById('balance_image').addEventListener('click', diffImage, false);
function diffImage() {
    var img = document.getElementById("balance_image");
    if (img.src.match(/unbalanced/)) {
        console.log('balanced');
        img.src = "img/icn/balanced.png";
    } else {
        console.log('unbalanced');
        img.src = "img/icn/unbalanced.png";
    }
}