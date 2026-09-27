//Inicio de unidad de programacion de js
//Al igual de  java se pone ; en cada sentencia y los bloques
//de codigo con {}
//Para declarar variables se utiliza var
//MUY IMPORTANTE PARA PODER MIRAR EL RESULTADO SE TIENE QUE HACER
//ATRAVES DE UN SERVIDOR 
var numero1;
var numero2,numero4;
var numero5=23,numer1="ds";
numero1=34;
console.log(numer1);
//se muestran los numeros normales
var numero10=24_000_808;
console.log(numero10);
//El console.log se utiliza para imprimir es como un print
//Existe un tipo de variable llamad bigint. Que esta es un numero
//entero que tiene un rango infinito. Como number que esta limitado 
//a ciertos numeros. Hay que añadir n al final
var numero2=321n;
console.log(numero2);
//Typeof nos dice el tipo de variable
console.log(typeof(numero1))
//Para pasar de una variable a otra es String,Boolean,Number
//estos son los primitivos
console.log(typeof "abs");
console.log(typeof String(numero1));
console.log(numero1);
console.log(typeof (new String(numero1)).valueOf());
//el valueof retorona el valor primitivo de la variable
//Al igual que python el tipado es dinamico, por lo que una variable
//a lo largo de su vida util puede adoptar distintos tipos

//Nueva declaracion de variable que solo vale cuando este entre dos corchetes
//esta es let
let extLet=1;
var extVar=1;

if(true){
let intLet=1;
var intVar=1;

console.log(extLet);
console.log(extVar);
console.log(intLet);
console.log(intVar);
}

//Se supone que al declarar el intLet fuera de los corchetes deberia
//dar q no pasa con var
//console.log(intLet);
console.log(intVar);
//Para declarar una constante se utiliza const.
const usuario={nombre:"Ana"};
console.log(usuario.nombre);
usuario.nombre="Lusima";
//Usuario es la constante pero nombre es un atributo que se puede cambiar
console.log(usuario.nombre);

