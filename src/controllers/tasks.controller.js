// Importamos el modelo de tareas
import tasks from "../model/tasks.model.js";

// 1. LISTAR TAREAS
export const listTasks = (req, res) => {
    // Devolvemos directamente el arreglo con las tareas actuales
    res.json(tasks);
};

// 2. CREAR TAREA
export const createTasks = (req, res) => {
    const { title, description, completed } = req.body;

    // Validación básica de campos obligatorios
    if (!title) {
        return res.status(400).json({ error: "El título es obligatorio" });
    }

    // Generamos un ID autoincremental seguro
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask = {
        id: newId,
        title,
        description,
        completed: completed || false // Si no se proporciona, por defecto es false
    };

    tasks.push(newTask);
    res.status(201).json({ message: "Tarea creada con éxito", data: newTask });
};

// 3. ACTUALIZAR TAREA
export const updateTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    // Buscamos la tarea en el arreglo
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Actualizamos solo los campos que vengan en el cuerpo de la petición
    if (title) task.title = title;
    if (description) task.description = description;
    if (typeof completed === "boolean") task.completed = completed;

    res.json({ message: `Tarea con id ${taskId} actualizada`, data: task });
};

// 4. ELIMINAR TAREA
export const deleteTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
    
    // Buscamos el índice de la tarea
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Eliminamos la tarea del arreglo usando splice (modifica el arreglo original)
    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({ message: `Tarea con id ${taskId} eliminada`, data: deletedTask[0] });
};