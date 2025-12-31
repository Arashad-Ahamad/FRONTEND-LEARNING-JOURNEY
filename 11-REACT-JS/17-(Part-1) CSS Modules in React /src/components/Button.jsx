import { flushSync } from 'react-dom'
import styles from './Button.module.css'

function Button() {
    const isActive = true
    return (
        <>
            <button className={styles.btn}>Click Me</button>
            <p><button className={isActive ? styles.active : styles.btn}>Click Me</button></p>
        </>
    )
}

export default Button