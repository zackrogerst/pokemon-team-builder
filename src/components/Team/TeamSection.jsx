import React from "react";
import TeamCard from "./TeamCard";

const TeamSection = ({ team }) => {
	let display = team.map((pokemon, index) => {
		return <TeamCard pokemon={pokemon} />;
	});
	return (
		<section className="team-section">
			<h2>My Team</h2>
			<div className="team-container">{display}</div>
		</section>
	);
};

export default TeamSection;
