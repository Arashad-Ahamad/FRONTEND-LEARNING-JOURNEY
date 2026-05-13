import "./List.css"
function List(props) {
    const { name, id, img_url, rating, description, cast, genre, watch_url } = props.item
    console.log(props);
    const btnStyle = {
        padding: '1.2rem 2.4rem',
        border: 'none',
        fontSize: '1.6rem',
        backgroundColor: 'var(--btn-hover-bg-color)',
        color: 'var(--white-color)'
    }
    return (
        <li key={id} className="card">
            <img src={img_url} alt="img" width='40%' />
            <div className="card-content">
                <h2>Name: {name}</h2>
                <h3>Rating: {rating}</h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>
                <a target="_blank" href={watch_url}>
                    <button style={btnStyle}>Watch Now</button>
                </a>
            </div>
        </li>
    )
}

export default List