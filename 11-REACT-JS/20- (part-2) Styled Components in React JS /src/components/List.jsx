import styles from "./List.module.css"
import styled from "styled-components";
function List(props) {
    const { name, id, img_url, rating, description, cast, genre, watch_url } = props.item
    console.log(props);
    const Button = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${props => props.rating >= 8.5 ? '#7dcea0' : '#f7dc6f'};
    color: var(--btn-color);
    font-weight: 'bold';
        cursor: 'pointer';
    
    
    `
    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average
    return (
        <li key={id} className={styles.card}>
            <img src={img_url} alt="img" width='40%' />
            <div className={styles['card-content']}>
                <h2>Name: {name}</h2>
                <h3>Rating: <span className={`${styles.rating}  ${ratingClass}`}>{rating}</span></h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>
                <a target="_blank" href={watch_url}>
                    <Button rating = {rating}>Watch Now</Button>
                </a>
            </div>
        </li>
    )
}

export default List