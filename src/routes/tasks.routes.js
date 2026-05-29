// Importamos Express
import  express from 'express';
import { listTasks, createTasks } from '../controllers/tasks.controller.js';

// Creamos el router para las tareas
const router = express.Router();

// Definimos las rutas para las tareas
router.get(`/`, listTasks);

router.post(`/`, createTasks);

// Exportamos el router para usarlo en app.js
export default router;