import "./App.css";
import Header from "./components/Header";
import TeamSection from "./components/TeamSection";
import PokedexSection from "./components/PokedexSection";

function App() {
	return (
		<div className="App">
			<Header />
			<TeamSection />
			<PokedexSection />
		</div>
	);
}

export default App;
