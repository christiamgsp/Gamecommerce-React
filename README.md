# 🛒 SmartShop - E-commerce Intelligence

<div align="center">

<img src="./src/assets/inicio.png" width="400" alt="Vista de Inicio de SmartShop" /> 
<img src="./src/assets/Iaplicada.png" width="400" alt="Asistente IA en Acción" />

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![Status](https://img.shields.io/badge/Status-Online-green?style=flat-square)
![UI](https://img.shields.io/badge/UI-Responsive-orange?style=flat-square)
![IA](https://img.shields.io/badge/AI-Powered-blue?style=flat-square)
![Persistence](https://img.shields.io/badge/Storage-LocalStorage-yellow?style=flat-square)

</div>

**SmartShop** es una plataforma de comercio electrónico de última generación que integra un asistente de Inteligencia Artificial para asesorar al usuario durante su compra. El proyecto se centra en la eficiencia, el diseño moderno y la persistencia de datos.

<div align="center">
  <a href="https://modern-ecommerce-react-ph12eex9c-christiamgsps-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
    <h2>🚀 CLIC AQUÍ PARA VER LA DEMO EN VIVO 🚀</h2>
  </a>
</div>

---

## 🛠️ Stack Tecnológico

He seleccionado un stack moderno para garantizar una experiencia de usuario fluida y un desarrollo escalable:

- **Core:** `React 18` + `Vite` para un rendimiento de carga instantáneo.
- **Estilos:** `Tailwind CSS` con un enfoque "Mobile First" y diseño totalmente responsive.
- **Navegación:** `React Router DOM` para gestionar rutas dinámicas de productos y navegación SPA.
- **Estado Global:** `Context API` para centralizar la lógica del carrito de compras.
- **IA:** `Groq SDK` + `Llama 3`, permitiendo consultas en lenguaje natural sobre el catálogo.
- **Feedback:** `Sonner` para notificaciones interactivas (Toasts) de éxito y error.
- **Iconografía:** `Lucide React` para una interfaz visual limpia y profesional.

---

## 🧠 Características y Lógica de React Aplicada

Este proyecto demuestra el dominio de conceptos clave en el ecosistema de React:

### 🤖 Asistente de IA (Smart Advisor)

Integración de un chatbot contextual que recibe la información del producto actual. Se configuraron **Variables de Entorno (`VITE_`)** en Vercel para asegurar una conexión privada y segura con la API de Groq Cloud.

### 💾 Persistencia de Datos (LocalStorage Custom Hook)

Desarrollo de un Hook personalizado `useLocalStorage` que automatiza la sincronización del carrito.

- **Sincronización:** Guarda automáticamente cada cambio (suma, resta o eliminación).
- **Recuperación:** Al recargar la página (`F5`), el estado se restaura desde el almacenamiento local, evitando que el usuario pierda su selección.

### ⚡ Optimización de UI (Skeletons)

Uso de componentes de carga (`SkeletonCard`) para mejorar el _Lighthouse score_ y reducir la percepción de espera del usuario mientras se obtienen los datos de la API de DummyJSON.

---

## 📂 Estructura de Carpetas

- `/src/components`: Componentes atómicos (Navbar, ProductCard, IAAssistant).
- `/src/context`: Manejo del estado global con `CartContext`.
- `/src/hooks`: Lógica extraída como `useLocalStorage`.
- `/src/pages`: Vistas de la aplicación (Home, Carrito, Detalle, 404).
- `/src/assets`: Recursos estáticos y capturas de pantalla.

---

## 🚀 Instalación Local

1.  Clona el repositorio.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en la raíz con tu clave:
    ```env
    VITE_GROQ_API_KEY=tu_clave_aqui
    ```
4.  Ejecuta el proyecto:
    ```bash
    npm run dev
    ```

---

Desarrollado con ♥️ por [Christiam] - 2026 🚀
