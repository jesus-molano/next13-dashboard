import type { Pokemon } from "..";

export const getPokemonById = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Pokemon = await response.json();
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    types: data.types.map((type) => type.type.name),
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    abilities: data.abilities.map((ability) => ability.ability.name),
  };
  return pokemon;
}
