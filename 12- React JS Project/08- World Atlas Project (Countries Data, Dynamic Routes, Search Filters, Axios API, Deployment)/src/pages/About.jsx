import countryFacts from '../api/countryData.json'
const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((curCountry) => {
          const { id, countryName, capital, population, interestingFact } =
            curCountry
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
              <p className='card-title'>{countryName}</p>
             <p> <span className='card-desription'>Capital: {capital}</span></p>
            <p>  <span className='card-desription'>population: {population}</span></p>
             <p> <span className='card-desription'>interestingFact: {interestingFact}</span></p>
</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default About
