const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const users = [
  { id: 1, name: "Luisa", email: "luisa@test.com" },
  { id: 2, name: "Carlos", email: "carlos@test.com" },
];

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Servidor funcionando" });
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "luisa@test.com" && password === "123456") {
    return res.status(200).json({
      success: true,
      message: "Login exitoso",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Credenciales inválidas",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
