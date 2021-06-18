function fadeIn (elem, delay) {
  setTimeout(function(){
    for (var i = 1; i <= 10; i++) {
      fadeInHelper(i, document.getElementById(elem));
    }
  }, delay);
}

function fadeInHelper(i, element) {
  setTimeout(function(){
    element.style.opacity = i/10.0;
  }, 80*i);
}
