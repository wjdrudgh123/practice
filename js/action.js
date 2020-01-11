const content = document.querySelector(".js-content"),
  like = content.querySelector(".js-like");

function endEvent() {
  const removeImg = like.previousElementSibling;
  content.removeChild(removeImg);
}
function clickLikes() {
  let span = document.createElement("span");
  let img = document.createElement("img");
  img.classList.add("up-image");
  img.classList.add("js-up-image");
  img.classList.add("on");
  img.setAttribute("src", "./img/imgage.png");
  span.appendChild(img);

  content.prepend(span);
  setTimeout(endEvent, 1500);
}

function init() {
  like.addEventListener("click", clickLikes);
}

init();
