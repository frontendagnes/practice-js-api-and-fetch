document.addEventListener("DOMContentLoaded", init);

async function init() {
  const divList = document.querySelectorAll("div");

  // setBorderColorAsync(divList[0], 'red', function() {
  //     setBorderColorAsync(divList[1], 'blue', function() {
  //         setBorderColorAsync(divList[2], 'green', function() {
  //             console.log('finish');
  //         });
  //     });
  // });
  await setBorderColorAsync(divList[0], "red");
  await setBorderColorAsync(divList[1], "blue");
  await setBorderColorAsync(divList[2], "green");

  console.log("finished");
}

function setBorderColorAsync(element, color) {
  //   setTimeout(() => {
  //     element.style.border = `3px solid ${color}`;
  //     callback();
  //   }, Math.random() * 3000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      element.style.border = `3px solid ${color}`;
      resolve();
    }, Math.random() * 3000);
  });
}
