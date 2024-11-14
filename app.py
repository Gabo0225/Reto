from flask import Flask, render_template, request
import nltk
from nltk.tokenize import word_tokenize

# Asegúrate de que tienes los recursos de NLTK descargados
nltk.download('punkt')

app = Flask(__name__)

# Lista de síntomas comunes
sintomas_comunes = [
    "dolor de cabeza", "dolor de estómago", "fiebre", "tos", "dolor muscular", "náuseas", "fatiga", "dolor de garganta"
]

# Recomendaciones para cada síntoma
recomendaciones = {
    "dolor de cabeza": "Te recomiendo descansar y tomar suficiente agua. Si persiste, puedes considerar analgésicos, pero asegúrate de no tener alergia a estos medicamentos.",
    "dolor de estómago": "Puedes intentar tomar un antiácido o descansar. Si el dolor persiste, es importante que consultes a un médico.",
    "fiebre": "Es importante que tomes líquidos y descanses. Puedes considerar medicamentos como paracetamol si no eres alérgico.",
    "tos": "Para la tos, se pueden usar jarabes expectorantes. Si es persistente, consulta a un médico.",
    "dolor muscular": "El dolor muscular puede aliviarse con descanso, calor local o analgésicos. Asegúrate de no tener alergias a estos medicamentos.",
    "náuseas": "Las náuseas pueden aliviarse con medicamentos antieméticos. Consulta a un medico si persisten.",
    "fatiga": "La fatiga puede estar relacionada con falta de descanso. Si persiste, consulta a un médico.",
    "dolor de garganta": "Puedes aliviar el dolor de garganta con gárgaras de agua tibia con sal y pastillas para la garganta."
}

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        entrada_usuario = request.form['symptom']  # Obtener el síntoma escrito por el usuario
        respuesta = procesar_entrada(entrada_usuario)
        return render_template('index.html', respuesta=respuesta)
    return render_template('index.html')

def procesar_entrada(entrada_usuario):
    # Tokenizamos la entrada del usuario
    palabras = word_tokenize(entrada_usuario.lower())  # Convertir todo a minúsculas para una mejor comparación
    for sintoma in sintomas_comunes:
        # Si alguna de las palabras del síntoma está en la entrada del usuario
        if any(palabra in entrada_usuario.lower() for palabra in sintoma.split()):
            return recomendaciones.get(sintoma, "Lo siento, no puedo ofrecerte una recomendación para este síntoma.")
    
    return "Lo siento, no pude detectar síntomas comunes en tu mensaje. ¿Podrías describir tus síntomas de manera más clara?"

if __name__ == '__main__':
    app.run(debug=True)
