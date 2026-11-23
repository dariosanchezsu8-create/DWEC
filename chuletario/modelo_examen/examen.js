// Clases sencillas con getters y setters

class Item {
  #codigo;
  #valorA;
  #valorB;

  constructor(codigo, valorA, valorB) {
    this.#codigo = codigo;
    this.#valorA = valorA;
    this.#valorB = valorB;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get valorA() {
    return this.#valorA;
  }

  set valorA(nuevoValorA) {
    this.#valorA = nuevoValorA;
  }

  get valorB() {
    return this.#valorB;
  }

  set valorB(nuevoValorB) {
    this.#valorB = nuevoValorB;
  }
}

class ItemDestacado {
  #codigo;
  #resultado;

  constructor(codigo, resultado) {
    this.#codigo = codigo;
    this.#resultado = resultado;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get resultado() {
    return this.#resultado;
  }

  set resultado(nuevoResultado) {
    this.#resultado = nuevoResultado;
  }
}
// Arrays en memoria
const listaItems = [];
let listaDestacados = [];

// Inputs y elementos del HTML
const inputCodigo = document.getElementById("codigo");
const inputA = document.getElementById("datoA");
const inputB = document.getElementById("datoB");
const mensajes = document.getElementById("mensajes");
const zonaTabla = document.getElementById("resultadoTabla");

// Mostrar mensaje en pantalla
function mostrarMensaje(texto) {
  mensajes.textContent = texto;
}

// Fórmula de cálculo
function calcularValor(a, b) {
  return b / (a / 1000);
}

// Comprobar datos (si pedirCodigo es true, exige también el código)
function comprobarDatos(pedirCodigo) {
  const codigo = inputCodigo.value.trim();
  const textoA = inputA.value.trim();
  const textoB = inputB.value.trim();

  if (pedirCodigo && codigo === "") {
    mostrarMensaje("Escribe un código.");
    return null;
  }

  if (textoA === "" || textoB === "") {
    mostrarMensaje("Rellena los dos valores numéricos.");
    return null;
  }

  const a = Number(textoA);
  const b = Number(textoB);

  if (!Number.isInteger(a)) {
    mostrarMensaje("El primer valor tiene que ser un número entero.");
    return null;
  }

  if (!Number.isFinite(b)) {
    mostrarMensaje("El segundo valor tiene que ser un número válido.");
    return null;
  }

  if (a < 10 || b < 10) {
    mostrarMensaje("Los valores deben ser al menos 10.");
    return null;
  }

  return { codigo, a, b };
}

// Añadir o quitar de destacados si supera 4.5
function actualizarDestacado(codigo, resultado) {
  const posicion = listaDestacados.findIndex((item) => item.codigo === codigo);

  if (resultado > 4.5) {
    if (posicion !== -1) {
      listaDestacados[posicion].resultado = resultado;
    } else {
      listaDestacados.push(new ItemDestacado(codigo, resultado));
    }
  } else if (posicion !== -1) {
    listaDestacados.splice(posicion, 1);
  }
}

// Botón Añadir
function anadir() {
  const datos = comprobarDatos(true);
  if (!datos) return;

  const existe = listaItems.some((item) => item.codigo === datos.codigo);
  if (existe) {
    mostrarMensaje("Ese código ya existe.");
    return;
  }

  listaItems.push(new Item(datos.codigo, datos.a, datos.b));
  const resultado = calcularValor(datos.a, datos.b);
  actualizarDestacado(datos.codigo, resultado);

  mostrarMensaje("Añadido correctamente.");
}

// Botón Modificar
function modificar() {
  const datos = comprobarDatos(true);
  if (!datos) return;

  const item = listaItems.find((elem) => elem.codigo === datos.codigo);
  if (!item) {
    mostrarMensaje("No se encuentra ese código.");
    return;
  }

  item.valorA = datos.a;
  item.valorB = datos.b;

  const resultado = calcularValor(datos.a, datos.b);
  actualizarDestacado(datos.codigo, resultado);

  mostrarMensaje("Modificado correctamente.");
}

// Botón Calcular
function calcular() {
  const datos = comprobarDatos(false);
  if (!datos) return;

  const resultado = calcularValor(datos.a, datos.b);
  const dosDecimales = resultado.toFixed(2);

  let tipo = "Rendimiento normal";
  if (resultado < 2) {
    tipo = "Bajo rendimiento";
  } else if (resultado > 4.5) {
    tipo = "Alto rendimiento";
  }

  mostrarMensaje(`Resultado: ${dosDecimales} (${tipo})`);
}

// Botón Mostrar destacados
function mostrarTabla() {
  zonaTabla.innerHTML = "";

  if (listaDestacados.length === 0) {
    mostrarMensaje("No hay elementos destacados.");
    return;
  }

  let filas = "";
  for (const dest of listaDestacados) {
    const original = listaItems.find((item) => item.codigo === dest.codigo);
    const a = original ? original.valorA : "";
    const b = original ? original.valorB : "";

    filas += `
      <tr>
        <td>${dest.codigo}</td>
        <td>${a}</td>
        <td>${b}</td>
        <td>${dest.resultado.toFixed(2)}</td>
      </tr>
    `;
  }

  zonaTabla.innerHTML = `
    <table border="1">
      <tr>
        <th>Código</th>
        <th>Dato A</th>
        <th>Dato B</th>
        <th>Resultado</th>
      </tr>
      ${filas}
    </table>
  `;
}

// Eventos
document.getElementById("btnAdd").addEventListener("click", anadir);
document.getElementById("btnEdit").addEventListener("click", modificar);
document.getElementById("btnClc").addEventListener("click", calcular);
document.getElementById("btnMostrar").addEventListener("click", mostrarTabla);