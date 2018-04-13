function reverse_string() {
  var outputBox = document.getElementById('output');
  var inputString = document.getElementById('input-string').value;
  outputBox.innerHTML = inputString.split("").reverse().join("");
}
