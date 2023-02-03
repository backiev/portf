import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='font-mono'>
      {/* HEADER */}
      <div className="flex justify-between items-center mx-auto max-w-2xl py-4">
          <div className='flex items-center'>
            <div className="font-bold text-lg mr-10">Backiev</div>
            <a href="/" className='mr-5 hover:underline'>Работы</a>
            <a href="/" className='hover:underline'>Github</a>
          </div>
          <button>Change</button>
      </div>

      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-xl">
        <div className="preview">
          <div className="img">123</div>
          <div className="p-4 bg-gray-700 rounded text-center">Привет, меня зовут Бакиев Фархат</div>
        </div>
      </div>
    </div>
  )
}

export default App
