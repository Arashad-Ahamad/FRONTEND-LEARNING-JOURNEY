import seriesData from '../Api/seriesData.json'
import SeriesCard from '../components/Lists'
function NetflixSeries() {
    return (
        <ul>{seriesData.map(item => {
            return <SeriesCard key= {item.id} item = {item} />
        }
        )}

        </ul>
    )
}

export default NetflixSeries