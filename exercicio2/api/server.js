const express = require('express');
const body = require('body-parser');

const app = express();
app.use(body.urlencoded({ extended: true }));


const url = "https://pokeapi.co/api/v2/pokemon";
const meteo = () => {
    const resposta = fetch(url);
    return resposta.data;
}

app.get('/', async (req, res) => {
    try {
        const data = await meteo();
        res.json(data.resolv.map(dados => dados.name));
    } catch (e) {
        throw console.error(e);
    }
});

app.listen('8000', () => {
    console.log('Servidor rodando na porta http://localhost:8000');
});