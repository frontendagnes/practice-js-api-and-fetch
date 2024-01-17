document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  // setBorderColorAsync(divList[0], 'red', function() {
  //     setBorderColorAsync(divList[1], 'blue', function() {
  //         setBorderColorAsync(divList[2], 'green', function() {
  //             console.log('finish');
  //         });
  //     });
  // });
  setBorderColorAsync(divList[0], "red")
    .then(setBorderColorAsync(divList[1], "blue"))
    .then(setBorderColorAsync(divList[2], "green"))
    .then(console.log("finished"));
}

function setBorderColorAsync(element, color) {
  //   setTimeout(() => {
  //     element.style.border = `3px solid ${color}`;
  //     callback();
  //   }, Math.random() * 3000);

  return new Promise((resolve, reject) => {
    setTimeout(resolve, Math.random() * 3000);
  }).then(() => {
    element.style.border = `3px solid ${color}`;
  });
}
