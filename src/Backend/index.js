const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();

// Define a porta do servidor
const port = process.env.PORT || 3050;

// Configuração do CORS
app.use(
  cors({
    origin: "https://s554jl.csb.app", // Substitua pela URL do seu frontend
  })
);

// Middleware para permitir a leitura de JSON no corpo da requisição
app.use(express.json());

// Criação ou abertura do banco de dados SQLite
const db = new sqlite3.Database("./zoopi_db.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Criação da tabela de usuários se não existir
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )`,
    (err) => {
      if (err) console.error("Erro ao criar a tabela 'usuarios':", err.message);
      else console.log("Tabela 'usuarios' criada ou já existe.");
    }
  );
});

// Rota principal
app.get("/", (req, res) => {
  res.send(
    "Servidor está funcionando! Bem-vindo à minha aplicação Node.js com Express."
  );
});

// Rota POST para cadastrar novos usuários
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  db.run(
    `INSERT INTO usuarios (username, password) VALUES (?, ?)`,
    [username, password],
    function (err) {
      if (err) {
        console.error("Erro ao registrar usuário:", err.message);
        return res.status(500).send("Erro ao registrar usuário.");
      }
      console.log(`Usuário registrado com sucesso: ${username}`);
      res.send("Usuário registrado com sucesso!");
    }
  );
});

// Rota POST para login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verificação do usuário no banco de dados
  db.get(
    `SELECT * FROM usuarios WHERE username = ? AND password = ?`,
    [username, password],
    (err, row) => {
      if (err) {
        console.error("Erro ao verificar usuário:", err.message);
        return res.status(500).json({ message: "Erro ao verificar usuário." }); // Retorna erro em formato JSON
      }

      if (row) {
        // Responde com JSON para o sucesso
        res.json({ message: "Login bem-sucedido!" });
      } else {
        // Responde com JSON para o erro
        res.status(401).json({ message: "Usuário ou senha incorretos." });
      }
    }
  );
});

// Rota GET para retornar todos os usuários
app.get("/usuarios", (req, res) => {
  db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
    if (err) {
      console.error("Erro ao recuperar usuários:", err.message);
      return res.status(500).send("Erro ao recuperar usuários.");
    }

    // Verifica se a consulta retornou usuários
    if (rows.length > 0) {
      console.log("Usuários recuperados:", rows); // Log dos usuários
      res.json(rows); // Retorna os dados dos usuários como JSON
    } else {
      console.log("Nenhum usuário encontrado.");
      res.status(404).send("Nenhum usuário encontrado.");
    }
  });
});

// Fechar o banco de dados quando o servidor é encerrado
process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error("Erro ao fechar o banco de dados:", err.message);
    }
    console.log("Banco de dados fechado.");
    process.exit(0);
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
