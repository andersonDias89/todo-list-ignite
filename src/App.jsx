import { AddTask } from "./components/AddTask"
import { Header } from "./components/Header"
import { Task } from "./components/Task"

function App() {
  return (
    <>
      <Header />

      <main className="w-full">
        <AddTask/>
        <Task/>
      </main>
    </>
  )
}

export default App
