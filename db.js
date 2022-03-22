const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    "postgresql://postgres:Junjie1995@localhost:5432/users_list",
});

const getUsers = async () => {
  const sqlQuery = "SELECT * FROM usuarios";
  try {
    const result = await pool.query(sqlQuery);
    return result.rows;
  } catch (err) {
    console.log(err.code);
  }
};

const postUser = (data) => {
  const sqlQuery =
    "INSERT INTO usuarios (usuario, email, contrasena, fecha) VALUES ($1, $2, $3, $4) RETURNING*";
  const values = data;

  return pool
    .query(sqlQuery, values)
    .then((res) => res.rows)
    .catch(console.error);
};

const deleteUser = (id) => {
  const sqlQuery = "DELETE FROM usuarios WHERE id = $1 RETURNING*";
  const value = id;

  return pool
    .query(sqlQuery, value)
    .then((result) => result.rowCount)
    .catch(console.error);
};

const findUser = (id) => {
  const sqlQuery = "SELECT * FROM usuarios WHERE id = $1";
  const value = id;

  return pool
    .query(sqlQuery, value)
    .then((result) => result.rows)
    .catch(console.error);
};

module.exports = { getUsers, postUser, deleteUser, findUser };
