var spaceman = document.querySelector(".spaceman-div");

spaceman.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (spaceman.classList.contains("spaceman-shake")) {
    spaceman.classList.remove("spaceman-shake");
  } else {
    spaceman.classList.add("spaceman-shake");
  }
});