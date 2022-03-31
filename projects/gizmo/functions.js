function toggle() {
  var box = document.getElementById("title");
  box.classList.toggle("active");

  var intro = document.getElementById("intro");
  intro.classList.toggle("hide");

  var clickOn = document.getElementById("clickity");
  clickOn.classList.toggle("active");
};

function add() {
  var clickOff = document.getElementById("clickity");
  clickOff.classList.toggle("hide");

  var sky = document.getElementById("sky");
  sky.classList.toggle("active");

  var nextBox = document.getElementById("header2");
  nextBox.classList.toggle("active");

  var clickOnn = document.getElementById("3rd");
  clickOnn.classList.toggle("active");
};

function toggleDiv() {
  var clickOfff = document.getElementById("3rd");
  clickOfff.classList.toggle("hide");

  var desert = document.getElementById("desert");
  desert.classList.toggle("active");
};
