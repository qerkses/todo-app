'use client'

import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="w-full max-w-md mx-auto mt-4 sm:mt-10 px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">To-Do List</h1>
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded text-gray-800 placeholder-gray-400 mb-2 sm:mb-0 sm:mr-2"
              placeholder="Enter a new task"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 flex items-center justify-center"
            >
              <PlusCircle className="w-5 h-5 mr-1" />
              <span>Add Task</span>
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map(task => (
              <li key={task.id} className="flex items-center p-2 bg-gray-50 rounded">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-2 text-red-500 hover:text-red-700 transition duration-200"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

