import { useState, useEffect } from "react";
import Card from "@/components/card/Card";

function Board({ pokemons, onCardClick }) {
    const [shuffledPokemons, setShuffledPokemons] = useState([]);

    // Shuffle whenever pokemons or a card is clicked
    useEffect(() => {
        const shuffled = [...pokemons].sort(() => Math.random() - 0.5);
        setShuffledPokemons(shuffled);
    }, [pokemons, onCardClick]);

    return (
        <div className="board">
            {shuffledPokemons.map((pokemon) => (
                <Card 
                    key={pokemon.id} 
                    pokemon={pokemon}
                    onClick={() => onCardClick(pokemon.id)}
                />
            ))}
        </div>
    );
}

export default Board;