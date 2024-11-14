// Lista de síntomas comunes
const sintomasComunes = [
    "dolor de cabeza", "dolor de estómago", "fiebre", "tos", "dolor muscular", "náuseas", "fatiga", "dolor de garganta"
];

// Recomendaciones de medicamentos para cada síntoma
const recomendaciones = {
    "dolor de cabeza": "Para el dolor de cabeza, puedes tomar ibuprofeno o paracetamol (consultando la dosis apropiada). No tomes estos medicamentos si eres alérgico o tienes contraindicaciones.",
    "dolor de estómago": "Para el dolor de estómago, puedes considerar un antiácido como el omeprazol o ranitidina. Consulta a un médico si el dolor persiste o empeora.",
    "fiebre": "Para bajar la fiebre, puedes tomar paracetamol. Asegúrate de no exceder la dosis recomendada y consulta a un médico si la fiebre persiste.",
    "tos": "Para la tos, un jarabe expectorante como ambroxol o un antitusivo como dextrometorfano puede ayudar. Consulta la dosis adecuada o habla con un profesional si persiste.",
    "dolor muscular": "Para el dolor muscular, ibuprofeno o naproxeno pueden ser útiles. Asegúrate de no tener alergias o contraindicaciones para estos medicamentos.",
    "náuseas": "Para las náuseas, puedes usar medicamentos antieméticos como metoclopramida. Consulta con un profesional antes de tomarlo.",
    "fatiga": "Para la fatiga, descansa y asegúrate de estar bien hidratado. Si la fatiga persiste, consulta a un médico para un diagnóstico adecuado.",
    "dolor de garganta": "Para el dolor de garganta, puedes utilizar pastillas con benzocaína o hacer gárgaras con agua tibia con sal. Consulta con un médico si el dolor empeora."
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
        document.getElementById('respuesta').textContent = Pedido confirmado. El domicilio será entregado en: ${direccion}. Medicamento: ${medicamento}, Cantidad: ${cantidad}.;

        // Ocultar el formulario de domicilio después de enviar
        document.getElementById('domicilioForm').style.display = "none";
    } else {
        // Si algún campo está vacío, mostrar un mensaje
        document.getElementById('respuesta').textContent = "Por favor, completa todos los campos del formulario.";
    }
});
