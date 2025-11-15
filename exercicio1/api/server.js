import express from 'express';
import api from './service/api.js';
import body from 'body-parser';
import cors from 'cors';

const app = express();
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(cors());
const PORT = 3000;

app.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await api.getPokemons();
    const data = await pokemons.json();
    const pokemonNames = data.results.map(pokemon => pokemon.name);
    res.json(pokemonNames);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pokemons' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});