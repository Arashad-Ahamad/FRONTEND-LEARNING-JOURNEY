import { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi'
import Loader from '../components/Ui/Loader'
import CountryCard from '../components/Layout/CountryCard'
import SearchFilter from '../components/Ui/SearchFilter'

const Country = () => {
  //  useTransition → helps keep UI smooth during heavy updates
  const [isPending, startTransition] = useTransition()

  //  Stores all country data from API
  const [countries, setCountries] = useState([])

  //  Stores search input value
  const [search, setSearch] = useState('')

  //  Stores selected region filter (default: 'all')
  const [filter, setFilter] = useState('all')

  //  Fetch data when component mounts
  useEffect(() => {
    //  Wrap API call in transition (low priority update)
    startTransition(async () => {
      const res = await getCountryData()

      //  Save data to state
      setCountries(res.data)
    })
  }, [])

  //  Show loader while data is loading
  if (isPending) return <Loader />

  // SEARCH FUNCTION
  const searchCountry = (country) => {
    //  If search input exists, filter by name
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }

    //  If search is empty, return all countries
    return country
  }

  //  FILTER FUNCTION (by region)
  const filterRegion = (country) => {
    //  If "all", return all countries
    if (filter === 'all') return country

    //  Otherwise, match region
    return country.region === filter
  }

  //  FINAL FILTER (combine search + region filter)
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country),
  )

  return (
    <section className="country-section">
      {/*  Search and Filter Component */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {/*  Render filtered country list */}
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />
        })}
      </ul>
    </section>
  )
}

export default Country
