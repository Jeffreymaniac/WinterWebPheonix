function djsStyle(id, style) {
if(style == "box") {
document.getElementById(id).style.border = "solid black";
}
if(style == "bold") {
document.getElementById(id).style.fontWeight="bold";
}  
}
function djsIcon(id, icon) {
var i = document.getElementById(id);
if(icon == "android-icon-black") {
  i.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/38/38002.png' />";
  }
}
