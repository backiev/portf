import React from 'react'

export const Title = ({currentTheme}) => {
  return (
    <div className="name-title flex justify-between my-6 container">
        <div>
        <div className='text-4xl font-bold'>Бакиев Фархат</div>
        <div>Junior Frontend Developer</div>
        </div>
        <div className='h-auto w-32 '>
          <img src="./images/me.jpg" alt="me" className='rounded-full border-white border-2 border-solid' style={{borderColor: currentTheme.borderColor}}/>
        </div>
    </div>
  )
}
