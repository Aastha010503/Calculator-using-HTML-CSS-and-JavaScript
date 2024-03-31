let result = document.getElementById('result');
let currentInput = '';

function appendInput(value) {
  currentInput += value;
  result.value = currentInput;
}

function clearResult() {
  currentInput = '';
  result.value = '';
}

function calculate() {
  try {
    // Replace 'sqrt' with 'Math.sqrt' for square root calculation
    currentInput = currentInput.replace(/sqrt/g, 'Math.sqrt');
    currentInput = eval(currentInput);
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
  }
}
