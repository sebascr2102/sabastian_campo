// escribe un programa que recorra un vector de animales y que muestre solo que tenga mas de 5 letras en su nombre 

// definir un vector de tipo string 
let animales = ["leon", "tortuga", "perro", "gato", "aguila"];

// recorrer el vector 
for(let i = 0; i < animales.length; i++) {
    // validar que el animales tenga + de  5 letras
    if(animales[i].length > 5 ) {
        console.log(animales[i]);
    }
}