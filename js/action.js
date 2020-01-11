const content = document.querySelector(".js-content"),
  like = content.querySelector(".js-like"),
  image = content.querySelector(".js-up-image");

function endEvent() {
  image.classList.remove("on");
  image.classList.add("off");
}
function clickLikes() {
  image.classList.remove("off");
  image.classList.add("on");
  setTimeout(endEvent, 1500);
}

function init() {
  like.addEventListener("click", clickLikes);
}

init();
