import { useEffect, useState } from 'react'
import './Pokemon.css'
import PokemonCards from './PokemonCards'
function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=124')

        if (!res.ok) {
          throw new Error('Detail fetch failed')
        }

        const data = await res.json()

        const detailedPokemonData = data.results.map(async (curPokemon) => {
          const res = await fetch(curPokemon.url)

          if (!res.ok) {
            throw new Error('Detail fetch failed')
          }

          return await res.json()
        })

        const detailedResponses = await Promise.all(detailedPokemonData)
        console.log(detailedResponses)

        setPokemon(detailedResponses)
      } catch (error) {
        // console.error(error)
        setError('Something went wrong!')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  // Search Functionality

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase()),
  )

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemon.map((curPokemon) => { */}
            {searchData.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon
