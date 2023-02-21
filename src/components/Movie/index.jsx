import styles from './movie.module.css'
import { TbTrash } from 'react-icons/tb'

export function Movie (){
    return(
        <div className={styles.movie}>
            <button className={styles.checkContainer}>
                <div />
            </button>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat pharetra ipsum at congue.</p>

            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}