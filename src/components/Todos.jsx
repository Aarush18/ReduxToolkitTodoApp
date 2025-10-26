import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos?.todos || []);
    const dispatch = useDispatch(); 

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEditing = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const saveUpdate = () => {
        dispatch(updateTodo({ id: editId, text: editText }));
        setEditId(null);
        setEditText("");
    };

    return (
        <div className="mt-8 w-full max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Your Todos</h2>
            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-800/70 px-5 py-3 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:bg-gray-700/90 hover:scale-105"
                    >
                        {editId === todo.id ? (
                            <input
                                type="text"
                                className="flex-1 bg-gray-700 text-white px-3 py-1 rounded outline-none border border-indigo-500"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span className="text-white font-medium">{todo.text}</span>
                        )}

                        <div className="flex space-x-2">
                            {editId === todo.id ? (
                                <button
                                    onClick={saveUpdate}
                                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
                                >
                                    ✅
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEditing(todo)}
                                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
                                >
                                    ✏️
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
                            >
                                ❌
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
