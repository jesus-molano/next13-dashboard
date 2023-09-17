import React from 'react'
import { SimplePokemon } from '@/pokemons'
import PokemonCard from './PokemonCard'

interface PokemonsGridProps {
  pokemons: SimplePokemon[]
}

const PokemonsGrid = async ({ pokemons }: PokemonsGridProps) => {
  return (
    <div className='flex flex-col'>
      <span>Pokemons List <small>(Static)</small></span>
      <ul className='flex flex-wrap mt-8  gap-x-2 gap-y-10 items-center justify-around'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} id={pokemon.id} />
        ))}
      </ul>
    </div>
  )
}

export default PokemonsGrid
