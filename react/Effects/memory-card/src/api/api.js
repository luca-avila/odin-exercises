async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
    const data = await response.json();
    const pokemons = data.results;
    return pokemons;
}

async function getPokemonsWithImages() {
    const pokemons = await getPokemons();
    
    const pokemonsWithImages = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            const image = data.sprites.front_default;
            return { name: pokemon.name, image };
        })
    );
    
    return pokemonsWithImages;
}

export { getPokemons, getPokemonsWithImages }