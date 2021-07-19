"use strict";

/*const console = document.querySelector("div.console");
console.log = function (...data) {
  if (!data.length) return;
  const p = document.createElement("p");
  if (data.length > 1) {
    for (const elem of data) {
      const span = document.createElement("span");
      span.textContent = elem;
      p.append(span);
    }
  } else {
    p.textContent = data[0];
  }
  console.append(p);
  console.scrollTop = console.scrollHeight;
};

console.table = function (objTable) {
  if (typeof objTable !== "object") {
    console.log(...arguments);
    return;
  }
  const tbl = document.createElement("table");
  createRow(["(index)", "Value"], true);
  if (Array.isArray(objTable)) {
    for (let i = 0; i < objTable.length; i++) {
      createRow([i, objTable[i]]);
    }
  } else {
    for (const [key, value] of Object.entries(objTable)) {
      createRow([key, value]);
    }
  }

  function createRow(arValues, isHeader = false) {
    const tCell = isHeader ? "th" : "td";
    const tr = document.createElement("tr");
    for (const val of arValues) {
      const cell = document.createElement(tCell);
      cell.textContent = val;
      tr.append(cell);
    }
    tbl.append(tr);
  }
  console.append(tbl);
  console.scrollTop = console.scrollHeight;
};*/

Element.prototype.addButtons = function (namePattern, ...callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    const newButton = document.createElement("button");
    newButton.textContent = namePattern(i);
    newButton.addEventListener("click", callbacks[i]);
    this.append(newButton);
  }
};

document.querySelector("div.buttons").addButtons(
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
  },

  /////////////////
  // ЗАДАНИЕ №2: //
  /////////////////
  () => {
    const users = [
      { name: "Mango", active: true },
      { name: "Poly", active: false },
      { name: "Ajax", active: true },
      { name: "Lux", active: false },
    ];

    const toggleUserState = (allUsers, userName) => {
      return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map((user) =>
          user.name === userName ? { ...user, active: !user.active } : user
        );
        resolve(updatedUsers);
      });
    };

    const logger = (updatedUsers) => console.table(updatedUsers);

    /*
     * Должно работать так
     */
    toggleUserState(users, "Mango").then(logger);
    toggleUserState(users, "Lux").then(logger);
  }

  /////////////////
  // ЗАДАНИЕ №3: //
  /////////////////
  //() => {}
);

console.log("Консоль находится прямо здесь!", ":-)");
