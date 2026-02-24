import { useEffect, useState } from 'react'
function PokemonFetch() {
  const [Pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error))
  }, [])

  if (!Pokemon) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <h1>Le Catch Pokemon</h1>
      <img
        src={Pokemon.sprites.other.dream_world.front_default}
        alt={Pokemon.name}
      />
      <h1>{Pokemon.name}</h1>
    </div>
  )
}
export default PokemonFetch
