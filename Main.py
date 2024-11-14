import random
import nltk

# Asegurémonos de tener los recursos de nltk necesarios
nltk.download('punkt')

# Diccionario de síntomas comunes y medicamentos sugeridos
medicamentos = {
    'dolor de cabeza': ['Paracetamol', 'Ibuprofeno'],
    'fiebre': ['Paracetamol', 'Ibuprofeno'],
    'tos': ['Jarabe para la tos', 'Miel con limón'],
    'resfriado': ['Descongestionante', 'Paracetamol'],
    'dolor muscular': ['Ibuprofeno', 'Paracetamol'],
    'náuseas': ['Dramamine', 'MetoClorp'],
    'dolor de estómago': ['Almax', 'Omeprazol']
}

# Respuestas generales para el chatbot
respuestas_generales = [
    "Recuerda que este es solo un asistente y no un profesional de la salud.",
    "Es importante que consultes con un médico si los síntomas persisten o empeoran.",
    "De todas formas te recomiendo que busques orientación médica.",
    "Este chat no reemplaza la opinión de un profesional de la salud."
]

def procesar_entrada(entrada_usuario, alergias):
    """
    Procesa la entrada del usuario y devuelve recomendaciones de medicamentos,
    excluyendo los que el usuario es alérgico.
    """
    # Convertir la entrada a minúsculas
    entrada_usuario = entrada_usuario.lower()

    # Comprobar si alguno de los síntomas definidos aparece en la entrada del usuario
    sintomas_detectados = []
    for sintoma in medicamentos.keys():
        if sintoma in entrada_usuario:  # Si la frase del síntoma está en el mensaje
            sintomas_detectados.append(sintoma)
    
    if sintomas_detectados:
        recomendaciones = []
        for sintoma in sintomas_detectados:
            for medicamento in medicamentos[sintoma]:
                if medicamento.lower() not in alergias:
                    recomendaciones.append(medicamento)
        
        recomendaciones = list(set(recomendaciones))  # Eliminar duplicados
        
        if recomendaciones:
            return f"Basado en los síntomas que mencionas, podrías considerar los siguientes medicamentos: {', '.join(recomendaciones)}. " + random.choice(respuestas_generales)
        else:
            return "Lo siento, no puedo recomendarte medicamentos debido a tus alergias. Te recomiendo que consultes con un médico. " + random.choice(respuestas_generales)
    else:
        return "Lo siento, no pude detectar síntomas comunes en tu mensaje. ¿Podrías describir tus síntomas de manera más clara? " + random.choice(respuestas_generales)

def obtener_alergias():
    """
    Pregunta al usuario por sus alergias y devuelve una lista de medicamentos a los que es alérgico.
    Esta función solo debe preguntarse una vez.
    """
    alergias = []
    while True:
        alergia = input("¿Tienes alguna alergia a medicamentos? (Sí/No) ").lower()
        if alergia == 'sí' or alergia == 'si':
            medicamento = input("¿A qué medicamento eres alérgico? (Puedes escribir varios, separados por comas) ").lower()
            alergias.extend([med for med in medicamento.split(',')])
            break  # Se termina la pregunta sobre alergias después de una vez
        elif alergia == 'no':
            break  # Si no tiene alergias, no pregunta más
        else:
            print("Por favor, responde con 'Sí' o 'No'.")
    
    return [alergia.strip() for alergia in alergias]  # Limpiar espacios

def iniciar_chat():
    """
    Función principal para iniciar el chatbot.
    """
    print("¡Hola! Soy el asistente de la farmacia. ¿Cómo te encuentras hoy?")
    print("Recuerda que no soy un médico, solo puedo ofrecerte sugerencias basadas en tus síntomas.")
    
    alergias = obtener_alergias()  # Obtener alergias al inicio
    
    print("Tienes alguno de los siguientes sintomas: ")
    print("dolor de cabeza\nfiebre\ntos\nresfriado\ndolor muscular\nnauseas\ndolor de estomago" )
    
    while True:
        entrada_usuario = input("\nTú: ")
        if entrada_usuario.lower() in ['salir', 'adiós', 'gracias']:
            print("¡Que te mejores pronto! :)")
            break
        else:
            respuesta = procesar_entrada(entrada_usuario, alergias)
            print("Bot:", respuesta)

if __name__ == "__main__":
    iniciar_chat()


