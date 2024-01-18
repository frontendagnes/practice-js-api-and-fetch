document.addEventListener("DOMContentLoaded", init);

function init() {
  const URL = "http://api64.ipify.org?format=json";

  fetch(URL)
    .then((res) => res.json())
    .then((res) => getValue(res.ip))
    .catch((error) => console.log(error));
}

function getValue(res) {
  const span = document.querySelector("span");
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    span.innerText = res;
  });
}
