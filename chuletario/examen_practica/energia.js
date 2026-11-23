// Clases del proyecto EnergiaEx con getters y setters

class PanelSolar {
  #codigo;
  #potencia;
  #energia;

  constructor(codigo, potencia, energia) {
    this.#codigo = codigo;
    this.#potencia = potencia;
    this.#energia = energia;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get potencia() {
    return this.#potencia;
  }

  set potencia(nuevaPotencia) {
    this.#potencia = nuevaPotencia;
  }

  get energia() {
    return this.#energia;
  }

  set energia(nuevaEnergia) {
    this.#energia = nuevaEnergia;
  }
}

class PanelAltoRendimiento {
  #codigo;
  #rendimiento;

  constructor(codigo, rendimiento) {
    this.#codigo = codigo;
    this.#rendimiento = rendimiento;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get rendimiento() {
    return this.#rendimiento;
  }

  set rendimiento(nuevoRendimiento) {
    this.#rendimiento = nuevoRendimiento;
  }
}



// Lógica principal de EnergiaEx: colecciones, validaciones, botones y tabla

const panelesSolares = [];
let panelesAltoRendimiento = [];

// Elementos del DOM
const inputCodigo = document.getElementById("id");
const inputPotencia = document.getElementById("potencia");
const inputEnergia = document.getElementById("energia");
const zonaMensajes = document.getElementById("mensajes");
const contenedorTabla = document.getElementById("tablaAltoRendimiento");

// Escribe avisos y resultados en el DOM sin usar alert()
function escribirMensaje(texto) {
  zonaMensajes.textContent = texto;
}

// Rendimiento = energia / (potencia / 1000)
function calcularRendimiento(energia, potencia) {
  return energia / (potencia / 1000);
}

// Lee y valida los campos según la operación
function obtenerDatosValidados(exigeCodigo) {
  const codigo = inputCodigo.value.trim();
  const potTexto = inputPotencia.value.trim();
  const eneTexto = inputEnergia.value.trim();

  // 1. Campos obligatorios
  if (exigeCodigo && codigo === "") {
    escribirMensaje("Error: el código es obligatorio.");
    return null;
  }

  if (potTexto === "" || eneTexto === "") {
    escribirMensaje("Error: debes rellenar la potencia y la energía.");
    return null;
  }

  const potencia = Number(potTexto);
  const energia = Number(eneTexto);

  // 5. Potencia entera y energía número válido
  if (!Number.isInteger(potencia)) {
    escribirMensaje("Error: la potencia (W) debe ser un número entero.");
    return null;
  }

  if (!Number.isFinite(energia)) {
    escribirMensaje("Error: la energía (kWh) debe ser un número válido.");
    return null;
  }

  // 4. Ninguno puede ser menor que 10
  if (potencia < 10 || energia < 10) {
    escribirMensaje("Error: ni la potencia ni la energía pueden ser menores que 10.");
    return null;
  }

  return { codigo, potencia, energia };
}

// Añade/actualiza o elimina el panel de la colección de alto rendimiento (> 4.5)
function sincronizarAltoRendimiento(codigo, rendimiento) {
  const indice = panelesAltoRendimiento.findIndex((p) => p.codigo === codigo);

  if (rendimiento > 4.5) {
    if (indice !== -1) {
      panelesAltoRendimiento[indice].rendimiento = rendimiento;
    } else {
      panelesAltoRendimiento.push(new PanelAltoRendimiento(codigo, rendimiento));
    }
  } else if (indice !== -1) {
    // Si deja de superar 4.5, se elimina de la colección de alto rendimiento
    panelesAltoRendimiento.splice(indice, 1);
  }
}

// Botón Añadir
function añadirPanel() {
  const datos = obtenerDatosValidados(true);
  if (!datos) return;

  // 2. Impedir duplicar códigos existentes
  const existe = panelesSolares.some((p) => p.codigo === datos.codigo);
  if (existe) {
    escribirMensaje(`Error: ya existe un panel con el código "${datos.codigo}".`);
    return;
  }

  const panel = new PanelSolar(datos.codigo, datos.potencia, datos.energia);
  panelesSolares.push(panel);

  const rendimiento = calcularRendimiento(datos.energia, datos.potencia);
  sincronizarAltoRendimiento(datos.codigo, rendimiento);

  escribirMensaje(`Panel "${datos.codigo}" añadido correctamente.`);
}

// Botón Modificar
function modificarPanel() {
  const datos = obtenerDatosValidados(true);
  if (!datos) return;

  // 3. Comprobar que el código existe
  const panel = panelesSolares.find((p) => p.codigo === datos.codigo);
  if (!panel) {
    escribirMensaje(`Error: no existe ningún panel con el código "${datos.codigo}".`);
    return;
  }

  panel.potencia = datos.potencia;
  panel.energia = datos.energia;

  const rendimiento = calcularRendimiento(datos.energia, datos.potencia);
  sincronizarAltoRendimiento(datos.codigo, rendimiento);

  escribirMensaje(`Panel "${datos.codigo}" modificado correctamente.`);
}

// Botón Calcular (no añade ni modifica, ni exige código)
function calcular() {
  const datos = obtenerDatosValidados(false);
  if (!datos) return;

  const rendimiento = calcularRendimiento(datos.energia, datos.potencia);
  const rendDosDecimales = rendimiento.toFixed(2);

  let nivel = "";
  if (rendimiento < 2) {
    nivel = "Bajo rendimiento";
  } else if (rendimiento <= 4.5) {
    nivel = "Rendimiento normal";
  } else {
    nivel = "Alto rendimiento";
  }

  escribirMensaje(`Rendimiento: ${rendDosDecimales} (${nivel}).`);
}

// Botón Mostrar paneles de alto rendimiento
function mostrarPanelesAltoRendimiento() {
  // Evita duplicar tablas/filas al pulsar varias veces
  contenedorTabla.innerHTML = "";

  if (panelesAltoRendimiento.length === 0) {
    escribirMensaje("No hay paneles de alto rendimiento registrados.");
    return;
  }

  let filasHTML = "";
  for (const panelAlto of panelesAltoRendimiento) {
    const panelBase = panelesSolares.find((p) => p.codigo === panelAlto.codigo);
    const potencia = panelBase ? panelBase.potencia : "";
    const energia = panelBase ? panelBase.energia : "";
    const rendimiento = panelAlto.rendimiento.toFixed(2);

    filasHTML += `
      <tr>
        <td>${panelAlto.codigo}</td>
        <td>${potencia}</td>
        <td>${energia}</td>
        <td>${rendimiento}</td>
      </tr>
    `;
  }

  contenedorTabla.innerHTML = `
    <table border="1">
      <thead>
        <tr>
          <th>Código</th>
          <th>Potencia (W)</th>
          <th>Energía (kWh)</th>
          <th>Rendimiento</th>
        </tr>
      </thead>
      <tbody>
        ${filasHTML}
      </tbody>
    </table>
  `;

  escribirMensaje("");
}

// Eventos de los botones
document.getElementById("btnAdd").addEventListener("click", añadirPanel);
document.getElementById("btnEdit").addEventListener("click", modificarPanel);
document.getElementById("btnClc").addEventListener("click", calcular);
document.getElementById("btnAltaRendimiento").addEventListener("click", mostrarPanelesAltoRendimiento);