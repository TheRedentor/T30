function IsPalindromo(textInput) {
    var arrayText = textInput.toLowerCase().split("");
    for (var i = 0; i < arrayText.length; i++) {
        if (arrayText[i] == " ") {
            arrayText.splice(i, 1);
        }
    }

    var palindromo = "si";
    for (var i = 0; i < arrayText.length; i++) {
        if (arrayText[i] != arrayText[arrayText.length-1 - i]) {
            palindromo = "no";
            break;
        }
    }
    alert("El texto " + palindromo + " es palíndromo");
}

var textInput = prompt("Introduce un texto:");
IsPalindromo(textInput);