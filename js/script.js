// como se iniciaiza un vector
// inicializar vacio
let vector = [];

// iniciaizar un vector con informacion
let numeros = [9,10,22,3,4,11,50,99];

let nombres = ["Brandon", "Alexa", "Siri"];

let logicos = [true, false, true, true];

//como se muestra la informacion de un vector

console.log(numeros);
console.log(nombres);
console.log(logicos);

//mostrar un valor en especifico
console.log(numeros[6]);
console.log(nombres[2]);
console.log(logicos[3]);

//como recorrer un vector

for(let i = 0; i <nombres.length; i++)  {
    console.log(nombres[i])
}
for(let i = 0; i <logicos.length; i++)  {
    console.log(logicos[i])
}

//como agregar datos en un vector
numeros.push(300, 500, 100);
console.log(numeros);

nombres.push("Laura", "Martin");
console.log(nombres)

logicos.push("true", "false");
console.log(logicos);

//como se eliminan datos de un vector
//pop() elimina el ultimo
numeros.pop();
console.log(numeros);

//splice(posicion_inicial_cantidad_datos_a_borrar)
numeros.splice(4, 2);
console.log(numeros);