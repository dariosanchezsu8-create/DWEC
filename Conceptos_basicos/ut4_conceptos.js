//DOM
//Se puede acceder a las etiquetas del HTML con lo siguiente
// const variable=document.documentElement;
// console.log("JS cargado correctamente");
//Ya que document tiene atributos tambien poder acceder
// //a diferentes etiquetas
// variable=document.firstChild//se accede al hijo de la etiqueta
// //atributos lastchild,parentNode(etiqueta padre),childNodes[array de hijos]

// //Con el nodo tipo elemetnos podemos acceder a atributos de la etiqueta
// //Con esto podemos coger los elementos de una etiqueta
// const elemento = document.getElementById("Ejemplo");
// //Cambiar el id por otro
// elemento=elemento.setAttribute("id","cambio");

// //Muchas funciones pero el que mas vamos a usar es=getElementByID
// //sirve para coger el valor de una etiqueta

// //Util=por ejemplo al sacar valores de un formulario podemos
// //dejarlo limpios otra vez los inputs
// document.getElementById("txtEntrada").value = "";

// //Tambien a traves de js se puede añadir css a las etiquetas

// elemento = document.getElementById("Ejemplo");
// elemento.classList.add("blue");

// //Quitar clases o cambiarlas por otras
// elemento.classList.remove("blue");
// elemento.classList.toggle("blue");



//MODELO DE EVENTOS
//addEventListener para escuchar elemetnos
//primero funcion por ejemplo:
// const saludarUnaVez = () => {
// alert("Hola, mundo");
// };
// const colorear = () => (document.getElementById("w3c").style.color = "red");
// document.getElementById("w3c").addEventListener("click",saludarUnaVez);
// document.getElementById("w3c").addEventListener("click",colorear);
// //Si solo quieres que lo haga una vez poner el addEvbenetListener dentro d lafuncion
// w3c.addEventListener("click", saludarUnaVez, {once: true});


// //Alternativa para poner una funcion en el addEventListener
// //pero solo con la funcion tradicional, no con arrow function
// document.getElementById("w3canonima").addEventListener("click",
// function () {
// this.style.background = "#C0C0C0";
// });

// //Para trabajar con js en un formulario hay que poner siempre
// const form = document.querySelector("form");


// //textContent y innerHTML
// //TextContnet para modificar o leer texto de un elemento
// document.getElementById("output").textContent = "valor";

// //Si el contenido conlleva etiquetas
// document.getElementById("output").innerHTML = "<b>valor</b>";

//Para crear un elemento o añadir un nuevo contenido a un elemento
const target = document.getElementById('target');
let nuevoContenido = document.createTextNode("Texto agregado");
target.appendChild(nuevoContenido);
//Append/AppendChild es lo mismo