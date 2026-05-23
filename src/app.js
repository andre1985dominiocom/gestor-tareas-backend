// importamos las rutas de usuarios y tareas
import express from 'express';
import userRoutes from './routes/users.routes.js';
import taskRoutes from './routes/tasks.routes.js';

// creamos la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3001;

// middleware para parsear JSON
app.use(express.json());

// usamos las rutas importadas
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// ruta raíz para verificar que el servidor está corriendo
app.get('/', (req, res) => {
    res.json({ status: `Servidor corriendo de forma perfecta`,
                proyecto: "Gestor de Tareas Backend" });
});

// iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});