const button = document.querySelector(".SendButton");
const input = document.querySelector(".input");
const showText = document.querySelector(".showText");
let text = "";
input.addEventListener("change", (element) => {
  text = element.target.value;
});

button.addEventListener("click", () => {
  if (text === "") {
    showText.innerHTML = "";
  }
  showText.innerHTML = text;
  input.value = "";
  text = "";
});
