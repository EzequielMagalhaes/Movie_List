import styles from './tasks.module.css'
import { Movie } from '../Movie'

export function Task (){
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Filmes adicionados</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textGreen}>Filmes assistidos</p>
                    <span>1 de 10</span>
                </div>
            </header>
            <div className={styles.list}>
                <Movie />
            </div>
        </section>
    )
}