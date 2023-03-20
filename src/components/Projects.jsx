import React from 'react'

export const Projects = () => {

  const projects = [
    {id: 0, title: 'Сайт с фильмами', text: 'Создание листов фильмов', url: 'https://backiev.github.io/films', img: './images/films.png'},
    {id: 1, title: 'Сайт-карточка', text: 'Симулятор онлайн карточки', url: 'https://backiev.github.io/card/', img: './images/card.png'},
    {id: 2, title: 'Верстка сайта', text: 'Адаптивная верстка сайта', url: 'https://backiev.github.io/zendit/dist/', img: './images/single.png'},
  ]

  return (
    <div className='my-6 container' id="projects">
          <div className="title-block">Проекты</div>
          <div className='flex mt-4 flex-wrap '>
            {projects.map(item => (
              <a href={item.url} target={'_blank'} className='flex flex-col items-center  w-full md:basis-1/2 mb-4 cursor-pointer'>
                <div className='h-64 w-80 md:h-32 md:w-40 bg-image rounded' style={{backgroundImage: `url(${item.img})`}}></div>
                <div className='text-center'>
                  <div className='font-bold mt-1'>{item.title}</div>
                  <div className='text-sm'>{item.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
  )
}
