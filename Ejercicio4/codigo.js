var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length){
    console.log("La palabra mas larga es: " + valores[3]);
}
else {
    console.log("La palabra mas larga es: " + valores[4]);
}

console.log("Resultado true: " + valores[0]);
console.log("Resultado false: " + valores[2]);

console.log(valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]));
console.log(valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]));
console.log(valores[1] + " * " + valores[5] + " = " + valores[1] * valores[5]);
console.log(valores[1] + " / " + valores[5] + " = " + valores[1] / valores[5]);
console.log(valores[1] + " ^ " + valores[5] + " = " + Math.pow(valores[1], valores[5]));
