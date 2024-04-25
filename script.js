tecla1 = document.getElementById("");
const resultText = document.getElementById("result");

display = "";
display2 = "";
displayWithOperation = "";
typeOfOperation = "";

function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return new Number(num1) + new Number(num2);
    case "-":
      return new Number(num2) - new Number(num1);
    case "x":
      return new Number(num1) * new Number(num2);
    case "/":
      return new Number(num2) / new Number(num1);
  }
}

function digit(value) {
  if (value === "+" || value === "-" || value === "x" || value === "/") {
    typeOfOperation = value;
  } else {
    //Operacao vazia
    if (typeOfOperation) {
      display = display + value;
    } else {
      display2 = display2 + value;
    }
  }

  resultText.value = `${display2} ${typeOfOperation} ${display}`;
}

function clearAll() {
  display = "";
  display2 = "";
  typeOfOperation = "";
  resultText.value = "0";
}

function equals() {
  const resultadoTotal = calculate(display, display2, typeOfOperation);
  resultText.value = resultadoTotal;
}

document.addEventListener("keydown", function (event) {
  const key = event.code;

  switch (key) {
    case "Digit1":
      digit(1);
      break;
    case "Digit2":
      digit(2);
      break;
    case "Digit3":
      digit(3);
      break;
    case "Digit4":
      digit(4);
      break;
    case "Digit5":
      digit(5);
      break;
    case "Digit6":
      digit(6);
      break;
    case "Digit7":
      digit(7);
      break;
    case "Digit8":
      digit(8);
      break;
    case "Digit9":
      digit(9);
      break;
    case "Digit0":
      digit(0);
      break;
  }
});
