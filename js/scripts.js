$(function()  {
var height = parseInt(prompt("Enter your height in cms:"));

if (height >= 170) {
  $(".colored").css("background-color", "yellow");
}
else {
  $("#entire-list").show();
}



});
