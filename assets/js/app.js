
var classname = document.getElementsByClassName("gallery-next");
var classname2 = document.getElementsByClassName("gallery-prev");


var callback = function() {
    event.preventDefault();
    var fadeImage = document.getElementById("fadeout");

    var spinner = document.getElementsByClassName('spinner');

    for (var i = 0; i < spinner.length; i++) {
        spinner[i].style.visibility = "hidden";
    }

    fadeImage.classList.add('fadeout');
    fadeImage.classList.remove('fadein');

    var newLocation = this.href;
    window.location.assign(newLocation);    
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', callback, false);
}

for (var i = 0; i < classname2.length; i++) {
    classname2[i].addEventListener('click', callback, false);
}
