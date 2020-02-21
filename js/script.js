/*Скрипты для космонавта */

var spaceman = document.querySelector(".spaceman-div");

spaceman.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (spaceman.classList.contains("spaceman-shake")) {
    spaceman.classList.remove("spaceman-shake");
  } else {
    spaceman.classList.add("spaceman-shake");
  }
});

/*скрипты для кнопок*/

var ru_button = document.querySelector(".rus_button");
var en_button = document.querySelector(".eng_button");
var ru_main = document.querySelector(".rus-main");
var en_main = document.querySelector(".eng-main");

ru_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (ru_main.classList.contains("visually-hidden")) {
    ru_main.classList.remove("visually-hidden");
    en_main.classList.add("visually-hidden");
  };
});

en_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (en_main.classList.contains("visually-hidden")) {
    en_main.classList.remove("visually-hidden");
    ru_main.classList.add("visually-hidden");
  };
});