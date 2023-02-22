import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

const LOCAL_STORAGE_KEY = 'movielist:savedMovies';

function App() {
  const [tasks,setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved)); //transforma de volta em array o que foi transformado em string pelo 'stringfy'
    }
  }

  useEffect(()=>{
    loadSavedTasks();
  },[]);

  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks)) //stringfy transforma o array em uma string;
  }

  function addTask(movieTitle){
    setTasksAndSave([
      ...tasks, // para puxar as tasks quando criar uma nova;
      {
        id: crypto.randomUUID(), // nova função dos novos browsers, que retorna um id aleatorio em string // metodo utilizado para gerar uma id unica em 'deletes' e 'creates'
        title: movieTitle,
        isCompleted: false
      }
    ])
  }

  function toggleMovieCompletedById(movieId){
    const newTasks = tasks.map(movie=>{
      if(movie.id === movieId){
        return{
          ...movie,
          isCompleted: !movie.isCompleted //a exclamação reverte um valor booleano
        }
      }
      return movie;
    });
    setTasksAndSave(newTasks);
  }

  function deleteMovieById(movieId){
    const newTasks = tasks.filter(movie=>movie.id != movieId);
    setTasksAndSave(newTasks);
  }

  return (
      <>
        <Header onAddTask={addTask}/>
        <Tasks
          tasks={tasks}
          onComplete={toggleMovieCompletedById}
          onDelete={deleteMovieById}
        />
      </>
      
  )
}

export default App