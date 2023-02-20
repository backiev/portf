import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'


export const Links = () => {
  return (
    <div className='my-6' id="links">
        <div className="title-block mb-3 text-xl underline underline-offset-4 decoration-stone-200 decoration-4 font-bold">Ссылки</div>
        <div className='flex flex-col'>
          <a href='https://github.com/backiev' target={'_blank'} className='text-cyan-400 hover:underline p-2 hover:bg-cyan-800/10 ease-in duration-200 rounded w-2/4 flex items-center'>
            <FontAwesomeIcon icon={faGithub} className="text-lg"/> 
            <span className='ml-2'>@backiev</span>
          </a>
          <a href='https://t.me/backiev' target={'_blank'} className='text-cyan-400 hover:underline p-2 hover:bg-cyan-800/10 ease-in duration-200 rounded w-2/4 flex items-center'>
            <FontAwesomeIcon icon={faTelegram} className="text-lg"/> 
            <span className='ml-2'>@backiev</span>
          </a>
        </div>
    </div>
  )
}
