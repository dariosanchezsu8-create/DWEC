class Ruta{
    #codigoRuta;
    #distancia;
    #desnivel;

    constructor(id, distancia,desnivel){
        this.#codigoRuta=id;
        this.#distancia=distancia;
        this.#desnivel=desnivel;
    }
    get Id(){
        return this.#codigoRuta;
    }

    get Distancia(){
        return this.#distancia;
    }    
    get Desnivel(){
        return this.#desnivel;
    }
    
    set Id(value){
        return this.#codigoRuta=value;
    }
    set Distancia(value){
        return this.#distancia=value;
    }
    set Desnivel(value){
        return this.#desnivel=value;
    }
}
//Clase panel de alto rendimiento
class RutaExigente{
    #codigoRuta;
    #dureza;

    constructor(id,dureza){
        this.#codigoRuta=id;
        this.#dureza=dureza;
    }
    get Id(){
        return this.#codigoRuta;
    }

    get Rendimiento(){
        return this.#dureza;
    }    
    set Id(value){
        return this.#codigoRuta=value;
    }
    set Dureza(value){
        return this.#dureza=value;
    }
}
let rutas=[]
let rutasExigentes=[];

const codigo=document.getElementById("");
const distancia=document.getElementById("");
const dureza=document.getElementById("");
const desnivel=document.getElementById("");
const mensajes=document.getElementById("");
const tablaInfo=document.getElementById("");


const calcularDureza=(des,dist)=>(des/dist);


function validarDatos(){
    let texto="";
    let cod=codigo.value.trim();
    let distan=distancia.value.trim();
    let desni=desnivel.value.trim();

    if(codigo===""){
        texto="Campo obligatorio";    
    }
    let distanInt=Number(distan);
    let desInt=Number(desni);


    if(distanInt<=5 || desni<=5 ){
        texto="Valores incorrectos. Al menos mayor de 5";
    }

    if(!Number.isFinite(distanInt)){
        texto="Numero invalido";
    }
    if(!Number.isInteger(desInt)){
        texto="Debe ser un numero entero";
    }  
    if(texto==""){
        return {codigo,desInt,distanInt};
    }else{
    document.getElementById("mensajes").textContent=texto;
}
}

function añadirRuta(){
    datos=validarDatos();
    if(!datos){return;}
    const { codigo, distancia, desnivel } = datos;
    const indice=rutas.find(p=>p.codigo===codigo);

    if(indice ==-1){
        rutas.push(new Ruta(codigo,distanInt,desInt));
        if(calcularDureza(desInt,distanInt)>30){
            RutaExigente.push(new RutaExigente(codigo,calcularDureza(desInt,distanInt)));
        }
    }else{
            document.getElementById("mensajes").textContent="Ruta ya existente";
    }

}
function modificarRutas(){
    datos=validarDatos();
    if(!datos){return;}
    const { codigo, distancia, desnivel } = datos;
    const indice=rutas.find(p=>p.codigo===codigo);

    if(indice !==-1){
        indice.desnivel=desInt;
        indice.distancia=distanInt;
    }else{
        document.getElementById("mensajes").textContent="Ruta no existente";
        return;
    }
    let durez=calcularDureza(desnivel,distancia);
    if(durez>30 && indice!==-1){
            indice.dureza
        
    }
}