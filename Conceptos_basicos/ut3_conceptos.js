/* CONCEPTOS BASICOS UNIDAD T2 */

//Funciones ARROW/Lambda
const sumar=(a,b)=>a+b;
const factorial=a=>{
    if(a<=1){
        return 1;
    }
    return a*factorial(a-1);
}
console.log("sumar", sumar(1,2));
console.log("factorial", factorial(5));

//Declaracion de Array
numero=new Array(1,2,35,5,445,5);
//para la longitud
numero.length;
console.log(numero.length);
//Otra manera de declararlo mas comoda
coche=["Renault","Seat"];
console.log(coche);

//Funciones de arrays
//join pone una cadena separando esos elementos con la cadena
let ejemplo=[0,1,2,3];
console.log(ejemplo.join("//"));
//splice tiene dos arguemnto el primer por donde empieza y el segundo
//cuantos coge a partir del inicial. devuelve un array con los elementos
//y del array principal los quita
let res=ejemplo.splice(2,2);
console.log(res);
//la funcion with asigna en el primer argumento un indice y el segundo
//el valor nuevo para ese indice. devuelve el mismo array pero con el valor
//cambiado
//console.log(ejemplo.with(4,12000));
//Para odernar de mayo a menor con sort y reverse
//Pero claro dependes del resultado de -1,0,1. Otras formas mejores

//ARRAY MULTIDIMENSIONALES
let dimension1=["00", "01", "02"];
let dimension2=["10", "11", "12"];
let matriz2d = [dimension1, dimension2];
console.log(matriz2d[1][2]); // Mostraría 12

//En las pilas y colas y colecciones en gerales 
//Metodos importantes push y pop
//Push pone al final y pop quita de donde queramos
 ejemplo=[0,1,2,3,4,5,6,7];
ejemplo.push(8);
console.log(ejemplo);
ejemplo.pop(4);
console.log(ejemplo);

//Funciones Superiores
//Encontrar un elemento mediante su valor
//Funciones indexOf sino lo encuentra devuelve -1
//mas utilizado find(), findIndex() elemneto empezando por atras,
//  Devuelven el indice de elemento que se busca findLast() y findLastIndex(). 


//FUNCION FILTER=>devuelve un array con los elementos que cumple la condicion
function esPar(n) { return n%2 == 0;}
let numerosPares=matriz.filter(esPar);

//FUNCION MAP=>hace operaciones dentro de arrays poniendo como argumento una funcion
function dobla(n) { return n*2; }
let res = matriz.map(dobla);

//FUNCION REDUCE=>se obtiene un resultado como la suma multiplicacion
//y demas a partir de una array 
//Argumentos primer elemtnos acumulativos, segundo elemetno del array
//es opcional y se puede poner un elemeento que indice el valor inicial
//del argumento acumulativo
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
let sumaNotas = arrayNotas.reduce((total,nota)=> total += nota, 0); // total = 35.35
// Se podría haber omitido el valor inicial 0 para total
sumaNotas = arrayNotas.reduce((total,nota)=> total += nota); 

//MAP /HASHMAP EN JAVA-TODO LO QUE SE TIENE QUE SABER
let coche = new Map();
coche.set("marca", "chevrolet");
coche.set("modelo", "aveo");
coche.set("color", "blanco");
console.log(coche); //Map { marca: "chevrolet", modelo: "aveo", color: "blanco" }
console.log(coche.get("marca")); //chevrolet
console.log(coche.has("tv")); //false
console.log(coche.delete("color")); //true
console.log(coche.has("color")); //false
coche.forEach(function (valor) {//Itera el Map
console.log(valor) //chevrolet, aveo
});
for (let [clave, valor] of coche) {//Itera el Map
console.log(clave + " - " + valor); //marca - chevrolet, modelo - aveo
}
for (let clave of coche.keys()) {//Itera las claves
console.log(clave); //marca, modelo
}
for (let valor of coche.values()) {//Itera los valores
console.log(valor); //chevrolet, aveo
}
coche.clear();
console.log(coche); //Map { }

//OTRA TIPO DE LISTA LLAMADA SET
let dias = new Set();
dias.add("Lunes");
dias.add("Martes");
dias.add("Miércoles");
dias.add("Jueves");
dias.add("Viernes");
dias.add("Sábado");
dias.add("Domingo");
dias.add("Viernes"); //Ya existe. No produce ningún efecto
console.log(dias); //Set ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes",
"Sábado", "Domingo"]
console.log(dias.has("Sábado")); // true
console.log(dias.size); //7
console.log(dias.delete("Lunes")); //true
console.log(dias.size); //6
dias.forEach(function (dia) {
console.log(dia); //Martes, Miércoles, Jueves, Viernes, Sábado, Domingo
});
dias.clear();
console.log(dias.size); //0

//FUNCIONES ADICIONALES->delete,keys,size,values