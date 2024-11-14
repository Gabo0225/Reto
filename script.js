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

document.getElementById('sintomasForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío tradicional del formulario

    // Obtener la entrada del usuario y normalizarla
    const entrada = normalizarTexto(document.getElementById('symptom').value);

    let respuesta = "Lo siento, no pude detectar síntomas comunes en tu mensaje. ¿Podrías describir tus síntomas de manera más clara?";

    // Comparar la entrada con los síntomas comunes normalizados
    for (let sintoma of sintomasComunes) {
        if (entrada.includes(normalizarTexto(sintoma))) {
            respuesta = recomendaciones[sintoma] || "Lo siento, no puedo ofrecerte una recomendación para este síntoma.";
            break;
        }
    }

    // Mostrar la respuesta
    document.getElementById('respuesta').textContent = respuesta;

    // Mostrar el formulario de domicilio sin importar el síntoma
    document.getElementById('domicilioForm').style.display = "block";
});
    
