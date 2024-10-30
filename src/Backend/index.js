const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // Importa o módulo sqlite3
const app = express();
const PORT = 3010;

app.use(cors());
app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    } else {
        console.log('Conectado ao banco de dados SQLite.');

        // Criar a tabela, se não existir
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS institutions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeInstituicao TEXT NOT NULL,
                email TEXT NOT NULL,
                cep TEXT NOT NULL,
                cnpj TEXT NOT NULL
            )`, (err) => {
                if (err) {
                    console.error('Erro ao criar tabela', err);
                } else {
                    console.log('Tabela institutions criada ou já existe.');
                }
            });
        });
    }
});

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.post('/', (req, res) => {
    const { nomeInstituicao, email, cep, cnpj } = req.body;
    console.log('Dados recebidos:', req.body);

    // Inserir dados no banco de dados
    db.run(`INSERT INTO institutions (nomeInstituicao, email, cep, cnpj) VALUES (?, ?, ?, ?)`, 
        [nomeInstituicao, email, cep, cnpj], function(err) {
            if (err) {
                console.error('Erro ao inserir dados no banco de dados', err);
                return res.status(500).send({ message: 'Erro ao inserir dados no banco de dados', error: err.message });
            }

            // Consulta os dados recém inseridos
            db.get(`SELECT * FROM institutions WHERE id = ?`, [this.lastID], (err, row) => {
                if (err) {
                    console.error('Erro ao consultar os dados inseridos', err);
                    return res.status(500).send({ message: 'Erro ao consultar os dados inseridos', error: err.message });
                }
                console.log('Dados inseridos:', row);
                res.status(201).send({ message: 'Dados recebidos e armazenados com sucesso', insertedData: row });
            });
        }
    );
});

// Para fechar a conexão quando o servidor parar
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar a conexão com o banco de dados', err);
        } else {
            console.log('Conexão com o banco de dados fechada.');
        }
        process.exit(0);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
