# ELEMON - Tu Compañero Elemental 🥚🔥💧🍃

¡Bienvenido al mundo de **ELEMON**! Un juego de mascota virtual estilo retro donde podrás cuidar, entrenar y ver evolucionar a tu propio compañero elemental.

## 📖 Descripción del Juego
**ELEMON** es una experiencia nostálgica inspirada en los clásicos Tamagotchi y la estética de los videojuegos de 8-bits. 

En este juego podrás:
- **Elegir tu compañero:** Selecciona entre 4 tipos de elementos: Fuego (Fosforito), Agua (Charquito), Tierra (Mugresito) y Aire (Suspiro).
- **Cuidar sus necesidades:** Mantén sus estadísticas de Hambre, Felicidad y Energía en niveles óptimos.
- **Evolución en tiempo real:** Observa cómo tu mascota crece de Huevo a Bebé y finalmente a Adulto.
- **Ciclo de vida:** ¡Cuidado! Si descuidas a tu ELEMON, podría enfermar o incluso morir.
- **Estilo Retro:** Interfaz completamente diseñada con pixel art y estética de consola clásica.

## 🚀 Tecnologías Utilizadas
Este proyecto ha sido construido utilizando tecnologías modernas de desarrollo web:
- **[React 19](https://react.dev/):** Biblioteca principal para la interfaz de usuario.
- **[TypeScript](https://www.typescriptlang.org/):** Para un código robusto y tipado estático.
- **[Vite](https://vitejs.dev/):** Entorno de desarrollo ultrarrápido.
- **[NES.css](https://nostalgic-css.github.io/NES.css/):** Framework CSS para conseguir el estilo NES (8-bit) sin esfuerzo.
- **CSS3:** Animaciones personalizadas y estilos responsivos.

## 🛠️ Herramientas y Plataformas
El desarrollo de este proyecto fue posible gracias a:
- **[VibeCode Bootcamp de Frutero club](https://www.frutero.club/):** Contexto educativo y plataforma de aprendizaje.
- **Stitch:** Herramienta utilizada para la generación y diseño de interfaces iniciales.
- **Gemini AI:** Asistente de inteligencia artificial para la generación de código, lógica de juego y optimización.

## 🎮 Cómo Jugar (Instrucciones de Instalación)
Sigue estos pasos para ejecutar el juego en tu máquina local:

1.  **Clonar el repositorio** (si aplica) o descargar el código.
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key de OpenAI:
    ```env
    VITE_OPENAI_KEY=tu_api_key_aqui
    ```
4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Abrir en el navegador:**
    Visita la URL que aparece en la terminal (usualmente `http://localhost:5173`).

## ✨ Características Destacadas
- **Sistema de Emociones:** Tu mascota reacciona visualmente según su estado de ánimo.
- **Contador de Evolución:** Un timer visual que te indica cuánto falta para la siguiente etapa (¡solo avanza si tu mascota está feliz!).
- **Persistencia de Datos:** El juego guarda tu progreso automáticamente en el navegador.
- **Modo Oscuro/Retro:** Diseño visualmente atractivo y nostálgico.
- **Chat con IA:** ¡Habla con tu mascota! Integración con **OpenAI** para tener conversaciones únicas basadas en la personalidad y estado de tu ELEMON.

---
*Desarrollado como parte del Delivery 2 para VibeCode Bootcamp.*
