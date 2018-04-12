function fibonacci_max() {
  var maxValue = 0;
  maxValue = document.getElementById('input-number').value;
  var outputBox = document.getElementById('output');
  var firstValue = 1;
  var secondValue = 1;
  var tempValue = 0;
  if(secondValue <= maxValue) {
    outputBox.innerHTML = secondValue;
  }
  while(secondValue <= maxValue) {
    outputBox.innerHTML += " " + secondValue;
    tempValue = secondValue;
    secondValue += firstValue;
    firstValue = tempValue;
  }
}

function fibonacci_nth() {
  var maxIteration = 0;
  var counter = 1;
  maxIteration = document.getElementById('input-number').value;
  var outputBox = document.getElementById('output');
  var firstValue = 1;
  var secondValue = 1;
  var tempValue = 0;
  if(counter <= maxIteration) {
    outputBox.innerHTML = secondValue;
    counter++;
  }
  while(counter <= maxIteration) {
    outputBox.innerHTML += " " + secondValue;
    tempValue = secondValue;
    secondValue += firstValue;
    firstValue = tempValue;
    counter++;
  }
}
