//EJERCICIOS PARA PRACTICAR
//Ejercicio 5
function factorialArray(){
numerosArray=[]
    for(i=0;i<25;i++){
        numerosArray.push(i+1);
}
//console.log(numerosArray);
console.log(numerosArray);
numerosArray.forEach((valor)=>{
    console.log(valor+" | "+factorial(valor));
});


}

function factorial(n){
    let contador=n-1;
    let operacion=1;
    while(contador>=0){
        operacion+=operacion*contador;
        contador--;
    }
   return operacion;
}

//factorialArray();
//EJERCICIO 6
function suma(){
    entradaUno=prompt("Ingrese un valor");
    entradaDos=prompt("Ingrese un segundo valor");
    let resultado=entradaUno+entradaDos;
    console.log(resultado);
    alert(resultado);
}
//suma();

//EJERCICIO 7sds
function validacionDato(){
    dato=prompt("Ingrese un valor");
    dato=String(dato);
    dato=dato.trim().toLowerCase();
    
    let letras=dato.split("");
    const alfabeto = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", 
  "t", "u", "v", "w", "x", "y", "z"
];
//Para comprobar si un valor existe dentro de un array con includes
for(i=0;i<letras.length;i++){
let esValido=alfabeto.includes(letras[i]);
if(esValido){
    alert("El valor "+letras[i]+" es de caracter alfabetico");
}else{
    alert("El valor "+letras[i]+" no es de caracter albetico");
    }
}
}
validacionDato();