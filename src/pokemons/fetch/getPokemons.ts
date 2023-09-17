import type { PokemonsResponse, SimplePokemon } from "@/pokemons"

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemons = async (limit = 20, offset = 0) => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
  const data: PokemonsResponse = await response.json()
  const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return pokemons
}
