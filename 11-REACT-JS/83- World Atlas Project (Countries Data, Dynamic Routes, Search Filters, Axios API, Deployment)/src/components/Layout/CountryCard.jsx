import { NavLink } from "react-router-dom";
const CountryCard = ({country})=> {
    const {flags, name, population, region, capital} = country
    // console.log(country);
    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt="flags" />

                <div className="countryInfo">
                    <p className="ard-title">{name.common}</p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="card-description">Region:</span> {region}
                    </p>
                    <p>
                        <span  className="card-description">Capital:</span> 
                        {capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More</button>
                    </NavLink>

                </div>

            </div>
            
        </li>
    )
}
export default CountryCard