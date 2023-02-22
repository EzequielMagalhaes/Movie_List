import styles from './movie.module.css'
import { TbTrash } from 'react-icons/tb'

export function Movie({ movie }){
    return(
        <div className={styles.movie}>
            <button className={styles.checkContainer}>
                <div />
            </button>

            <p>{movie.title}</p>

            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}