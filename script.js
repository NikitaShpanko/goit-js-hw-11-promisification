"use strict";

Element.prototype.addButtons = function (namePattern, ...callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    const newButton = document.createElement("button");
    newButton.textContent = namePattern(i);
    newButton.addEventListener("click", callbacks[i]);
    this.append(newButton);
  }
};

document.querySelector("body").addButtons(
  (i) => `Задание №${i + 1}`,

  /////////////////
  // ЗАДАНИЕ №1: //
  /////////////////
  () => {
    const delay = (ms) => {
      return new Promise((resolve, reject) => {
        if (
          !setTimeout(() => {
            resolve(ms);
          }, ms)
        )
          reject("Couldn't set timeout!");
      });
    };

    const logger = (time) => console.log(`Resolved after ${time}ms`);

    // Вызовы функции для проверки
    delay(2000).then(logger); // Resolved after 2000ms
    delay(1000).then(logger); // Resolved after 1000ms
    delay(1500).then(logger); // Resolved after 1500ms
  }

  /////////////////
  // ЗАДАНИЕ №2: //
  /////////////////
  //() => {},

  /////////////////
  // ЗАДАНИЕ №3: //
  /////////////////
  //() => {}
);
