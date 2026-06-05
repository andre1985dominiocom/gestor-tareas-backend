// Importamos el arreglo de usuarios desde el modelo
import users from "../model/users.model.js";

// 1. LISTAR USUARIOS
export const listUsers = (req, res) => {
    // Devolvemos directamente el arreglo con los usuarios actuales
    res.json(users);
};

// 2. CREAR USUARIO
export const createUsers = (req, res) => {
    const { name, email } = req.body;

    // Validación básica de campos obligatorios
    if (!name || !email) {
        return res.status(400).json({ error: "El nombre y el email son obligatorios" });
    }

    // Generamos un ID autoincremental seguro
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    const newUser = {
        id: newId,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json({ message: "Usuario creado con éxito", data: newUser });
};

// 3. ACTUALIZAR USUARIO
export const updateUsers = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    // Buscamos el usuario en el arreglo
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizamos solo los campos que vengan en el cuerpo de la petición
    if (name) user.name = name;
    if (email) user.email = email;

    res.json({ message: `Usuario con id ${userId} actualizado`, data: user });
};

// 4. ELIMINAR USUARIO
export const deleteUsers = (req, res) => {
    const userId = parseInt(req.params.id);
    
    // Buscamos el índice del usuario
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Eliminamos el usuario del arreglo usando splice (modifica el arreglo original)
    const deletedUser = users.splice(userIndex, 1);

    res.json({ message: `Usuario con id ${userId} eliminado`, data: deletedUser[0] });
};