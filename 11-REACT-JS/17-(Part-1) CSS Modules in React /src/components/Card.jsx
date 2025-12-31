import styles from './Card.module.css'

function Card() {
  return (
    <>
      <h1 className={styles.heading}>Hello World</h1>
      <p className={`${styles.para} ${styles.lorem}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

export default Card 