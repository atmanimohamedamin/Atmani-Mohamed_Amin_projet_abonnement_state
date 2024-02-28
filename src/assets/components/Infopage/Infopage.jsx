import React from 'react'
import './Infopage.css'
export default function Infopage() {
  return (
        <div className='flex flex-col justify-center w-[100%}'>
                <div className='containerRightInfo'>
                     <div className='pt-8'>
                         <h1 className='titlePinfo'>Personal info</h1>
                         <p className='text-gray-600 '>Please provide your name, e-mail, address and phone number.</p>
                     </div>
                     <div className='pt-8'>
                         <p className='titleInformation'>Your name is:</p>
                         <input className='inputName p-3' type="text" placeholder='Vingt-six'/>

                         <p className='titleInformation'>Your e-mail is:</p>
                         <input className='inputName p-3' type="e-mail" placeholder='Vingt-six@gmail.com'/>

                         <p className='titleInformation'>Your phone number is:</p>
                         <input className='inputName p-3' type="text" placeholder='e.g. +1234 567 890'/>
                     </div>
                </div>
         </div>
    
  )
}
