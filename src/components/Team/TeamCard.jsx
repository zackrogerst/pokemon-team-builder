import React from "react";

const TeamCard = ({pokemon}) => {
	return (
		<article className="team-card">
			<h3>{pokemon.name}</h3>
			<p>{JSON.stringify(pokemon.stats)}</p>
		</article>
	);
};

export default TeamCard;
