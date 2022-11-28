function comprobarFrase(textInput) {
    if (textInput == textInput.toUpperCase()) {
        alert("La frase está formada solo por mayúsculas.");
    }
    else if (textInput == textInput.toLowerCase()) {
        alert("La frase está formada solo por minúsculas.");
    }
    else {
        alert("La frase está formada tanto por mayúsculas como por minúsculas.")
    }
}

var textInput = prompt("Introduce una frase:");
comprobarFrase(textInput);