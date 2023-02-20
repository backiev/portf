import React from 'react'

export const Projects = () => {
  return (
    <div className='my-6' id="projects">
          <div className="title-block mb-3 text-xl underline underline-offset-4 decoration-stone-200 decoration-4 font-bold">Проекты</div>
          <div className='flex mt-4 flex-wrap'>

            <a href='https://thirsty-beaver-7b2037.netlify.app/' target={'_blank'} className='project-block flex flex-col items-center basis-1/2 mb-4 cursor-pointer'>
              <div className='h-32 w-40 bg-[url("/images/card.png")] bg-center bg-cover bg-no-repeat rounded'></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт-карточка</div>
                <div className='text-sm'>Симулятор онлайн карточки</div>
              </div>
            </a>
            <a href='https://stupefied-euler-1f02a6.netlify.app/' target={'_blank'} className='project-block flex flex-col items-center basis-1/2 	mb-4 cursor-pointer'>
              <div className='h-32 w-40 bg-[url("/images/keyboard.png")] bg-center bg-cover bg-no-repeat rounded'></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Симулятор клавиатуры</div>
                <div className='text-sm'>Красивая анимация клавиатуры</div>
              </div>
            </a>
            <a href='https://backiev.github.io/zendit/dist/' target={'_blank'} className='project-block flex flex-col items-center justify-center basis-1/2 mb-2	cursor-pointer'>
              <div className='h-32 w-40 bg-[url("/images/single.png")] bg-center bg-cover bg-no-repeat rounded'></div>
              {/* <div className='h-auto w-40'><img src="/images/single.png" alt="card" className='rounded'/></div> */}
              <div className='text-center'>
                <div className='font-bold mt-1'>Верстка сайта</div>
                <div className='text-sm'>Адаптивная верстка сайта</div>
              </div>
            </a>
            <a href='https://backiev.github.io/zendit/dist/' target={'_blank'} className='project-block flex flex-col items-center basis-1/2 mb-2	cursor-pointer'>
              <div className='h-32 w-40 bg-[url("/images/films.png")] bg-center bg-cover bg-no-repeat rounded'></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт с фильмами</div>
                <div className='text-sm'>Создание листов фильмов</div>
              </div>
            </a>

          </div>
        </div>
  )
}
