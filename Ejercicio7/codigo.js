var numInput = prompt("Introduce un número entero:");
var factorial = 1;

for (let i = numInput; i > 0; i--) {
    factorial *= i;
}

console.log(factorial);