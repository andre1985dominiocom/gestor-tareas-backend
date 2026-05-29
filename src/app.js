// importamos las rutas de usuarios y tareas
import express from 'express';
import userRoutes from './routes/users.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import { listUsers } from './controllers/users.controller.js';
import { listTasks } from './controllers/tasks.controller.js';

// creamos la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3001;

// middleware para parsear JSON
app.use(express.json());

// usamos las rutas importadas
app.use('/api/users', listUsers);
app.use('/api', listTasks);

// ruta raíz para verificar que el servidor está corriendo
app.get('/', (req, res) => {
    res.json({ status: `Servidor corriendo de forma perfecta`,
                proyecto: "Gestor de Tareas Backend" });
});

// iniciamos el servidor
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});