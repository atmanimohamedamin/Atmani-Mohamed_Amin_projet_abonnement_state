import React from 'react'
import './Summary.css'

export default function Summary(props) {
  return (
    <div className='containerRightSummary'>
        <div className='pt-8'>
            <p className='titlePinfo text-[40px]'>Finishing up</p>
            <p className='text-gray-600'>Double-check everything looks OK before confirming</p>
        </div>
        <div className='divGray h-[600px} w-[500px] bg-gray-200 mt-8'>
            <div className='pt-8 flex justify-between'>
                <div>
                    <p className='text-indigo-950 text-[20px] font-bold'>
                        Arcade(Yearly)
                    </p>
                    <button className="underline">Change</button>
                </div>
                <div >
                    {props.toggle}
                </div>
            </div>
            <div className='divBorder pt-8 mt-8 flex justify-between border-'>
                <div>
                    <p className='text-gray-600'>online service</p>
                </div>
                <div>
                    <p className='text-indigo-850 font-bold'>+$10/yr</p>
                </div>
            </div>
            <div className='flex justify-between pt-6 pb-8'>
                <div>
                    <p className='text-gray-600'>Customizable Profile</p>   
                </div>
                <div>
                    <p className='text-indigo-850 font-bold'>+$20/yr</p>
                </div>
            </div>
        </div>
            <div className='flex justify-between w-[95%]'>
                <p>Total</p>
                <p className='text-indigo-600 text-[23px] font-bold'>${props.total}</p>
            </div>
    </div>
  )
}
