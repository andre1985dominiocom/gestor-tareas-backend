// Importamos Express
import  express from 'express';

// Creamos el router para las tareas
const router = express.Router();

// Definimos las rutas para las tareas
router.get(`/`, (req, res) => {
    res.json({ message: "Se listaron las tareas" });
});

router.post(`/`, (req, res) => {
    res.json({ message: "Se creara una nueva tarea"});
});

// Exportamos el router para usarlo en app.js
export default router;