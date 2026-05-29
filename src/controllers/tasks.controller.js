export const listTasks = (req, res) => {
    res.json({ message: "Se listaron las tareas" });
}

export const createTasks = (req, res) => {
    res.json({ message: "Se creara una nueva tarea"});
}