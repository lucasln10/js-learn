console.log('index.js carregado!');

const listPokemons = document.getElementById('pokemon-list');

async function loadPokemons() {
    try {
        const response = await fetch('http://localhost:3000/pokemons');
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const pokemons = await response.json();
        pokemons.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.textContent = pokemon;
            listItem.style.marginBottom = '20px';
            listItem.style.cursor = 'pointer';
            listItem.addEventListener('click', () => {
                alert(`Você clicou em ${pokemon}!`);
            });
            listItem.style.border = '1px solid #ccc';
            listItem.style.padding = '10px';
            listItem.style.borderRadius = '5px';
            listItem.style.transition = 'background-color 0.3s';
            listItem.addEventListener('mouseover', () => {
                listItem.style.backgroundColor = '#747474ff';
            });
            listItem.addEventListener('mouseout', () => {
                listItem.style.backgroundColor = '#000000ff';
            });
            listPokemons.appendChild(listItem);
        });
    } catch (error) {
        console.error('Deu erro aqui', error);
    }
}

loadPokemons();