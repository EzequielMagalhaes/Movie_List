import styles from './tasks.module.css'
import { Movie } from '../Movie'

export function Tasks({ tasks, onComplete, onDelete }){
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(movie=>movie.isCompleted).length

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Filmes adicionados</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textGreen}>Filmes assistidos</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map(movie=>(
                    <Movie key={movie.id} movie={movie} onComplete={onComplete} onDelete={onDelete}/>
                ))}
            </div>
        </section>
    )
}