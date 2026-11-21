//Practica Ejercicio Tipo Examen
class Contenedor{
    referencia;
    veso;
    volumen;
    //Constructor del objeto contenedor
    constructor(id, peso, volumen) {
        this.referencia=id;
        this.Peso=peso;
        this.volumen=volumen;
    }
    get Referencia(){
        return this.referencia;
    }
    get Peso(){
        return this.peso;
    }
    get Volumen(){
        return this.volumen;
    }
    set Referencia(valor){
        return this.referencia=valor;
    }
        set Peso(valor){
        return this.peso=valor;
    }
        set Volumen(valor){
        return this.volumen=valor;
    }
}

class ContenedorAltaDensidad{
    referencia;
    densidad;
    //Constructor del objeto contenedoraltadensidad
    constructor(id, densidad){
        this.densidad=densidad;
        this.referencia=id;
    }
    get Referencia(){
        return this.Referencia;
    }
    get Densidad(){
        return this.Densidad;
    }
    set Referencia(valor){
        return this.referencia=valor;
    }
    set Densidad(valor){
        return this.densidad=valor;
    }
    mostrarInfo(){
        return "Contenedor:Contenedor Alta Densidad"+"\n"
                +" Referencia: "+Referencia()+"\n"
                +"Densidad: "+this.densidad;
                
            
    

    }
}
//Calculo de la densidad y clasificacion
const calcularDensidad=(a,b)=>a/b;
function clasificacionDensidad(dato){
    texto="";
    if(dato<=1){
        texto="Baja Densidad";
    }else if(dato>1 && dato<=2.5){
    texto="Densidad normal";
    }else{
        texto="Alta Densidad";
    }
    return texto;
}
const ref=(string).document.getElementById("ref");
const peso=(string).document.getElementById("peso");
const volumen=(string).document.getElementById("vol");

if(peso<10 || volumen<10){
     alert("Valor invalido. Deber ser mayor que 10");
}
if(peso==NaN || volumen==NaN){
    alert("Valor inválido. Debe ser un numero entero");
}
//Creacion de instancias
const Contenedor= new Contenedor(new Contenedor(ref,peso,volumen));
const ContenedorAltaDensidad= new ContenedorAltaDensidad(new ContenedorAltaDensidad(ref,calcularDensidad(peso,volumen)));

//Comprobacion y creacion de objeto de contendor de alta densidad



function añadirContenedores(contenedorAlta, contenedor,ref,peso,volumen){
    for(const valores in contenedor){
        if(ref==valores){
            alert("Contenedor ya existente");
        }else{
            if(calcularDensidad(peso,volumen)>2.5){
                ContenedorAltaDensidad=new ContenedorAltaDensidad(new ContenedorAltaDensidad(ref,calcularDensidad(peso,volumen)));
           }else{
             Contenedor= new Contenedor(new Contenedor(ref,peso,volumen));
           }
        }
}
}
//Metodo modificar contenedores ya existentes
const modificacionContenedor=(ref,peso,volumen,contenedor)=>{
  
    for(const valores in contenedor){
        if(ref!=valores){
            alert("Referencia inexistente");
        }else{
          let resultado=calcularDensidad(peso,volumen);
             if(resultado>2.5){
               ContenedorAltaDensidad(new ContenedorAltaDensidad(ref, calcularDensidad(peso,volumen)));
        }
    }
}
}
//Llamadas a los botones (Eventos)
btnAdd.addEventListener("click",function() {añadirContenedores(Contenedor,ContenedorAltaDensidad,ref,peso,volumen);});
btnAdd.addEventListener("click",function() {modificacionContenedor(ref,peso,volumen,Contenedor);});
btnAdd.addEventListener("click",function() {clasificacionDensidad(calcularDensidad(peso,volumen)); });
btnAltaDensidad.addEventListener("click", mostrarTablaAltaDensidad);

//Mostrar 
ContenedorAltaDensidad.mostrarInfo();