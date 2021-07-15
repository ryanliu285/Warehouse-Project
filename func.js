var count = 0;

function fadeIn (elem, delay) {
  setTimeout(function(){
    for (var i = 1; i <= 10; i++) {
      fadeInHelper(i, document.getElementById(elem));
    }
  }, delay);
}

function fadeInHelper (i, element) {
  setTimeout(function(){
    element.style.opacity = i/10.0;
  }, 80*i);
}

function fadeOut (elem, delay) {
  setTimeout(function(){
    for (var i = 10; i >= 0; i-=1) {
      fadeOutHelper(i, document.getElementById(elem));
    }
  }, delay);
}

function fadeOutHelper (i, element) {
  setTimeout(function(){
    element.style.opacity = i/10.0;
  }, 40*(10 - i));
}

function moveUp (elem, delay) {
  setTimeout(function(){
    const element = document.getElementById(elem);
    const top = element.getBoundingClientRect().top;
    var speed = top/4;

    element.style.position = "absolute";

    for (var i = top; i >= 50; i-=speed) {
      speed = moveUpHelper(i, element, speed, top);
    }

    count = 0;

    element.onclick = function() {location.reload()};
    element.text = "Go Back";
  }, delay);
}


function moveUpHelper (i, element, speed, top) {
  setTimeout(function(){
    element.style.top = i + "px";
  }, 20*count);
  count++;
  return speed/=1.27;
}

function insertAfter(toInsert, targetNode) {
    targetNode.parentNode.insertBefore(toInsert,targetNode.nextSibling);
}
