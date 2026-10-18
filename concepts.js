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

//Reglas de concatenacion
let animal="hola";
let numPatas=2;
//Esto sucede porque se lee de izquierda a derecha 
//por lo que number+number=number+string=string
console.log(numPatas+numPatas+animal);//4hola
console.log(animal+numPatas+numPatas);//hola22

//Conversiones de tipo de variables
cadena="As";
console.log(Boolean(cadena)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
// Conversiones a cadena
let nombre=23;
let aprobado=false;

console.log(String(nombre)); // "42"
console.log(String(nombre) + nombre); // "4242"
console.log(String(aprobado)); // "true"
// Conversiones a números
nom=1;
console.log(Number(nom)); // NaN, no es un número
console.log(Number(cadena) * 2); // 6.283
console.log(Number(aprobado)); // 1
console.log(parseInt(cadena)); // 3
console.log(parseFloat(cadena)); // 3.1415
//El lenguaje js al ser de tipado dinamico a lo largo del programa podemos
//cambiar el tipo de variable
let z=23;
z=true;
z=undefined;
console.log(z);



//LITERALES: estos son las impresiones directas. print,sytem.out.println
//Con las comillas puedes imprimir texto o valores directamente
//siempre respetando la jerarquia de comillas
const libs=["React","Vue","Angular"];
//Con las comillas invertidas se imprime de esta manera
console.log(`Este curso trata de ${libs[0]}`);
//Otra forma de imprimir mas compleja
const l = libs.length;
//A continuacion vemos un if/else abreviado
//Si l es mayor que 1 imprimira en plural sino en singular
console.log(`
${l < 1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}:
${libs.join(", ")}
`);


//COMPARADORES
//En los comparadores al igual que PHP 
//tiene comparacion debil(==) y comparacion fuerte(===)
//Otro ejemplo de operador ternario(?) e if/else abreviado
//Dependiendo del valor de autenticado cambiara el mensaje por pantalla
let autenticado=true;
const estado=autenticado?"Bienvenido":"Por favor, inicia sesion";
console.log(estado);
//Otro comparador parecido al anterior es coalescencia nula(??)
//esta en caso de que la variable sea nula o undefined hace lo que quieras
nombre=null;
const alias=nombre??"Domingo";
console.log(alias);

//Typeof devuelve el tipo de una variable
//instanceof devuelve true si un objeto es una instancia de un tipo concreto
console.log(typeof(alias));


//CONDICIONALES
//Declaracion de un condicional simple
let nota=7;
if(nota>=5){
    alert(alias+' esta aprobado con un '+nota);
}else{
    alert("falso");
}
//El else if
// if (<condición>){
// <Instruccion(es)>
// }
// else if (<otracondición>){
// <Instruccion(es)>
// }
// else{
// <Instruccion(es)>
// }
//Condicional simple anidado
let nota1, nota2, nota3;
nota1=prompt('Introduce 1ra. nota:','');
nota2=prompt('Introduce 2da. nota:','');
nota3=prompt('Introduce 3ra. nota:','');
//Se convierten los 3 string en enteros
nota1=parseInt(nota1);
nota2=parseInt(nota2);
nota3=parseInt(nota3);
pro=(nota1+nota2+nota3)/3
console.log(pro);
if(pro===5){
    alert("Suficiente");
}else if(pro>=5&&pro<=8){
    alert("Notable");
}else{
    alert("Sobresaliente");
}
//El switch case
//Esta estructura es bastante limitada
let valor;
valor = prompt('Ingrese un valor comprendido entre 1 y 5:','');
//Se convierte a entero
valor = parseInt(valor);
switch (valor){
case 1:
alert('uno');
break;
case 2:
alert('dos');
break;
case 3:
alert('tres');
break;
case 4:
alert('cuatro');
break;
case 5:
alert('cinco');
break;
default:
alert('debe ingresar un valor comprendido entre 1 y 5.');
}
//Se puede crear una estructura compleja, pero supongo que habra
//otras funciones mas adecuadas para ellos
let x=0;
switch (true) {
case x >= 0 && x < 10:
alert("x >= 0 && x < 10");
break;
case x >= 10 && x < 20:
alert("x >= 10 && x < 20");
break;
case x < 0 || x >= 100:
alert("x < 0 || x >= 100");
break;
default:
alert("Ninguno");
}

//VALORES PSEUDO-BOOLEANOS:TRUTHLY(verdadero) Y FALSY(falso)
 let v="cualquier cosa";
 if(v)
    alert("verdadero");
else
    alert("falso");
//Un ejemplo facul de enternder
let a=true;
if(a)
    alert("verdader0");
else
    alert("falso");

if (window.Worker)
alert("Este navegador soporta Web Workers");
else
alert("¡¡Navegador viejo!! Actualízate!!");

//Eso fuerza la conversion a una variable a booleana
//B es - - a cualquier cosa --=+ Entonces b=cualquier cosa=true
//Esta dicendo b es igual a cualquier cosa o no entonces ya la
//variable automaticamente se convierte en boolean//CURIOSIDADES
let b=!!"cualquier cosa";
console.log(b);


//BUCLES WHILE/FOR/FOREACH
x = 1;
while (x <= 100) {
document.write(x);
x++;
}
//Ejemplo de estructura do-while
 do {
const entrada = prompt("Introduce un número entre 0 y 999:");
valor = Number(entrada);
if (!Number.isInteger(valor) || valor < 0 || valor > 999) {
console.log("El valor no es válido. El programa terminará.");
break;
}
 if (valor < 10) {
console.log(`El valor ${valor} tiene 1 dígito.`);
 } else if (valor < 100) {
console.log(`El valor ${valor} tiene 2 dígitos.`);
 } else {
console.log(`El valor ${valor} tiene 3 dígitos.`);
 }
 } while (valor > 0);
 

 //BUCLE FOR
//  for (<Inicialización> ; <Condición> ; <Incremento o Decremento>) {
// <Instrucciones>
// }

//A diferentes maneras de jugar con el for
//una es 
let i = 0;
let res = "";
for (; i< 10; i++){
res += i
}
//No defines la i dentro del for porq lo has hecho arriba
//Tambien dentro del bucle se puede inicializar varias variables
for (let i = 0, j = 10; i< j; i++){
    alert("hola");
}
//Tambien se puede obviar la parte de la condicion de parada poniendo
//entonces dentro del for una condicion de parada normalemnte un if
//acompañado de un break para que rompa de bucle
//luego tambien lo puede poner como estilo while i++
for (let i = 0; i<10;){
res += i
i++;
}
//tambien se puede ejecutar variables instrucciones dentro de 
//un mismo bucle for
for (let i = 0, j = 0; i<10 && j < 5; i++, j++){
res+=i;
}
//FOREACH/FOR..of
for (let elemento of coleccion){
}

//FOR ...IN
//Este esta hecho para recorrer las claves de un objeto
for (const variable in [objeto|matriz]){
    console.log(variable);
}
//Ejemplo sencillo de entender
for (let clave in frutas) {
    console.log(clave); 
}
// Imprime las posiciones (índices): "0", "1", "2"
//No imprime las frutas sino los indices 
//que en este caso son las claves

//PARA CONTROLAR LOS ERRORES COMO SIEMPRE EL TRY-CATCH-FINALLY
x = 33;
try {
x += y;
}
catch (e) {
    //El e.messaje mostrara las propiedades del error
alert ("error: " + e.message);
}
//Tambien como java se puede lanzar con condiciones try-catch
function validarEdad(edad) {
    if (typeof edad !== "number") {
        throw new Error("El valor debe ser un número");
    }
    
    if (edad < 18) {
        throw new Error("Debes ser mayor de 18 años para registrarte");
    }

    return "Acceso concedido";
}
//Luego cuando se declare la funcion se tendra que poner el codigo
//dentro de un try-catch y q en caso de ir mal que lance el mensaje 
//puesto en la condicion
//PARA CAPTURAR ERRORES ESPECIFICO SE HACE CON LA FUNCION 
//INSTANCEOF
try {
console.log(prueba);
} catch (err) {
if (err instanceof ReferenceError)
console.log("La referencia a prueba no existe");
else if (err instanceof SyntaxError)
    console.log("Error de sintaxis");
}
//SE DOCUMENTO CON JAVADOC. SE HACE DE LA SIGUIENTE MANERA
/**
* @summary Calcula la suma de dos números.
* @description Esta función toma dos números como entrada y devuelve su suma
* @param {number} a - Primer sumando
* @param {number} b - Segundo sumando
* @returns {number} Devuelve la suma de los dos números.
*/
function suma(a, b) {return a + b;}

/**
 *  1. Se debe tener instalado Node.js
    2. Instalar JSDoc como paquete Node:
    npm install -g jsdoc
    3. Ejecutar JSDoc dando un nombre de fichero y un directorio de destino:
    jsdoc suma.js -d docs
 */