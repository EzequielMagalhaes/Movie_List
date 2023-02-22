import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  const [tasks,setTasks] = useState([]);

  function addTask(movieTitle){
    setTasks([
      ...tasks, // para puxar as tasks quando criar uma nova;
      {
        id: crypto.randomUUID(), // nova função dos novos browsers, que retorna um id aleatorio em string // metodo utilizado para gerar uma id unica em 'deletes' e 'creates'
        title: movieTitle,
        isCompleted: false
      }
    ])
  }
  return (
      <>
        <Header onAddTask={addTask}/>
        <Tasks
          tasks={tasks}
        />
      </>
      
  )
}

export default App