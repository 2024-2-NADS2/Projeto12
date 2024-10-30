const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(cors()); // Permitir CORS
app.use(express.json()); // Analisar JSON

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.post('/', (req, res) => {
    console.log('Dados recebidos:', req.body); // Verifique os dados recebidos
    res.status(200).send('Dados recebidos com sucesso'); // Responde ao cliente
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
