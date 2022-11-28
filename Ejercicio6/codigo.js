var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numInput = prompt("Introduce el número del DNI:");
var letterInput = prompt("Introduce la letra del DNI:");

if (numInput < 0 || numInput > 99999999) {
    alert("El número proporcionado no es válido");
}
else {
    var resto = numInput % 23;
    var letterArray = letras[resto];

    if (letterArray != letterInput.toUpperCase()) {
        alert("La letra indicada no es correcta");
    }
    else {
        alert("El número y la letra son correctos :)");
    }
}