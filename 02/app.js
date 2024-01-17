document.addEventListener("DOMContentLoaded", init);

async function init() {
  const divList = document.querySelectorAll("div");

  //   setBorderColorAsync(divList[0], 'red', function() {
  //       setBorderColorAsync(divList[1], 'blue', function() {
  //           setBorderColorAsync(divList[2], 'green', function() {
  //               console.log('finish');
  //           });
  //       });
  //   });

  try {
    await setBorderColorAsync(divList[0], "red");
    await setBorderColorAsync(divList[1], "blue");
    await setBorderColorAsync(divList[2], "green");

    console.log("finish");
  } catch (error) {
    alert(error.message);
  }
}

function setBorderColorAsync(element, color) {
  if (element && element instanceof HTMLElement) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(element.style.border = `3px solid ${color}`);
      }, Math.random() * 3000);
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(
        new Error("Paremetr ~element~ musi być prawidłowym elementem DOM")
      );
    });
  }
}

// function setBorderColorAsync(element, color, callback) {
//     if (element && element instanceof HTMLElement) {
//       // sprawdzam czy parametr jest elementem DOM, więcej:
//       // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

//       if (callback && typeof callback === "function") {
//         setTimeout(() => {
//           element.style.border = `3px solid ${color}`;
//           callback();
//         }, Math.random() * 3000);
//       } else {
//         alert("Parametr ~callback~ mus być funkcją");
//       }
//     } else {
//       alert("Paremetr ~element~ musi być prawidłowym elementem DOM");
//     }
// }


