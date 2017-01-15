// "use strict";

var size = Math.round(Math.random() * 100 + 1);
var speed;

function createBubble() {
  var $bubble = document.createElement("div");

  $bubble.setAttribute("class", "bubble");

  $bubble.style.width = size + "px";
  $bubble.style.height = size + "px";
  $bubble.style.top = (window.innerHeight - size) + "px";
  $bubble.style.left = (Math.round(Math.random() * (window.innerWidth + size) + 1)) + "px";

  document.body.appendChild($bubble);

  speed = (Math.random() * 100) + 50;

  var direction = Math.round(Math.random() * 20 - 10);

  var moveInterval = setInterval(function(){
    newTop = parseInt($bubble.style.top) - 10;
    newLeft = parseInt($bubble.style.left) + direction;
    $bubble.style.top = newTop + "px";
    $bubble.style.left = newLeft + "px";

    if ( newTop < -100 ||
        newLeft < -100 ||
        newLeft > window.innerWidth )
        window.clearInterval(moveInterval);

    // changeColor(); <-- commented the function out. You said via Slack that was
    // one of the 5 points credit :)
  },
  speed);  

}

window.onload = function() {
  var button = document.querySelector("#btn");
  button.addEventListener("click", function() {
    
    button.style.display = "none";
    showText();
    for ( i = 0; i < 100; i++ ) {
      createBubble();
      console.log("This bubble's size is " + size + " and it's speed is " + speed + ".");
    }
  });
}

function showText() {
  var text = document.getElementsByTagName("p")[0];
  studentName = "Shelly";
  text.innerHTML += ", " + studentName + "!";
  text.style.opacity = 1;
}


