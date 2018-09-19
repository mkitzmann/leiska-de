

var classname = document.getElementsByClassName("gallery-next");
var classname2 = document.getElementsByClassName("gallery-prev");


var callback = function() {
    var fadeImage = document.getElementById("fadeout");
    event.preventDefault();
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
