import seriesData from '../api/seriesData.json'
function NetflixSeries() {
    return (
        <ul>
            {seriesData.map(item => {
                return (
                    <li key={item.id}>
                        <img src={item.img_url} alt="img" width= '40%' />
                        <h2>Name: {item.name}</h2>
                        <h3>Rating: {item.rating}</h3>
                        <p>Summary: {item.description}</p>
                        <p>Genre: {item.genre}</p>
                        <p>Cast: {item.cast}</p>
                        <a target='_blank' href={item.watch_url}>
                            <button>Watch Now</button>
                        </a>

                    </li>
                )
            })}

        </ul>
    )
}

export default NetflixSeries