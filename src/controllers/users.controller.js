export const listUsers = (req, res) => {
    res.json({ message: "Se listaron los usuarios" });
}

export const createUsers = (req, res) => {
    res.json({ message: "Se creara un nuevo usuario" });
}

export const updateUsers = (req, res) => {
    res.json({ message: "Se actualizara el usuario con el id: " + req.params.id });
}

export const deleteUsers = (req, res) => {
    res.json({ message: "Se eliminara el usuario con el id: " + req.params.id });
}