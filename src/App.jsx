import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center px-6">
      <div className="bg-gray-800/60 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          🚀 Redux Toolkit Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
