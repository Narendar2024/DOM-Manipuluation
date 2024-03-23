document.getElementById("btn").addEventListener("click", () => {
  // Get elements from the DOM
  let num1 = parseFloat(document.querySelector(".num1").value);
  let num2 = parseFloat(document.querySelector(".num2").value);
  let resultElement = document.querySelector(".results"); // Select the result element, not its value
  let operator = document.getElementById("selectOp").value;
  let result;

  // Perform the operation based on the selected operator
  switch (operator) {
    case "plus":
      result = num1 + num2;
      break;

    case "min":
      result = num1 - num2;
      break;

    case "dev":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;

    case "multi":
      result = num1 * num2;
      break;

    default:
      result = "Invalid operator";
  }

  resultElement.innerText = "Result: " + result;
});
