import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getPokemonById } from '@/pokemons'

interface Props {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params }: Props) => {
  try {
    const pokemon = await getPokemonById(params.id)
    return {
      title: `${pokemon.id}-${pokemon.name}`,
      description: `Pokemon ${pokemon.name} page`,
    }
  } catch (error) {
    return {
      title: 'Pokemon details',
      description: 'Pokemon details page',
    }
  }
}

const PokemonPage = async ({ params }: Props) => {
  try {
    const pokemon = await getPokemonById(params.id)
    return (
      <div className='flex flex-col justify-center items-center gap-6 p-4'>
        <h1 className='uppercase font-semibold text-2xl' >{pokemon.name}</h1>
        <Image src={pokemon.image} alt={pokemon.name} width={300} height={300} />
        <h2 className='font-bold'>Types</h2>
        <ul className='flex capitalize gap-4' >
          {pokemon.types.map((type) => (
            <li className='rounded bg-slate-800 text-white py-1 px-2' key={type}>{type}</li>
          ))}
        </ul>
        <h2 className='font-bold'>Abilities</h2>
        <ul className='flex capitalize gap-4' >
          {pokemon.abilities.map((ability) => (
            <li className='rounded bg-slate-800 text-white py-1 px-2' key={ability}>{ability}</li>
          ))}
        </ul>
        <h2 className='font-bold'>Stats</h2>
        <ul className='capitalize grid grid-cols-3 gap-4 max-w-[400px]' >
          {pokemon.stats.map((stat) => (
            <li className='rounded bg-slate-800 text-white py-1 px-2' key={stat.name}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </div>
    )
  } catch (error) {
    redirect('/not-found')
  }
}

export default PokemonPage
