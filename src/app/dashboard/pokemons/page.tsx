import React from 'react'
import { PokemonsGrid, getPokemons } from '@/pokemons'

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151)
  return (
    <>
      <PokemonsGrid pokemons={pokemons} />
    </>
  )
}

export default PokemonsPage
