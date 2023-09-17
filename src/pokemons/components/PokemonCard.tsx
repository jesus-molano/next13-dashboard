import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { getPokemonById } from '..'

interface PokemonCardProps {
  id: string
}

const PokemonCard = async ({ id }: PokemonCardProps) => {
  const pokemon = await getPokemonById(id)

  return (
    <>
      <div className="pokemon-card relative">
        <IoBookmark className="absolute top-2 right-4 w-8 h-8 text-gray-800 z-50" />
        <IoBookmarkOutline className="absolute top-2 right-4 w-8 h-8 text-gray-800 z-50" />
        <Link href={`/dashboard/pokemon/${pokemon.name}`} className="relative flex flex-col items-center w-[250px] h-[240px] p-4 m-4 bg-white rounded-lg shadow-lg">
          <Image className='absolute top-[-30px] max-w-[200px] h-[200px] object-contain drop-shadow-xl ' src={pokemon.image} alt={pokemon.name} width={200} height={200} />
          <h2 className="absolute bottom-8 text-2xl font-bold text-gray-800 capitalize">{pokemon.name}</h2>
          <div className="absolute bottom-[-12px] flex flex-row items-center justify-center w-full mt-4">
            {pokemon.types.map((type) => (
              <span key={type} className="px-2 py-1 mr-2 text-sm text-white bg-gray-800 rounded">{type}</span>
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}

export default PokemonCard
