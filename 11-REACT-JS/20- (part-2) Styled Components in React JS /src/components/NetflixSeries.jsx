import List from "./List"
import SeriesData from "../api/seriesData.json"
function NetflixSeries() {
    return (
        <ul className="grid grid-three-cols">
            {SeriesData.map(item => {
                return <List key={item.id} item={item} />

            })}
        </ul>
    )
}

export default NetflixSeries