//Clase panel solar convencional
//CLASES SIEMPRE PRIVADAS
class PanelSolar{
    #id;
    #potenciaP;
    #energiaG;

    constructor(id, potencia,energia){
        this.id=id;
        this.energiaG=energia;
        this.potenciaP=potencia;
    }
    get Id(){
        return this.id;
    }

    get Potencia(){
        return this.potenciaP;
    }    
    get Energia(){
        return this.energiaG;
    }
    
    set Id(value){
        return this.id=value;
    }
    set Potencia(value){
        return this.potenciaP=value;
    }
    set Energia(value){
        return this.energiaG=value;
    }
}
//Clase panel de alto rendimiento
class PanelAltoRendimiento{
    id;
    rendimiento;

    constructor(id,rendimiento){
        this.id=id;
        this.rendimiento=rendimiento;
    }
    get Id(){
        return this.id;
    }

    get Rendimiento(){
        return this.rendimiento;
    }    
    set Id(value){
        return this.id=value;
    }
    set Rendimiento(value){
        return this.rendimiento=value;
    }
}

//EVENTOS Y FUNCIONES DE LA APP

const panelSolar=[];
const panelAltoRendimiento=[];


//Asi no se cogen los valores 
let id=document.getElementById("id");
let potencia=document.getElementById("potencia");
let ener=document.getElementById("energia");
//Sino de esta manera para que luego no den eel problema del NAN
//al trabajr con ellos
variable.value.trim();

//Poner esto para realizar las validaciones de las variables
potenciaInt=Number(potencia);
energiaInt=Number(ener);

//Validaciones
function validarEntradas(id, potencia, energia){
   //añadir el let y const siempre 
    let texto="";
    if(id=="" || potencia=="" || energia==""){
        texto="Campos vacios";
    }
    if(potencia<10 || energia<10){
        texto="Valores inválidos";
    }
    //isInteger para comprobar si es un unumero entero
    if(!Number.isInteger(potencia)){
        texto="Debe ser un numero entero";
    }
    //isFinite para comprobar q  el valor es un numero
    if(!Number.isFinite(energia)){
        texto="Debe ser una valor numérico";
    }
    if(texto==""){
        return potencia,id,energia;
    }else{
    document.getElementById("mensajes").textContent=texto;
}
}


const calcularRendimiento=(ener,potencia)=>(ener/(potencia/1000));

function añadirPanel(id,potencia,ener,panelSolar,panelAltoRendimiento){
   
    let resultado= calcularRendimiento(ener,potencia);
    for(let valores of panelSolar ){
        if(id!==valores.id){
            panelSolar.push(new PanelSolar(id,potencia,ener));
        }else{
            let contenido="La referencia ya existe";
            const p=document.getElementById("mensajes");
            p.append(contenido);
        }
    }
    if(resultado>4.5){
        panelAltoRendimiento.push(new PanelAltoRendimiento(id,calcular(potencia,ener)));
    }
}

function modificarPanel(refer,nuevaPotencia,nuevaEnergia){
    for(const panel of panelSolar){
        if(refer==panel.id ){
            let resultado=calcularRendimiento(nuevaEnergia,nuevaPotencia);
            if(resultado<=4.5){
            panel.Energia=nuevaEnergia;
            panel.Potencia=nuevaPotencia;
            }else{
                panelAltoRendimiento.push(new PanelAltoRendimiento(refer,resultado));
            }
        }else{
            let nuevoContenido="Referencia no existente";
            const p=document.getElementById("mensajes");
            p.append(nuevoContenido);
        
        }

    }
    
}
function modificarPanelAltaRendimiento(refer,nuevaPotencia,nuevaEnergia){
    for(const panel of panelAltoRendimiento){
        if(refer==panel.id ){
        let resultado=calcularRendimiento(nuevaEnergia,nuevaPotencia);
            if(resultado>4.5){
            panel.rendimiento=resultado;
            }else{
                const indice =panelAltoRendimiento.findIndex(p=>p.id===refer);
                if(indice!==-1){
                panelAltoRendimiento.splice(indice,1);
                }
            }
        }else{
            let nuevoContenido="Referencia no existente";
            const p=document.getElementById("mensajes");
            p.append(nuevoContenido);
        
        }
    }
}
function modificarPaneles(refer,nuevaPotencia,nuevaEnergia){
    modificarPanel(refer,nuevaPotencia,nuevaEnergia);
    modificarPanelAltaRendimiento(refer,nuevaPotencia,nuevaEnergia);
}

function calcular(potencia,energia){
   let resultado=calcularRendimiento(energia,potencia);
   texto="";
   if(resultado<2){
        texto="Bajo rendimiento";
   }else if(resultado>=2 && resultado<=4.5){
        texto="Rendimiento normal";
   }else{
        texto="Alto rendimiento";
   }
   document.getElementById("mensajes").textContent=texto;
}

function mostrarInfo(panelAlta){

}


//Botones Evento
//Esto no vale pq asi se ejecuta nada mas cargar la pagina 
//deber ser con glecha
//("click",function()=>{}));
document.getElementById("btnAdd").addEventListener("click",añadirPanel());
document.getElementById("btnEdit").addEventListener("click",modificarPaneles());
document.getElementById("btnClc").addEventListener("click",calcular());
document.getElementById("btnAltaRendimiento").addEventListener("click",mostrarInfo());