export const listTasks = (req, res) => {
    res.json({ message: "Se listaron las tareas" });
}

export const createTasks = (req, res) => {
    res.json({ message: "Se creara una nueva tarea"});
}

export const updateTasks = (req, res) => {
    res.json({ message: "Se actualizara la tarea con el id: " + req.params.id });
}

export const deleteTasks = (req, res) => {
    res.json({ message: "Se eliminara la tarea con el id: " + req.params.id });
}