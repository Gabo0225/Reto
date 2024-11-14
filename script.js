// Lista de síntomas comunes
const sintomasComunes = [
    "dolor de cabeza", "dolor de estómago", "fiebre", "tos", "dolor muscular", "náuseas", "fatiga", "dolor de garganta"
];

// Recomendaciones para cada síntoma
const recomendaciones = {
    "dolor de cabeza": "Te recomiendo descansar y tomar suficiente agua. Si persiste, puedes considerar analgésicos, pero asegúrate de no tener alergia a estos medicamentos.",
    "dolor de estómago": "Puedes intentar tomar un antiácido o descansar. Si el dolor persiste, es importante que consultes a un médico.",
    "fiebre": "Es importante que tomes líquidos y descanses. Puedes considerar medicamentos como paracetamol si no eres alérgico.",
    "tos": "Para la tos, se pueden usar jarabes expectorantes. Si es persistente, consulta a un médico.",
    "dolor muscular": "El dolor muscular puede aliviarse con descanso, calor local o analgésicos. Asegúrate de no tener alergias a estos medicamentos.",
    "náuseas": "Las náuseas pueden aliviarse con medicamentos antieméticos. Consulta a un médico si persisten.",
    "fatiga": "La fatiga puede estar relacionada con falta de descanso. Si persiste, consulta a un médico.",
    "dolor de garganta": "Puedes aliviar el dolor de garganta con gárgaras de agua tibia con sal y pastillas para la garganta."
};

// Función para normalizar texto (eliminar acentos y convertir a minúsculas)
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cuando el formulario de síntomas se envíe
document.getElementById('sintomasForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Obtener la entrada del usuario y normalizarla
    const entrada = normalizarTexto(document.getElementById('symptom').value);

    let respuesta = "Lo siento, no pude reconocer el síntoma que mencionas en tu mensaje. Si tu síntoma no está en las opciones, te recomiendo visitar a un profesional en la salud.";
    let sintomaValido = false;

    // Comparar la entrada con los síntomas comunes normalizados
    for (let sintoma of sintomasComunes) {
        if (entrada.includes(normalizarTexto(sintoma))) {
            respuesta = recomendaciones[sintoma] || "Lo siento, no puedo ofrecerte una recomendación para este síntoma.";
            sintomaValido = true;
            break;
        }
    }

    // Mostrar la respuesta
    document.getElementById('respuesta').textContent = respuesta;

    // Si el síntoma es válido, mostrar el formulario de domicilio
    if (sintomaValido) {
        document.getElementById('domicilioForm').style.display = "block";  // Mostrar formulario
        document.getElementById('symptom').style.display = "none";  // Ocultar campo de texto
        document.querySelector('button[type="submit"]').style.display = "none";  // Ocultar botón de enviar
        document.querySelector('.chatbot-body').style.display = "none";  // Ocultar lista de síntomas
    } else {
        document.getElementById('domicilioForm').style.display = "none";  // No mostrar formulario si el síntoma no es válido
    }
});

// Enviar el formulario de domicilio
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Obtener los valores de los campos
    const direccion = document.getElementById('direccion').value.trim();
    const medicamento = document.getElementById('medicamento').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();

    // Validar los campos
    if (direccion && medicamento && cantidad) {
        // Mostrar el mensaje de confirmación
        document.getElementById('respuesta').textContent = `Pedido confirmado. El domicilio será entregado en: ${direccion}. Medicamento: ${medicamento}, Cantidad: ${cantidad}.`;

        // Ocultar el formulario de domicilio después de enviar
        document.getElementById('domicilioForm').style.display = "none";
    } else {
        // Si algún campo está vacío, mostrar un mensaje
        document.getElementById('respuesta').textContent = "Por favor, completa todos los campos del formulario.";
    }
});
