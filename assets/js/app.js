

var classname = document.getElementsByClassName("gallery-next");
var classname2 = document.getElementsByClassName("gallery-prev");


var callback = function() {
    var fadeImage = document.getElementById("fadeout");
    event.preventDefault();
    fadeImage.classList.add('fadeout');
    var newLocation = this.href;
    setTimeout(function(){window.location.assign(newLocation)}, 500);    
};

function fadeOutEffect(target) {
}

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', callback, false);
}

for (var i = 0; i < classname2.length; i++) {
    classname2[i].addEventListener('click', callback, false);
}
