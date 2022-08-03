import React from 'react'

const PokedexCard = ({pokemon, index}) => {
  return (
    <div className='pokedex-card' >
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} />
      <h3>{pokemon.name}</h3>
      <button>Add To Team</button>
    </div>
  )
}

export default PokedexCard