import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header (){
    return(
        <header className={styles.header}>
            <form className={styles.newTaskForm}>
                <input placeholder='Adicionar um novo filme...' type='text' />
                <button>
                    Adicionar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}  