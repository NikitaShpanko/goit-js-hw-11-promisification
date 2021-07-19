const console = document.querySelector("div.console");
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
};