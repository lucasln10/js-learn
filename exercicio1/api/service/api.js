const getPokemons = () => {
    return new Promise((resolve, reject) => {
        const pokemons = fetch ('https://pokeapi.co/api/v2/pokemon?limit=10')
        resolve(pokemons);
    });
}

export default {
    getPokemons
};