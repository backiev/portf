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
      <div className="mx-auto max-w-xl my-6">

        {/* PREVIEW */}
        <div className="preview">
          <div className="img flex justify-center my-4"><img src="/images/cat.gif" alt="caty" /></div>
          <div className="p-4 bg-gray-700 rounded text-center">Привет, я веб-разработчик</div>
        </div>

        {/* MINE TITLE */}
        <div className="name-title flex justify-between my-6">
          <div>
            <div className='text-4xl font-bold'>Бакиев Фархат</div>
            <div>Junior Fronted Developer</div>
          </div>
          <div className='h-auto w-32 '><img src="/images/me.jpg" alt="me" className='rounded-full border-white border-2 border-solid'/></div>
        </div>

        {/* Work block */}
        <div className='my-6'>
          <div className="title-block mb-3 text-xl underline underline-offset-4 decoration-stone-200 decoration-4 font-bold">Работа</div>
          <p className="text-block indent-5">Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.</p>
        </div>

        {/* Projects block */}
        <div className='my-6'>
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

        {/* Links */}
        <div className='my-6'>
          <div className="title-block mb-3 text-xl underline underline-offset-4 decoration-stone-200 decoration-4 font-bold">Ссылки</div>
          <div className='flex flex-col'>
            <a href='' className='text-cyan-400 hover:underline p-2 hover:bg-cyan-800/10 ease-in duration-200 rounded w-2/4'>GitHub: @backiev</a>
            <a href='' className='text-cyan-400 hover:underline p-2 hover:bg-cyan-800/10 ease-in duration-200 rounded w-2/4'>telegram: @backiev</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
