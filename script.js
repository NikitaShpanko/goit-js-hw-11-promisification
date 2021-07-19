"use strict";

Element.prototype.addButtons = function (namePattern, ...callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    const newButton = document.createElement("button");
    newButton.textContent = namePattern(i);
    newButton.addEventListener("click", callbacks[i]);
    this.append(newButton);
  }
  return this;
};

document
  .querySelector("div.buttons")
  .addButtons(
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
    },

    /////////////////
    // ЗАДАНИЕ №3: //
    /////////////////
    () => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const makeTransaction = (transaction) => {
        return new Promise((resolve, reject) => {
          const delay = randomIntegerFromInterval(200, 500);

          setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
              resolve({ id: transaction.id, time: delay });
            } else {
              reject(transaction.id);
            }
          }, delay);
        });
      };

      const logSuccess = ({ id, time }) => {
        console.log(`Transaction ${id} processed in ${time}ms`);
      };

      const logError = (id) => {
        console.warn(
          `Error processing transaction ${id}. Please try again later.`
        );
      };

      /*
       * Должно работать так
       */
      makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
      makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
      makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
      makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
    }
  )
  .addButtons(
    () => "Очистить консоль!",
    () => {
      console.clear();
    }
  );

console.log('"Консоль" находится прямо здесь!', ":-)");
