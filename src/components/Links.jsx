import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'


export const Links = () => {

  const links = [
    {id: 0, name: 'Github', link: 'https://github.com/backiev', nickname: '@backiev', icon: <FontAwesomeIcon icon={faGithub} className="text-lg"/>},
    {id: 1, name: 'Telegram', link: 'https://t.me/backiev', nickname: '@backiev', icon: <FontAwesomeIcon icon={faTelegram} className="text-lg"/> }
  ];

  return (
    <div className='my-6 container' id="links">
        <div className="title-block">Ссылки</div>
        <div className='flex flex-col'>
          {links.map(item => (
            <a href={item.link} target={'_blank'} className='text-cyan-400 hover:underline p-2 hover:bg-cyan-800/10 ease-in duration-200 rounded w-2/4 flex items-center'>
              {item.icon}
              <span className='ml-2'>{item.nickname}</span>
            </a>
          ))}
        </div>
    </div>
  )
}
