//Suma de variables
let num1 = parseInt(prompt("Ingrese el primero número por favor"));
let num2 = parseInt(prompt("Ingrese el segundo número por favor"));  

function sumar(num1, num2) {   
    let resultado= num1+num2;
    return resultado
}
//Suma de variables con arrow function
const suma = (num1, num2)=> resultado=num1 + num2;

let muestra = suma(num1, num2);
document.write("El resultado de tu suma es: "+ muestra);


//Nombre y saludo
const imprimirFrase= nombre=> `Hola ${nombre}`;

let nombre= 'Pancho';

document.write('<h4>'+imprimirFrase(nombre)+'</h4>');


//Objeto carro y sus componentes
const carro={
    color: 'negro',
    marca: 'mazda',
    funciones:{
        acelera: 160, 
        frena: 0

    }
}

document.write('<h4> El color del carro es: '+carro.color+'</h4>');
document.write('<h4> Las funciones del carro son: '+JSON.stringify(carro.funciones)+'</h4>');
document.write('<h4> Objeto carro: '+JSON.stringify(carro)+'</h4>');


const {color} = carro;
document.write('<h4> Acceder al color por medio de una constante: '+JSON.stringify(color)+'</h4>');


