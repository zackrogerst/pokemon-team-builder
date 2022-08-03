import "./App.css";
import Header from "./components/Header";
import TeamSection from "./components/TeamSection";
import PokedexSection from "./components/Pokedex/PokedexSection";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
	const [allPokemon, setAllPokemon] = useState([]);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=100000")
			.then(res => setAllPokemon(res.data.results))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="App">
			<Header />
			<TeamSection />
			<PokedexSection allPokemon={allPokemon} />
		</div>
	);
}

export default App;
