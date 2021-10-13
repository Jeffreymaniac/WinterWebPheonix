function changeHTML(id, code) {
document.getElementById(id).innerHTML = code;
}
function mjslObject(id, object, input) {
if(object == "box") {
document.getElementById(id).innerHTML = "<div style="border: black 2px solid;">" + input + "</div>";
}
  
}
