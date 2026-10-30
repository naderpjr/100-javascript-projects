
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const button = e.target.closest(".button");

  if (!button || !tabs.contains(button)) return;

  const id = button.dataset.id;
  const element = document.getElementById(id);

  if (!element || !tabs.contains(element)) return;

  btns.forEach(function (btn) {
    btn.classList.remove("live");
  });

  button.classList.add("live");

  articles.forEach(function (article) {
    article.classList.remove("live");
  });

  element.classList.add("live");
});
