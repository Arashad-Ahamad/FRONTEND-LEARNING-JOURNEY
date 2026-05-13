import { useEffect, useState } from 'react'
import './Pokemon.css'

function Pokemon() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data from the server')
        }
        return res.json()
      })

      .then((data) => {
        setPokemon(data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Data fetch failed ')
        setLoading(false)
      })
  }, [])

  // loading state
  if (loading) {
    return <h1>Loading...</h1>
  }
  // error state
  if (error) {
    return <h2>{error}</h2>
  }

  // success state
  return (
    <div className="container">
      <div className="pokemon-card">
        <h1 className="pokemon-title">Le Catch Pokemon</h1>

        <img
          className="pokemon-img"
          src={
            pokemon.sprites.other.dream_world.front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
        />

        <h1 className="pokemon-name">{pokemon.name}</h1>
      </div>
    </div>
  )
}

export default Pokemon
