function SeriesCard(props) {
    const {id, img_url, name, rating, description, genre, cast, watch_url} = props.item
    console.log(props);
        return (
                    <li key={id}>
                        <img src={img_url} alt="img" width= '40%' />
                        <h2>Name: {name}</h2>
                        <h3>Rating: {rating}</h3>
                        <p>Summary: {description}</p>
                        <p>Genre: {genre}</p>
                        <p>Cast: {cast}</p>
                        <a target='_blank' href={watch_url}>
                            <button>Watch Now</button> </a>
                    </li>
                )
}

export default SeriesCard