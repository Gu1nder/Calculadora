//adicionar os números ao display quando clickar

function AddDisplay(item) {
  document.querySelector("#display").value += item;
}

//botão "C" para limpar todo o display

function C_clear(item) {
  document.querySelector("#display").value = item;
}

//botão de Del para apagar o ultimo número do display

function Del_button() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0, -1)
}

//botão de resultado 

function res_button() {
  const display = document.querySelector('#display');
  try {
    display.value = eval(display.value)
  } catch {
    display.value = "error";
  }
}