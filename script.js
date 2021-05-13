var factorRes= document.getElementById('factorRes')
factorRes.style.display('hidden')
function convertToF() {
    let celsius = Number(document.getElementById('celsius').value)
    let fahrenheit_res = document.getElementById('fahrenheitres')
    let fahrenheit;
    fahrenheit = (celsius*9/5) + 32
    fahrenheit_res.innerHTML = `${fahrenheit}`;
  }

function reverseString() {
    var str = String(document.getElementById('str').value)
    var reverseRes= document.getElementById('reverseres')
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    reverseRes.innerHTML= `${reversedStr}`;
}

function factorialize() {
    let num = Number(document.getElementById('num').value)
    for (var product = 1; num > 0; num--) {
      product *= num
    }
    factorRes.innerHTML = `${product}`
   }
  