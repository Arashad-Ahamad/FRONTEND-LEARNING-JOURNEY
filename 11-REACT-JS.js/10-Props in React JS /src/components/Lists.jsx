function SeriesCard(props) {
    console.log(props);
        return (
                    <li key={props.item.id}>
                        <img src={props.item.img_url} alt="img" width= '40%' />
                        <h2>Name: {props.item.name}</h2>
                        <h3>Rating: {props.item.rating}</h3>
                        <p>Summary: {props.item.description}</p>
                        <p>Genre: {props.item.genre}</p>
                        <p>Cast: {props.item.cast}</p>
                        <a target='_blank' href={props.item.watch_url}>
                            <button>Watch Now</button> </a>
                    </li>
                )
}

export default SeriesCard