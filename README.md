# Tarea Final - UTN React Challenge 🚀

¡Bienvenido al Trabajo Integrador Final de Desarrollo en React JS! Este desafío te sumergirá en el fascinante mundo de React, donde crearás una aplicación web para gestionar tus tareas de manera eficiente. Pero espera, ¡hay más! Dale un vistazo a las increíbles características y requisitos que te esperan.

## Consigna 📝

Tu misión, si decides aceptarla, es construir una aplicación web con React que revolucione la forma en que manejas tus tareas diarias. Utiliza componentes funcionales, el asombroso hook `useState` para el control del estado, `useEffect` para esos efectos secundarios emocionantes, y eventos para una interacción de usuario de otro nivel.

## Requerimientos 🛠️

### Componentes Funcionales

- **Lista de Tareas (TaskList):**
  - Muestra la lista de tareas.
  - Recibe como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas.
  - ¡Cada tarea es una estrella representada por el épico componente TaskItem!

- **Tarea (TaskItem):**
  - Representa una tarea individualmente.
  - Muestra el nombre de la tarea y un botón para completarla.
  - Utiliza el estado local para hacer magia visual, como tachar cuando está completada.

- **Formulario (TaskForm):**
  - Contiene un formulario para agregar nuevas tareas.
  - Gestiona la entrada del usuario con estilo y envía la nueva tarea a la lista principal.

### Estado con `useState`

- **Estado Principal (tasks):**
  - Utiliza el hook `useState` en el componente principal para manejar el estado de la lista de tareas.
  - Cada tarea es una joya de objeto con propiedades como id, nombre, y completada.

### Efectos con `useEffect`

- **Efecto de Actualización:**
  - Utiliza `useEffect` para realizar una acción emocionante (¡como mostrar un mensaje!) cuando el estado de la lista de tareas cambie.

### Interacción con el Usuario - Eventos

- **Eventos en Lista (TaskList):**
  - Implementa eventos que permitan al usuario interactuar con cada tarea (marcar como completada, eliminar, etc.).
  - Estos eventos cambiarán el destino del estado principal (tasks).

- **Eventos en Formulario (TaskForm):**
  - Implementa eventos para gestionar la entrada del usuario y añadir nuevas tareas a la lista.

### Estilo y Diseño

- ¡Da rienda suelta a tu creatividad!
