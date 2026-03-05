function AddDisplay(item) {
  document.querySelector("#display").value += item;
}

function C_clear(item) {
  document.querySelector("#display").value = item;
}

function Del_button() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0, -1)
}


function res_button() {
  const display = document.querySelector('#display');
  try {
    display.value = eval(display.value)
  } catch {
    display.value = "error";
  }
}