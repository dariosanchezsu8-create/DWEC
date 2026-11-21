//CONCEPTOS BASICOS PROGRAMACION OBJETOS (POO)
//Instanciar un objeto
const miObjeto=new Objetc();
//Atributo para referirse
// miObjeto.name
// this.name

//DECLARACION DE UNA CLASE
class Marcianito {
constructor(nombre, color) {
this.nombre = nombre;//Variable pública
this.color = color;//Variable pública
}
}
//Al instanciar el objeto se pueden crear nuevas propiedades
miSaludador = new Saludador("Pedro");
miSaludador.nuevaPropiedad = "Tengo una nueva propiedad; parezco un superalimento";
Delete miSaludador.nuevaPropiedad;//eliminar nueva propiedad

//METODOS ESTATICOS
class Tools{
static strToURL(str) {
return encodeURIComponent(str).replace(/%20/g, "+");
}
}
Tools.strToURL("La donna e mobile"); // "La+donna+e+mobile"
const toolkit = new Tools();
toolkit.strToURL("La donna e mobile"); //ERROR. El Método no existe

//Variables publicas y privadas
#_var1;//atributo privado
constructor(){
this.#_var1=10;//asignacion valor a variables privada
}
//Funciones tipicas 
get var1() {
//getter
return this.#_var1//se pordria poner nombre siendo una varianble publica;
}
set var1(valor) {
//setter
this.#
}

//Metodos publicos o privados
//Publico:
area() {
//Método público (accesible desde fuera de la clase)
return this._height * this._width;
}
//Privado
#devuelveAlto = function () {
return this.#_altura;
};


//Interfaces
interface ITipoComplejo {
id: number;
nombre: string;
}

//Como se implementa en una clase
interface IPrint {
print(): void;
}
function printClase(a: IPrint) {
a.print();
}
//Al igual que java se crea una funcion en la interfaz 
//y se pone implement en la clase para que pueda usar ese metodo de interfaz
class ClaseA implements IPrint {
print() { console.log('ClaseA.print()') };
}


//HERENCIA->se pone el extends al igual que java y entonces
//adquiere todo las propiedades de la clase padre
class Usuario extends Saludador{
apellido = "";
constructor(nombre, apellido){
super(nombre);
this.apellido = apellido;
}
saludo(){
return `${super.saludo()} ${this.apellido}`;//super para referirnos
//a propiedad de la clase padre
}
}


//Importar Modulos y funciones
import nombre from
'./file.js';//import un elemnto del fichero
import * as obj from //importa todos los elementos del fichero
'./file.js';
import './file.js'; //importa el fichero
//Exportar
export { n1, n2, n3... };//exporta uno o varios elementos con esos nomnbres
export * from './file.js'; //todos los elementos del modulo


//EXCEPCIONES
//Errores personalizados
//Clase aparte que tiene que contener esot=<igual que java
class PagoError extends Error {
constructor(code, message) {
super(message);
this.name = "PagoError";
this.code = code;
}
}
//Lanzar exepcion con una condicion personaliaza o no=>java
if (pago > fondos)
throw new PagoError('fondos_insuficientes',
`Se ha intentado realizar un pago de ${pago} con estos fondos: ${fondos}`
);

//El try-catch de la sentencia afectada
try {
realizarPago();
} catch (err) {
if (err instanceof PagoError) {
if (err.code === "fondos_insuficientes") {
console.log(err.message);
} else if (err.code === "tarjeta_invalida") {
// Tratamiento de error si la tarjeta no es válida
}
}
//Se puede poner mas mensajes pero sino con err.message mostrará
//el mensaje escrito en la condicion