import React from "react";

const TeamCard = ({pokemon}) => {
	return (
		<article className="team-card">
            {console.log(pokemon)}
			<h3>{pokemon.name}</h3>
            {console.table(pokemon)}
			{/* <p>{JSON.stringify(pokemon)}</p> */}
		</article>
	);
};

export default TeamCard;
