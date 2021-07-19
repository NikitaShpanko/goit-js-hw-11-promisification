const console = document.querySelector("div.console");
console.logClass = function (classSelector, ...data) {
  if (!data.length) return;
  const p = document.createElement("p");
  p.className = classSelector;
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

console.log = function (...data) {
  console.logClass("", ...data);
};

console.warn = function (...data) {
  console.logClass("warning", ...data);
};

console.table = function (objTable) {
  if (typeof objTable !== "object") {
    console.log(...arguments);
    return;
  }
  const tbl = document.createElement("table");
  const currentRow = new Map();
  //createRow(["(index)", "Value"], true);
  if (Array.isArray(objTable)) {
    for (let i = 0; i < objTable.length; i++) {
      mapRow(i, objTable[i]);
      createRow();
      //createRow([i, objTable[i]]);
    }
  } else {
    for (const [key, value] of Object.entries(objTable)) {
      mapRow(key, value);
      createRow();
      //createRow([key, value]);
    }
  }

  createRow(true);

  console.append(tbl);
  console.scrollTop = console.scrollHeight;

  function mapRow(index, value) {
    currentRow.set("(index)", index);
    if (typeof value !== "object") {
      currentRow.set("Value", value);
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        currentRow.set(i, value[i]);
      }
    } else {
      for (const [key, val] of Object.entries(value)) {
        currentRow.set(key, val);
      }
    }
  }

  function createRow(isHeader = false) {
    const tCell = isHeader ? "th" : "td";
    const tr = document.createElement("tr");
    for (const [key, value] of currentRow.entries()) {
      const cell = document.createElement(tCell);
      cell.textContent = isHeader ? key : value;
      currentRow.set(key, "");
      tr.append(cell);
    }
    if (isHeader) {
      tbl.prepend(tr);
    } else {
      tbl.append(tr);
    }
  }
};

console.clear = function () {
  console.textContent = "";
};
