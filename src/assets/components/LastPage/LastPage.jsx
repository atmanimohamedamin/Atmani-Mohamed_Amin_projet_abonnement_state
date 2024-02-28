import React from 'react'
import './LastPage.css'
import validation from './../../img/icon-thank-you.svg'
export default function LastPage() {
  return (
    <div className=' w-[100%] flex flex-col justify-center'>
        <div className='w-[50%} flex justify-center '>
            <img src={validation} alt="" />
        </div>
        <div className='flex justify-center'>
            <p className='text-indigo-950 text-[50px]'>Thank You!</p>
        </div>
        <div>
            <p className='text-center text-gray-400 font-bolder'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita totam veritatis
                ad repudiandae earum et nobis cupiditate. Amet harum quam labore inventore perferendis ab! 
                Repellat eius nisi ab provident?
            </p>
        </div>
    </div>
  )
}
