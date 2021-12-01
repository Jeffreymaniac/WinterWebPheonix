
function canvasCircle(id, x, y, size) {
  var canvas = document.getElementById(id);
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(x, y, size, 0, 2 * Math.PI);
ctx.stroke();
}

function djsStyle(id, style) {
if(style == "box") {
document.getElementById(id).style.border = " 2px solid black";
}
if(style == "bold") {
document.getElementById(id).style.fontWeight="bold";
}
if(style == "italic") {
  document.getElementById(id).style.fontStyle = "italic";

}
}

function djsIcon(id, icon) {
var i = document.getElementById(id);
if(icon == "android-icon-black") {
  i.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/38/38002.png' />";
  }
  if(icon == "idk") {
  i.innerHTML = "<img src='idk' />";
  }
}
