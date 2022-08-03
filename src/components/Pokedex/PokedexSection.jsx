import React from 'react'
import PokedexCard from './PokedexCard'

const PokedexSection = ({allPokemon}) => {
  
  let display = allPokemon.map((pokemon, index) => {
    return <PokedexCard pokemon={pokemon} index={index} key={index} />
  })

  return (
    <section className='pokedex-section'>
      <h1>Choose your Team</h1>
      <input placeholder='Search a Pokemon'/>
	  <div className='pokedex-container'>
      {display}
	  </div>
    </section>
  )
}

export default PokedexSection