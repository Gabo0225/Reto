// Lista de síntomas comunes
const sintomasComunes = [
    "dolor de cabeza", "dolor de estómago", "fiebre", "tos", "dolor muscular", "náuseas", "fatiga", "dolor de garganta"
];

// Recomendaciones de medicamentos (10 opciones por síntoma), incluyendo efectos secundarios y precios en COP
const recomendaciones = {
    "dolor de cabeza": [
        { nombre: "Ibuprofeno", efectos: "Puede causar malestar estomacal", precio: "COP 2,500" },
        { nombre: "Paracetamol", efectos: "Generalmente seguro, puede causar somnolencia", precio: "COP 1,500" },
        { nombre: "Aspirina", efectos: "Puede causar irritación estomacal", precio: "COP 3,000" },
        { nombre: "Naproxeno", efectos: "Puede causar dolor estomacal", precio: "COP 3,500" },
        { nombre: "Diclofenaco", efectos: "Puede causar mareos", precio: "COP 4,000" },
        { nombre: "Ketorolaco", efectos: "Puede causar somnolencia", precio: "COP 5,000" },
        { nombre: "Acetaminofén", efectos: "Generalmente seguro", precio: "COP 1,800" },
        { nombre: "Meloxicam", efectos: "Puede causar mareos", precio: "COP 6,000" },
        { nombre: "Metamizol", efectos: "Puede causar baja presión", precio: "COP 2,200" },
        { nombre: "Tramadol", efectos: "Puede causar náuseas", precio: "COP 7,000" }
    ],
    "dolor de estómago": [
        { nombre: "Omeprazol", efectos: "Puede causar dolor de cabeza", precio: "COP 2,000" },
        { nombre: "Ranitidina", efectos: "Puede causar mareo", precio: "COP 3,500" },
        { nombre: "Esomeprazol", efectos: "Puede causar malestar estomacal", precio: "COP 4,500" },
        { nombre: "Almagato", efectos: "Puede causar diarrea", precio: "COP 2,200" },
        { nombre: "Bromuro de pinaverio", efectos: "Puede causar dolor de cabeza", precio: "COP 5,000" },
        { nombre: "Meperidina", efectos: "Puede causar mareo", precio: "COP 6,000" },
        { nombre: "Hioscina", efectos: "Puede causar somnolencia", precio: "COP 3,000" },
        { nombre: "Metoclopramida", efectos: "Puede causar cansancio", precio: "COP 2,500" },
        { nombre: "Lansoprazol", efectos: "Puede causar dolor de cabeza", precio: "COP 4,800" },
        { nombre: "Famotidina", efectos: "Puede causar malestar estomacal", precio: "COP 3,800" }
    ],
    "fiebre": [
        { nombre: "Paracetamol", efectos: "Generalmente seguro, puede causar somnolencia", precio: "COP 1,500" },
        { nombre: "Ibuprofeno", efectos: "Puede causar dolor estomacal", precio: "COP 2,500" },
        { nombre: "Aspirina", efectos: "Puede causar irritación estomacal", precio: "COP 3,000" },
        { nombre: "Diclofenaco", efectos: "Puede causar mareos", precio: "COP 4,000" },
        { nombre: "Metamizol", efectos: "Puede causar baja presión", precio: "COP 2,200" },
        { nombre: "Naproxeno", efectos: "Puede causar dolor estomacal", precio: "COP 3,500" },
        { nombre: "Meloxicam", efectos: "Puede causar mareos", precio: "COP 6,000" },
        { nombre: "Tramadol", efectos: "Puede causar náuseas", precio: "COP 7,000" },
        { nombre: "Acetaminofén", efectos: "Generalmente seguro", precio: "COP 1,800" },
        { nombre: "Ketoprofeno", efectos: "Puede causar irritación gástrica", precio: "COP 5,500" }
    ],
    "tos": [
        { nombre: "Ambroxol", efectos: "Puede causar irritación en la garganta", precio: "COP 3,000" },
        { nombre: "Dextrometorfano", efectos: "Puede causar somnolencia", precio: "COP 2,800" },
        { nombre: "Guaifenesina", efectos: "Puede causar mareos", precio: "COP 3,200" },
        { nombre: "Cloperastina", efectos: "Puede causar sequedad en boca", precio: "COP 3,500" },
        { nombre: "Bromhexina", efectos: "Puede causar molestias gástricas", precio: "COP 4,000" },
        { nombre: "Carbocisteína", efectos: "Puede causar náuseas", precio: "COP 3,800" },
        { nombre: "Levodropropizina", efectos: "Puede causar somnolencia", precio: "COP 4,500" },
        { nombre: "Codeína", efectos: "Puede causar somnolencia", precio: "COP 5,000" },
        { nombre: "Loratadina", efectos: "Puede causar sequedad en la boca", precio: "COP 2,500" },
        { nombre: "Fenilefrina", efectos: "Puede causar mareos", precio: "COP 2,700" }
    ],
    "dolor muscular": [
        { nombre: "Ibuprofeno", efectos: "Puede causar dolor estomacal", precio: "COP 2,500" },
        { nombre: "Naproxeno", efectos: "Puede causar dolor estomacal", precio: "COP 3,500" },
        { nombre: "Diclofenaco", efectos: "Puede causar mareos", precio: "COP 4,000" },
        { nombre: "Ketorolaco", efectos: "Puede causar somnolencia", precio: "COP 5,000" },
        { nombre: "Meloxicam", efectos: "Puede causar mareos", precio: "COP 6,000" },
        { nombre: "Metamizol", efectos: "Puede causar baja presión", precio: "COP 2,200" },
        { nombre: "Acetaminofén", efectos: "Generalmente seguro", precio: "COP 1,800" },
        { nombre: "Tramadol", efectos: "Puede causar náuseas", precio: "COP 7,000" },
        { nombre: "Paracetamol", efectos: "Generalmente seguro, puede causar somnolencia", precio: "COP 1,500" },
        { nombre: "Clonixinato de lisina", efectos: "Puede causar molestias gástricas", precio: "COP 5,000" }
    ],
    "náuseas": [
        { nombre: "Metoclopramida", efectos: "Puede causar somnolencia", precio: "COP 2,500" },
        { nombre: "Domperidona", efectos: "Puede causar sequedad en la boca", precio: "COP 3,000" },
        { nombre: "Ondansetrón", efectos: "Puede causar dolor de cabeza", precio: "COP 5,500" },
        { nombre: "Meclizina", efectos: "Puede causar somnolencia", precio: "COP 4,500" },
        { nombre: "Dimenhidrinato", efectos: "Puede causar somnolencia", precio: "COP 3,000" },
        { nombre: "Prometazina", efectos: "Puede causar sequedad en la boca", precio: "COP 3,800" },
        { nombre: "Clorpromazina", efectos: "Puede causar mareo", precio: "COP 4,200" },
        { nombre: "Proclorperazina", efectos: "Puede causar somnolencia", precio: "COP 4,000" },
        { nombre: "Escopolamina", efectos: "Puede causar visión borrosa", precio: "COP 3,500" },
        { nombre: "Ciclizina", efectos: "Puede causar somnolencia", precio: "COP 3,200" }
    ],
    "fatiga": [
        { nombre: "Suplemento de hierro", efectos: "Puede causar estreñimiento", precio: "COP 5,000" },
        { nombre: "Complejo B", efectos: "Generalmente seguro", precio: "COP 4,500" },
        { nombre: "Vitamina C", efectos: "Generalmente seguro", precio: "COP 2,500" },
        { nombre: "Magnesio", efectos: "Puede causar diarrea en dosis altas", precio: "COP 3,000" },
        { nombre: "Ginseng", efectos: "Puede causar insomnio", precio: "COP 6,500" },
        { nombre: "Cafeína", efectos: "Puede causar nerviosismo", precio: "COP 2,000" },
        { nombre: "Taurina", efectos: "Puede causar aumento del ritmo cardíaco", precio: "COP 3,500" },
        { nombre: "Multivitamínico", efectos: "Generalmente seguro", precio: "COP 4,000" },
        { nombre: "L-Carnitina", efectos: "Puede causar malestar estomacal", precio: "COP 5,000" },
        { nombre: "Coenzima Q10", efectos: "Generalmente seguro", precio: "COP 8,000" },
        { nombre: "Ashwagandha", efectos: "Puede causar somnolencia", precio: "COP 7,500" },
        { nombre: "Rhodiola", efectos: "Puede causar mareos", precio: "COP 7,000" }
    ],
    "dolor de garganta": [
        { nombre: "Benzocaína", efectos: "Puede causar entumecimiento", precio: "COP 3,000" },
        { nombre: "Acetaminofén", efectos: "Generalmente seguro", precio: "COP 1,800" },
        { nombre: "Lidocaína", efectos: "Puede causar irritación local", precio: "COP 3,500" },
        { nombre: "Ibuprofeno", efectos: "Puede causar dolor estomacal", precio: "COP 2,500" },
        { nombre: "Aspirina", efectos: "Puede causar irritación estomacal", precio: "COP 3,000" },
        { nombre: "Mentol", efectos: "Puede causar sensación de frescor", precio: "COP 1,500" },
        { nombre: "Gárgaras de sal", efectos: "Generalmente seguro", precio: "COP 500" },
        { nombre: "Jarabe de miel", efectos: "Generalmente seguro", precio: "COP 2,000" },
        { nombre: "Té de jengibre", efectos: "Puede causar irritación gástrica", precio: "COP 1,000" },
        { nombre: "Clorfenamina", efectos: "Puede causar somnolencia", precio: "COP 2,200" }
    ]
// Función para normalizar texto
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Manejar el envío del formulario de síntomas
document.getElementById('sintomasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const entrada = normalizarTexto(document.getElementById('symptom').value);
    const sintomasValidos = Object.keys(medicamentos);

    let sintomaValido = sintomasValidos.find(sintoma => entrada.includes(sintoma));
    if (sintomaValido) {
        mostrarMedicamentos(sintomaValido);
    } else {
        document.getElementById('respuesta').textContent = "No reconocí el síntoma.";
    }
});

// Mostrar lista de medicamentos para el síntoma seleccionado
function mostrarMedicamentos(sintoma) {
    document.getElementById('respuesta').textContent = `Para ${sintoma}, selecciona un medicamento:`;
    const lista = document.getElementById('listaMedicamentos');
    lista.innerHTML = '';

    medicamentos[sintoma].forEach((medicamento, index) => {
        const item = document.createElement('div');
        item.classList.add('medicamento-item');
        item.innerHTML = `
            <strong>${medicamento.nombre}</strong> - ${medicamento.efectos} - Precio: ${medicamento.precio}
            <button onclick="seleccionarMedicamento('${sintoma}', ${index})">Seleccionar</button>
        `;
        lista.appendChild(item);
    });

    document.getElementById('medicamentosSeleccion').style.display = "block";
}

// Seleccionar un medicamento y confirmar la compra
function seleccionarMedicamento(sintoma, index) {
    const medicamento = medicamentos[sintoma][index];
    document.getElementById('medicamentoSeleccionado').value = medicamento.nombre;
    document.getElementById('confirmarMedicamento').style.display = "inline-block";
}

// Confirmar el medicamento y pasar al formulario de domicilio
document.getElementById('confirmarMedicamento').addEventListener('click', function() {
    document.getElementById('medicamentosSeleccion').style.display = "none";
    document.getElementById('domicilioForm').style.display = "block";
});

// Manejar el formulario de domicilio
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const direccion = document.getElementById('direccion').value.trim();
    const medicamento = document.getElementById('medicamentoSeleccionado').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const numeroContacto = document.getElementById('numeroContacto').value.trim();

    if (direccion && medicamento && cantidad && numeroContacto) {
        document.getElementById('respuesta').textContent = `Pedido confirmado: ${medicamento}, Cantidad: ${cantidad}. Entrega en: ${direccion}. Contacto: ${numeroContacto}.`;
        document.getElementById('domicilioForm').style.display = "none";
        document.getElementById('volverAlInicio').style.display = "block";
    } else {
        document.getElementById('respuesta').textContent = "Por favor, completa todos los campos.";
    }
});

// Volver al inicio
document.getElementById('nuevoPedido').addEventListener('click', function() {
    document.getElementById('sintomasForm').reset();
    document.getElementById('pedidoForm').reset();
    document.getElementById('respuesta').textContent = '';
    document.getElementById('medicamentosSeleccion').style.display = "none";
    document.getElementById('domicilioForm').style.display = "none";
    document.getElementById('volverAlInicio').style.display = "none";
});
