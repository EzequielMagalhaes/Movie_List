import styles from './movie.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export function Movie({ movie, onComplete, onDelete }){
    return(
        <div className={styles.movie}>
            <button className={styles.checkContainer} onClick={()=>onComplete(movie.id)}>
                {movie.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={movie.isCompleted ? styles.textCompleted : ''}>{movie.title}</p>

            <button className={styles.deleteButton} onClick={()=> onDelete(movie.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}