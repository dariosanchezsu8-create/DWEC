//FUNCIONES ARRAY FUNCTIONS O FUNCIONES LAMBA
const sumar=(a,b) => a+b;
const factorial = a => {
if (a <= 1){
return 1;
}
return a * factorial(a -1);
}
console.log(sumar(2,3));
console.log(factorial(5));
//Podemos utilizar una funcion q de un valor a la variable
//en caso de que esta sea  undefined
function saludar(nombre="Anonimo"){
    return `hola, ${nombre}`;
}
console.log(saludar("Santiago"));

function test(a,b){
    a=a || 0;
    b=b || true;
    return a,b;

}
console.log(test(0));


//ARRAYS
//DECLARACION
numArray=new Array(0,1,2,3,4,5);
numArray.length;
console.log(numArray)
//Tambien se puede inicializar un array en vacio
coches=new Array();
coches[0]="Ferrari";

//Los elementos del array pueden ser de cualquier tipo 
let arrayDeNumeros= new Array(false,2,3,1,"hola");
console.log(arrayDeNumeros);
console.log(arrayDeNumeros[3]);

//Funciones disponibles para jugar con los elementos de un array
let ejemplo=[2,376,5,38,785,4,24,5];
//join pone una cadena separando esos elementos con la cadena
console.log(ejemplo.join("//"));
//splice tiene dos arguemnto el primer por donde empieza y el segundo
//cuantos coge a partir del inicial. devuelve un array con los elementos
//y del array principal los quita
let res=ejemplo.splice(2,2);
console.log(res);
//la funcion with asigna en el primer argumento un indice y el segundo
//el valor nuevo para ese indice. devuelve el mismo array pero con el valor
//cambiado
console.log(ejemplo.with(4,12000));