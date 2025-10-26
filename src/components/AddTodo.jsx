import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex items-center space-x-3 mt-12 bg-gray-900/60 p-4 rounded-lg shadow-md backdrop-blur-md">
            <input
                type="text"
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg outline-none border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 transition duration-200"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-200 transform hover:scale-105 active:scale-95"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
