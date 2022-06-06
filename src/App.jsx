import { useState } from "react"
import { Header } from "./components/Header"
import { Task } from "./components/Task"


function App() {
  const [tasks, SetTasks] = useState([ 
      "Fazer um bolo",
      "Lavar a louça"
  ])

  const [newTask, setNewTask] = useState('')

  function handleNewTask(event) {
    event.preventDefault()

    SetTasks([
      ...tasks,
      newTask
    ])

    console.log(tasks)
  }

  function handleNewTaskChange({target}) {
    console.log(target.value)

    setNewTask(target.value)
  }

  return (
    <>
      <Header />

      <main className="w-full">

        <form
          onSubmit={handleNewTask}
          className="w-4/6 m-auto py-3 flex -mt-8"
        >
          <input
            onChange={handleNewTaskChange}
            className="w-4/5 bg-box outline-0 p-2 text-white placeholder:text-gray-600"
            type="text"
            placeholder="Adicione uma tarefa..."
          />
          <button
            type="submit"
            className="flex-1 bg-blue text-white hover:bg-sky-600 transition-colors">
            Enviar
          </button>
        </form>

        <header className='w-4/6 m-auto flex justify-between items-center mb-2'>
          <div className='text-xs space-x-1'>
            <span className='text-blue'>Tarefas Criadas</span>
            <span className='p-1 text-white bg-box rounded-md'>{tasks.length}</span>
          </div>

          <div className='text-xs space-x-1'>
            <span className='text-blue'>Concluídas</span>
            <span className='p-1 text-white bg-box rounded-md'>0 de {tasks.length}</span>
          </div>
        </header>

        {tasks.map((task, index) => {
          return (
            <Task 
              key={index}
              title={task}
            />
          )
        })}

      </main>
    </>
  )
}

export default App
