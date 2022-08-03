import React from "react";

const PokedexCard = ({ pokemon, index, setTeam }) => {
  
	const addToTeam = () => {
		setTeam(prevState => {
			if (prevState.length === 6) return prevState;
			let newState = [...prevState, pokemon.id];
			return newState;
		});
	};

	return (
		<div className="pokedex-card">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
				alt="image"
			/>
			<h3>{pokemon.name}</h3>
			<button onClick={addToTeam}>Add To Team</button>
		</div>
	);
};

export default PokedexCard;
