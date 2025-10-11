function Card({ pokemon }){
    return (
        <div className="card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default Card;