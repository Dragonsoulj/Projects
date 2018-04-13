function fizzbuzz() {
  var current = 1;
  var end = 100;
  var outputBox = document.getElementById('output');
  while(current <= end) {
    if(0 == current % 3) {
      outputBox.innerHTML += 'Fizz';
    }
    if(0 == current % 5) {
      outputBox.innerHTML += 'Buzz';
    }
    if(0 != current % 3 && 0 != current % 5) {
      outputBox.innerHTML += current;
    }
    outputBox.innerHTML += '<br />';
    current++;
  }
}
