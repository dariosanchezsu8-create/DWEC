
//COMENZAMOS CON TYPESCRIPT
//Declaracion de una variable
let nombre: string="hola";
//se puede definir una variable con varios tipos
let mujer: string|number;
mujer="As";
mujer=12;
//se pueded declarar una variable que no sea de ningun tipo usando any
//creacion de una enum
enum Colores{Azul=32,Amarrillo=24,Rojo=2,Verde=5};
let color=Colores.Azul;
console.log(color);//imprimirá 5
//Esto dara el indice del color verde
//Este indice se puede modificar asignandole un valor a cada color

//Para crear una funcion. En el argumento se tiene que poner
//la variable u el tipo con :. Y luego la devolucion de la funcion
//void o tipo de variable como siempre
function primer(variable:string):void{

}
function primer1(variable:number): boolean{
return false;
}
