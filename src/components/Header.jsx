import React from 'react';


export const Header = () => {
    return (
        <header className="flex justify-between items-center mx-auto max-w-2xl py-4">
          <div className='flex items-center'>
            <div className="font-bold text-lg mr-10">Backiev</div>
            <a href="#projects" className='mr-5 hover:underline'>Проекты</a>
            <a href="#links" className='hover:underline'>Github</a>
          </div>
          <button>Change</button>
        </header>
    )
}