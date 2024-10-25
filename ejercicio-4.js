//crear un vector con los numeros de 1 al 10. usa un ciclo para sumar todos los numeros en el vector y mostrar el resultado 

// definir vecor de tipo number 
let numero = [ 1,2,3,4,5,6,7,8,9,10];

// definir variable para alcanzar la suma 
let suma = 0;


// recorrer el vector para sumar los numeros 
for(let i = 0; i < numero.length; i++) {
    suma = suma + numero[i];
}

console.log("la suma es : ", suma); 55