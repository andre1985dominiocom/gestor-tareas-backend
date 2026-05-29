// importamos express
import express from 'express';
import { createUsers, listUsers } from '../controllers/users.controller.js';

// creamos el router
const router = express.Router();

// definimos las rutas para los usuarios
router.get(`/`, listUsers);

router.post(`/`, createUsers);

// exportamos el router para usarlo en app.js
export default router;