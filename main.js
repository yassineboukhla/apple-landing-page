let image = document.querySelector(".showcase");
let container = document.querySelector(".container");

function phone(source) {
  image.src = source;
}

function changeBackground(color) {
  container.style.backgroundColor = color;
}
