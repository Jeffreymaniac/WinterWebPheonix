

class winterWebPheonixClass {
  constructor() {
 
  }
 
function canvasCircle(id, x, y, size) {
  var canvas = document.getElementById(id);
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(x, y, size, 0, 2 * Math.PI);
ctx.stroke();
}
  function xhttp_uploadContentToHTML(doc, getOrPost, id) {
  
  const xhttpp = new XMLHttpRequest();
  xhttpp.onload = function() {
   document.getElementById(id).innerHTML = doc;
  } 
  
  xhttpp.open(getOrPost, doc);
  xhttpp.send();
  }

function reloadPage() {
  location.reload();
}

function rickrollElementById(id) {
  document.getElementById(id) = '<iframe width="853" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function blockRightClickOnEntirePage(clickEvent) {
  document.oncontextmenu = rightClick;
  clickEvent.preventDefault();
}



}


