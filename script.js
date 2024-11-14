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
};

// Código para capturar el síntoma del usuario, permitir selección de medicamento, y luego ir a la compra (como en el código anterior).


// Función para normalizar texto (eliminar acentos y convertir a minúsculas)
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cuando el formulario de síntomas se envíe
document.getElementById('sintomasForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Obtener la entrada del usuario y normalizarla
    const entrada = normalizarTexto(document.getElementById('symptom').value);

    let sintomaValido = false;
    let medicamentos = [];

    // Comparar la entrada con los síntomas comunes normalizados
    for (let sintoma of sintomasComunes) {
        if (entrada.includes(normalizarTexto(sintoma))) {
            medicamentos = recomendaciones[sintoma] || [];
            sintomaValido = true;
            break;
        }
    }

    // Mostrar la lista de medicamentos si el síntoma es válido
    if (sintomaValido && medicamentos.length > 0) {
        let medicamentosHTML = "<h3>Elige un medicamento:</h3>";
        medicamentos.forEach((medicamento, index) => {
            medicamentosHTML += `
                <div>
                    <input type="radio" name="medicamento" id="medicamento${index}" value="${medicamento.nombre}" data-efectos="${medicamento.efectos}" data-precio="${medicamento.precio}">
                    <label for="medicamento${index}">${medicamento.nombre} - ${medicamento.precio}</label>
                    <p>Efectos secundarios: ${medicamento.efectos}</p>
                </div>
            `;
        });

        medicamentosHTML += '<button id="confirmarMedicamento">Confirmar Medicamento</button>';
        document.getElementById('opcionesMedicamentos').innerHTML = medicamentosHTML;
        document.getElementById('opcionesMedicamentos').style.display = "block";
        document.getElementById('respuesta').textContent = ""; // Limpiar mensajes anteriores
    } else {
        document.getElementById('respuesta').textContent = "Lo siento, no pude reconocer el síntoma que mencionas en tu mensaje. Si tu síntoma no está en las opciones, te recomiendo visitar a un profesional en la salud.";
    }
});

// Escuchar el botón de confirmación de medicamento
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'confirmarMedicamento') {
        const medicamentoSeleccionado = document.querySelector('input[name="medicamento"]:checked');

        if (medicamentoSeleccionado) {
            const nombre = medicamentoSeleccionado.value;
            const efectos = medicamentoSeleccionado.getAttribute('data-efectos');
            const precio = medicamentoSeleccionado.getAttribute('data-precio');

            // Mostrar la información del medicamento seleccionado
            document.getElementById('respuesta').textContent = `Has seleccionado: ${nombre}. Efectos secundarios: ${efectos}. Precio: ${precio}.`;
            document.getElementById('domicilioForm').style.display = "block";
            document.getElementById('opcionesMedicamentos').style.display = "none";
        } else {
            document.getElementById('respuesta').textContent = "Por favor, selecciona un medicamento.";
        }
    }
});

// Enviar el formulario de domicilio
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Obtener los valores de los campos
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const medicamentoSeleccionado = document.querySelector('input[name="medicamento"]:checked').value;

    // Validar los campos
    if (direccion && telefono && cantidad) {
        // Mostrar el mensaje de confirmación
        document.getElementById('respuesta').textContent = `Pedido confirmado. Domicilio: ${direccion}, Teléfono: ${telefono}. Medicamento: ${medicamentoSeleccionado}, Cantidad: ${cantidad}.`;

        // Ocultar el formulario de domicilio después de enviar
        document.getElementById('domicilioForm').style.display = "none";
    } else {
        // Si algún campo está vacío, mostrar un mensaje
        document.getElementById('respuesta').textContent = "Por favor, completa todos los campos del formulario.";
    }
});

