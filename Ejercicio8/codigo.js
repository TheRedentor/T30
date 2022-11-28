function IsPar(numInput) {
    if (numInput%2 == 0) {
        alert(numInput + " es un número par.");
    }
    else {
        alert(numInput + " es un número impar.");
    }
}

var numInput = prompt("Introduce un número entero:");
IsPar(numInput);