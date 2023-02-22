import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header ({ onAddTask }){
    const [title,setTitle] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value); // tudo que for digitado no 'input' vai ser depositado no array do useState
    }

    return(
        <header className={styles.header}>
            <p>NOSSA LISTA DE FILMES</p>
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder='Adicionar um novo filme...' type='text' value={title} onChange={onChangeTitle} />
                <button>
                    Adicionar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}  