// importamos express
import express from 'express';

// creamos el router
const router = express.Router();

// definimos las rutas para los usuarios
router.get(`/`, (req, res) => {
    res.json({ message: "Se listaron los usuarios" });
});

router.post(`/`, (req, res) => {
    res.json({ message: "Se creara un nuevo usuario" });
});

// exportamos el router para usarlo en app.js
export default router;