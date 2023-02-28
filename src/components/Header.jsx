import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faCat } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-solid-svg-icons';


export const Header = ({setTheme, theme, currentTheme}) => {
    const toggleTheme = (item) => {
      if (item < 2) {
        setTheme(item+1);
      } else {
        setTheme(0);
      }
    }
    return (
        <header className="flex justify-between items-center mx-auto max-w-2xl py-4 container">
          <div className='flex items-center'>
            <div className="font-bold text-lg mr-10">Backiev</div>
            <a href="#projects" className='mr-5 hover:underline'>Проекты</a>
            <a href="#links" className='hover:underline'>Ссылки</a>
          </div>
          <button onClick={() => toggleTheme(theme)} className="border rounded border-solid w-10 h-10" style={{borderColor: currentTheme.borderColor}}>
            {theme === 0 ? <FontAwesomeIcon icon={faMoon} className="text-base"/> : " "}
            {theme === 1 ? <FontAwesomeIcon icon={faSun} className="text-base"/> : " "}
            {theme === 2 ? <FontAwesomeIcon icon={faCat} className="text-base"/> : " "}
          </button>
        </header>
    )
}