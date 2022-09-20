textareaEl = document.getElementById("textarea");
totalcounterEl = document.getElementById("totalcounter");
remcounterEl = document.getElementById("remcounter");

function updateCounter() {
  totalcounterEl.innerText = textareaEl.value.length;
  remcounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

textareaEl.addEventListener("keyup", function () {
  updateCounter();
});
