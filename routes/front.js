const { Router } = require("express");
const { getUsers, postUser, deleteUser, findUser } = require("../db");

const router = Router();

router.get("/user-create", (_, res) => res.render("createUser"));

router.get("/", async (_, res) => {
  const data = await getUsers();
  res.render("allUsers", { usuario: data });
});

router.post("/user-create", async (req, res) => {
  const date = new Date();
  const { usuario, email, password } = req.body;
  const values = [usuario, email, password, date];
  await postUser(values);
  res.redirect("/");
});

router.get("/user-delete/:id", async (req, res) => {
  const { deleteNow } = req.query;
  const { id } = req.params;
  const idUser = [id];

  if (deleteNow) {
    await deleteUser(idUser).then(() => res.redirect("/"));
  } else {
    res.render("deleteConfi", { user: await findUser(idUser) });
  }
});
module.exports = router;
