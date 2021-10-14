function changeHTML(id, code) {
document.getElementById(id).innerHTML = code;
}
function mjslStyle(id, style) {
if(style == "box") {
document.getElementById(id).style.border = "solid black";
}
if(style == "bold") {
document.getElementById(id).style.fontWeight="bold";
}  
}


