function changeHTML(id, code) {
document.getElementById(id).innerHTML = code;
}
function mjslObject(id, object, input) {
if(object == "box") {
document.getElementById(id).innerHTML = "<div id="mjsl-box">" + input + "</div>";
}
  
}

var jsstyles = document.getElementById("mjsl-styles");
jsstyles.innerHTML = "
#mjsl-box {
border: 2px solid black;
}
"
