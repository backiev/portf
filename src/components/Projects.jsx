import React from 'react'

export const Projects = () => {
  return (
    <div className='my-6' id="projects">
          <div className="title-block mb-3 text-xl underline underline-offset-4 decoration-stone-200 decoration-4 font-bold">Проекты</div>
          <div className='flex mt-4 flex-wrap'>

            <div className='project-block flex flex-col items-center basis-1/2 mb-4 cursor-pointer'>
              <div className='h-auto w-40'><img src="/images/card.png" alt="card" className='rounded'/></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт-карточка</div>
                <div className='text-sm'>Симулятор онлайн карточки</div>
              </div>
            </div>
            <div className='project-block flex flex-col items-center basis-1/2 	mb-4 cursor-pointer'>
              <div className='h-auto w-40'><img src="/images/card.png" alt="card" className='rounded'/></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт-карточка</div>
                <div className='text-sm'>Симулятор онлайн карточки</div>
              </div>
            </div>
            <div className='project-block flex flex-col items-center basis-1/2 mb-2	cursor-pointer'>
              <div className='h-auto w-40'><img src="/images/card.png" alt="card" className='rounded'/></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт-карточка</div>
                <div className='text-sm'>Симулятор онлайн карточки</div>
              </div>
            </div>
            <div className='project-block flex flex-col items-center basis-1/2 mb-2	cursor-pointer'>
              <div className='h-auto w-40'><img src="/images/card.png" alt="card" className='rounded'/></div>
              <div className='text-center'>
                <div className='font-bold mt-1'>Сайт-карточка</div>
                <div className='text-sm'>Симулятор онлайн карточки</div>
              </div>
            </div>

          </div>
        </div>
  )
}
