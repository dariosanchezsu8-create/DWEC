//FUNCIONES LAMBA  O FUNCIONES ARROW
const suma = (a: number, b: number): number => a + b;
const factorial1 = (a: number): number => {
if (a <= 1) {
return 1;
}
return a * factorial1(a - 1);
};

//Si se quiere poner en un argumento de una funcion
//una variable de caracter opcional se pone la variable y una
//interrrogcion
const concatCadena=(a:string,b:string,c?:String):string =>a+b+c;

//ARRAYS
let colores:string[]=["rojo","verde","amarillo"];
console.log(`arrayDeColores: ${colores}`);
//Aqui los array pueden ser de diferentes tipados siempre y cuando
//se definan
let a: (string | number|boolean)[]=["Lunes", "Martes", 2, 4, 6];
console.log(a);
//Si se quisiera hacer un array de cualquier tipo se usaria any
let b: any[] = ["Lunes", "Martes", 2, false, 6];
//Curiosidad se puede acceder a una posicion inexistente
a[7] = "Juan"; // ahora a = ['Lunes', 'Martes', 2, 4, 6, , , 'Juan']

