const { Router } = require("express");
const { getUsers, postUser, deleteUser } = require("../db");

const router = Router();

router.get("/users", (_, res) => {
  getUsers()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.post("/users", (req, res) => {
  const date = new Date();
  const { usuario, email, contrasena } = req.body;
  const data = { usuario, email, contrasena, date };

  postUser(Object.values(data))
    .then(() => res.json({ message: "Creado" }))
    .catch((err) => res.json(err));
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  deleteUser([id])
    .then(() => res.json({ message: "Eliminado" }))
    .catch((err) => res.json(err));
});

module.exports = router;
