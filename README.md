# FitMentor
Repositorio del proyecto: "FitMentor".

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/14bd5c2d-11ce-490c-a4aa-069f42fc9db3" />

# 📋 Requisitos Funcionales - Prioridad Alta

## 🔑 RF1: Autenticación y Gestión de Usuarios
- **RF1.1:** La aplicación debe permitir a los usuarios registrarse mediante: nombre, apellido, correo electrónico, número de teléfono, contraseña o integración con redes sociales, como Google.  
- **RF1.2:** Los usuarios deben poder iniciar sesión con credenciales seguras y recuperar contraseñas olvidadas.  
- **RF1.3:** La vista de administradores debe incluir un CRUD completo para gestionar usuarios: crear nuevos perfiles, leer/listar usuarios existentes (con filtros por nombre, fecha de registro), actualizar datos de usuarios (como perfil y preferencias) y eliminar cuentas inactivas o problemáticas.  
- **RF1.4:** La aplicación debe soportar roles de usuario: usuario estándar, y administrador, con accesos diferenciados, en los que el usuario estándar no puede acceder a endpoints admin, mientras que, el administrador tiene el papel de moderación y visibilidad.  

## 🏋️ RF2: Gestión de Contenido de Entrenamiento (Splits, Rutinas y Ejercicios)
- **RF2.1:** La vista de administradores debe incluir un CRUD completo para splits (distribución semanal de entrenamientos): crear splits personalizados, leer/listar splits existentes (con scroll infinito), actualizar detalles (como días de la semana, duración) y eliminar splits obsoletos.  
- **RF2.2:** La aplicación deberá incluir un CRUD para rutinas: crear rutinas compuestas por ejercicios, listar con scroll infinito, actualizar, es decir, agregar/quitar ejercicios y eliminar.  
- **RF2.3:** La vista de administradores debe incluir un CRUD para ejercicios: crear ejercicios con descripciones, videos demostrativos o imágenes, listar con scroll infinito, actualizar y eliminar.  
- **RF2.4:** La aplicación deberá permitir a los administradores asociar ejercicios a rutinas y rutinas a splits, permitiendo una estructura jerárquica para personalización.  

## 👤 RF3: Vista de Usuarios - Seguimiento de Entrenamientos
- **RF3.1:** Los usuarios deben poder seguir splits semanales predefinidos o crear distribuciones semanales personalizadas.  
- **RF3.2:** La aplicación debe permitir a los usuarios registrar repeticiones realizadas y pesos levantados en cada ejercicio (de manera opcional, es decir, si el usuario desea).  
- **RF3.3:** Los usuarios deben poder ver y navegar por listas de ejercicios, rutinas y splits con scroll infinito para manejar grandes catálogos.  

## 📊 RF4: Estadísticas y Progreso
- **RF4.1:** La aplicación debe generar y mostrar estadísticas gráficas de progreso: gráficos de línea para evolución de medidas corporales y pesos levantados.  
- **RF4.2:** Los usuarios deben poder filtrar estadísticas por período (día, semana, mes).  
- **RF4.3:** La aplicación debe calcular métricas automáticas basadas en datos ingresados, como el el IMC (Índice de Masa Corporal).  

## 🤖 RF5: Integración con Asistente Virtual de IA
- **RF5.1:** La aplicación debe incluir un asistente de IA que responda consultas sobre entrenamiento mediante chat.  
- **RF5.2:** El asistente debe proporcionar consejos personalizados basados en datos del usuario.  

## 📱 RF6: Soporte Multiplataforma y Dispositivos
- **RF6.1:** La aplicación debe funcionar en Android y web app para ordenadores, con interfaces responsivas adaptables a los diferentes tamaños de pantalla.  

## 🔔 RF7: Funcionalidades Generales
- **RF7.1:** La aplicación debe enviar notificaciones push para recordatorios de entrenamientos, progreso semanal o consejos de IA.  


---


## 🛠️ Requisitos No Funcionales - Prioridad Media

## ⚡ RNF1: Rendimiento y Escalabilidad
- **RNF1.1:** La aplicación debe cargar listas con scroll infinito en menos de 2 segundos por página adicional, soportando hasta 100 elementos sin degradación notable.  
- **RNF1.2:** El sistema debe escalar para al menos 1.000 usuarios concurrentes, utilizando bases de datos cloud (ej. Firebase) para manejar crecimiento. (Se deberían hacer pruebas de carga)  

## 🔒 RNF2: Seguridad y Privacidad
- **RNF2.1:** Autenticación debe usar tokens JWT o similares, con verificación de dos factores opcional.  
- **RNF2.2:** Protección contra accesos no autorizados: logs de auditoría para acciones de administradores y detección de intentos de intrusión.  

## 🎨 RNF3: Usabilidad y Accesibilidad
- **RNF3.1:** La interfaz debe ser intuitiva, con navegación basada en menús y búsqueda por texto para elementos como ejercicios, rutinas y splits.  
- **RNF3.2:** Soporte para múltiples idiomas (al menos español e inglés) y temas oscuro/claro.  
- **RNF3.3:** Cumplir con estándares de accesibilidad WCAG 2.1: soporte para lectores de pantalla, alto contraste y navegación por teclado.  

## 🧩 RNF4: Mantenibilidad y Desarrollo
- **RNF4.1:** El código debe ser modular, utilizando frameworks multiplataforma como Flutter o React Native para minimizar duplicación en Android y web.  
- **RNF4.2:** Integración continua (CI/CD) para despliegues automáticos, considerando un equipo de 3 desarrolladores.  
- **RNF4.3:** Documentación interna: cada módulo (ej. CRUD) debe tener comentarios y tests unitarios con cobertura mayor al 80%.  

## 🔗 RNF5: Integración y Compatibilidad
- **RNF5.1:** La IA debe integrarse vía APIs como OpenAI o similar, con latencia de respuesta menor a 3 segundos.  
- **RNF5.2:** Compatibilidad con versiones mínimas: Android 8+, navegadores modernos como Chrome y Safari.  

## ☁️ RNF6: Confiabilidad y Recuperación
- **RNF6.1:** La aplicación debe tener una disponibilidad del 99.9%, con backups automáticos diarios de datos.  
- **RNF6.2:** Manejo de errores: mensajes amigables para fallos (por ejemplo: "No hay conexión") y recuperación automática de sesiones interrumpidas.  

---

### **1. Arquitectura seleccionada del proyecto**

#### **Nivel 1: Contexto**

<img width="777" height="782" alt="ModeloC4Context drawio" src="https://github.com/user-attachments/assets/8e1271eb-f30d-46a8-bfb5-b052ac35ee34" />


*   **Actores principales**:
    *   **Cliente final**: Interactúa con la aplicación móvil (React Native) y web (React).
    *   **Administrador**: Gestiona contenido, usuarios y rutinas mediante un panel web.
*   **Sistema central**: La **aplicación de fitness** que ofrece generación de rutinas y seguimiento de progreso.
*   **Integraciones externas**:
    *   Servicios de **IA** para generar rutinas personalizadas.
    *   APIs externas (por ejemplo, de datos de salud o terceros servicios de autenticación).

**Resumen del nivel de contexto:**
La arquitectura es **cliente-servidor con servicios externos** y un backend centralizado que expone APIs REST para ambos clientes.

#### **Nivel 2: Contenedor**

<img width="1161" height="1051" alt="ModeloC4Contenedor drawio" src="https://github.com/user-attachments/assets/49edba54-40a3-4a50-bf34-994fdea1e09d" />


*   **Frontend Web y Móvil**:
    *   Ambos construidos con **React/React Native**.
    *   Se comunican mediante **REST APIs** con el backend.
*   **Backend**:
    *   Basado en **Node.js con TypeScript**.
    *   Exposición de **REST endpoints** para operaciones de clientes y administradores.
*   **Servicio de IA**:
    *   Implementado en **Python (FastAPI)**.
    *   Encargado de lógica de generación de rutinas.
*   **Base de datos**:
    *   Se asume **PostgreSQL** para persistencia de usuarios, rutinas y métricas.
*   **Comunicación**:
    *   Frontend ↔ Backend: REST/JSON.
    *   Backend ↔ Servicio IA: REST/JSON.
    *   Backend ↔ Base de datos: SQL mediante un ORM (posiblemente TypeORM).

**Resumen del nivel de contenedor:**
La arquitectura es **modular**, basada en contenedores lógicos, con separación clara de responsabilidades: frontend, backend, IA y base de datos. Esto facilita escalabilidad, mantenimiento y pruebas independientes.

### **2. Estándares de codificación para el proyecto**

#### **Backend (Node.js + TypeScript)**

*   Uso de **TypeScript estrictamente tipado** (`strict: true`) para evitar errores en tiempo de compilación y mejorar la robustez del código.
*   Separación en **capas o módulos** para mantener una estructura clara y la separación de responsabilidades:
    *   **Controladores**: Encargados de recibir las solicitudes (requests) y delegar la lógica de negocio.
    *   **Servicios**: Contienen la lógica de negocio principal de la aplicación.
    *   **Repositorios**: Gestionan el acceso y la manipulación de datos en la base de datos.
*   Nombres **camelCase** para variables y funciones, y **PascalCase** para clases, interfaces y tipos.
*   Manejo de **errores centralizado** utilizando middleware (con NestJS) para ofrecer respuestas consistentes y amigables.
*   Uso de **promesas/async-await** para todas las operaciones asincrónicas, mejorando la legibilidad y el manejo de flujos de control.

#### **Base de datos**

*   Convenciones de nombres: **snake_case para tablas y columnas** (ej. `nombre_usuario`, `fecha_registro`).
*   Llaves primarias: Utilizar `id` autoincrementales como identificador único para cada tabla.
*   Implementación de índices en columnas críticas.

#### **Buenas prácticas generales**

*   Uso de **Git flow** para la gestión del control de versiones, incluyendo ramas `main` (producción), `develop` (desarrollo) y `feature branches` (para nuevas funcionalidades).
*   Commits claros y atómicos, con mensajes descriptivos.
*   Validación de datos en **frontend y backend** para garantizar la integridad y seguridad de la información.
*   Logging centralizado y manejo de errores consistente en toda la aplicación para facilitar la depuración y el monitoreo.
*   Implementación de **tests unitarios y de integración** desde el inicio del proyecto, con una cobertura de código mayor al 80% para los módulos críticos.

---
