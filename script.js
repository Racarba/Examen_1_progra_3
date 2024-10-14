    // Funcionalidad de arrastrar y soltar

const residuos = document.querySelectorAll('.draggable');
const contenedores = document.querySelectorAll('.contenedor');
const mensajeResultado = document.getElementById('mensaje-resultado');

residuos.forEach(residuo => {
    residuo.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('tipo', event.target.alt.toLowerCase());
    });
});

contenedores.forEach(contenedor => {
    contenedor.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    contenedor.addEventListener('drop', function(event) {
        const tipoResiduo = event.dataTransfer.getData('tipo');
        if (tipoResiduo === this.getAttribute('data-tipo')) {
            mostrarMensaje(true, tipoResiduo);
        } else {
            mostrarMensaje(false, tipoResiduo);
        }
    });
});

function mostrarMensaje(correcto, tipoResiduo) {
    if (correcto) {
        mensajeResultado.textContent = `¡Correcto! El residuo ${tipoResiduo} debe ir en este contenedor.`;
        mensajeResultado.style.color = "green";
    } else {
        mensajeResultado.textContent = `Incorrecto. El residuo ${tipoResiduo} no pertenece a este contenedor.`;
        mensajeResultado.style.color = "red";
    }
}

function imprimir(){

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var pais = document.getElementById("pais").value;

    document.getElementById('parrafo1').innerHTML = "Bienvenid@: "+nombre;
    document.getElementById('parrafo2').innerHTML = "Edad: "+edad+" años.";
    document.getElementById('parrafo3').innerHTML = "País: "+pais;
}

// Calculadora de Impacto Ecológico

function calcularImpacto() {
    const cantidadReciclada = document.getElementById('cantidad').value;
    const impacto = cantidadReciclada * 0.8; // Ejemplo: 0.8 kg de CO2 ahorrado por kilo reciclado
    document.getElementById('pcalc').textContent = `Has ahorrado ${impacto} kg de CO2. ¡Gran trabajo!`;
}