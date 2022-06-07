import { useState } from "react"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { VoidList } from "./components/VoidList"

import { v4 as uuid } from 'uuid'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Estudar javascript",
      isComplete: false
    },

    {
      id: uuid(),
      title: "Estudar react",
      isComplete: false
    }

  ])

 




  const [newTask, setNewTask] = useState('')
  function handleNewTask(event) {
    event.preventDefault()


    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: newTask,
        isComplete: false
      }
    ])

    
    setNewTask('')

  }

  function handleNewTaskChange({ target }) {
    setNewTask(target.value)

    
  }

  function deleteTask(id) {
    const taskList = tasks.filter(task => task.id !== id);

    setTasks(taskList);
  }

  function handleToggleTaskCompletion(id) {
    const taskList = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      
      return task;
    });
     
    setTasks(taskList);
  }

  const completes = tasks.filter(task => {
return task.isComplete !== false
  })

  


  return (
    <>
      <Header />

      <main className="w-full">

        <form
          onSubmit={handleNewTask}
          className="w-4/6 m-auto py-3 flex -mt-8 mb-6 space-x-2"
        >
          <input
            required
            value={newTask}
            onChange={handleNewTaskChange}
            className="w-4/5 bg-box text-sm outline-0 py-2 px-3 text-white placeholder:text-gray-600 rounded-md placeholder:text-sm"
            type="text"
            placeholder="Adicione uma tarefa..."
          />
          <button
            type="submit"
            className="flex-1 rounded-md bg-blue text-white hover:bg-sky-600 transition-colors">
            Criar
          </button>
        </form>

        {tasks.length > 0 &&
          <header className='w-4/6 m-auto flex justify-between items-center mb-2'>
            <div className='text-xs space-x-1'>
              <span className='text-blue'>Tarefas Criadas</span>
              <span className='p-1 text-white bg-box rounded-md'>{tasks.length}</span>
            </div>

            <div className='text-xs space-x-1'>
              <span className='text-blue'>Concluídas</span>
              <span className='p-1 text-white bg-box rounded-md'>{completes.length} de {tasks.length}</span>
            </div>
          </header>
        }

        {tasks.map((task) => {
          if (tasks.length > 0) {
            return (
              <Task
                handleToggleTaskCompletion={handleToggleTaskCompletion}
                id={task.id}
                isComplete={task.isComplete}
                onDeleteTask={deleteTask}
                key={task.id}
                title={task.title}
                task={task}
              />
            )
          }
        })}

        <div>
          {tasks.length === 0 &&
            <VoidList />
          }
        </div>

      </main>
    </>
  )
}

export default App
