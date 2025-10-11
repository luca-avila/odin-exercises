import { useEffect, useState } from "react"
import Board from "@/components/board/Board"
import { getPokemonsWithImages } from "@/api/api"

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [score, setScore] = useState(0);
    const [clickedPokemon, setClickedPokemon] = useState([]);

    useEffect(() => {
        // Fetch Pokemon
        async function fetchPokemons() {
            const pokemonsWithImages = await getPokemonsWithImages();
            setPokemons(pokemonsWithImages);
        }
        
        fetchPokemons();
    }, []);

    const handleCardClick = (pokemonId) => {
        if (clickedPokemon.includes(pokemonId)) {
            // Already clicked - game over or reset
            setScore(0);
            setClickedPokemon([]);
        } else {
            // First time clicking - increment score
            setScore(score + 1);
            setClickedPokemon([...clickedPokemon, pokemonId]);
        }
    };

    return (
        <div className="app">
            <h1>Score: {score}</h1>
            <Board pokemons={pokemons} onCardClick={handleCardClick} />
        </div>
    );
}

export default App;