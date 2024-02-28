import React, { useState } from 'react'
import './Planpage.css'
import card1logo from './../../img/icon-arcade.svg'
import card2logo from './../../img/icon-advanced.svg'
import card3logo from './../../img/icon-pro.svg'

export default function Planpage(props) {
    const [toggle, setToggle] = useState(true)


    let change = () => {
        setToggle(!toggle)
    }

    props.setFrequence(toggle)
  return (
    <div className='containerRightPlan'>
        <div className='pt-8'>
            <h1 className='titlePinfo'> Select your plan</h1>
            <p className='text-gray-600 '>You have the option of Monthly or yearly billing</p>
        </div>
        <div className='flex pt-8 gap-4'>
            <div onClick={() => props.setTotal(toggle ? props.priceMonth[0] : props.priceYear[0])} className='card1 focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divTopCard1'>
                    <img className='card1logo' src={card1logo} alt="" />
                </div>
                <div className='divBottomCard1'>
                    <p className='titleCard'>Arcade</p>
                    <p className='text-gray-400'> {toggle ? `$ ${props.priceMonth[0]}/mo` : `$ ${props.priceYear[0]}/yr`} </p>
                </div>
            </div>
            <div onClick={() => props.setTotal(toggle ? props.priceMonth[1] : props.priceYear[1])} className='card2 focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divTopCard2'>
                    <img className='card2logo' src={card2logo} alt="" />
                </div>
                <div className='divBottomCard2'>
                    <p className='titleCard'>Advenced</p>
                    <p className='text-gray-400'>{toggle ? `$ ${props.priceMonth[1]}/mo` : `$ ${props.priceYear[1]}/yr`}</p>
                </div>
            </div>
            <div onClick={() => props.setTotal(toggle ? props.priceMonth[2] : props.priceYear[2])} className='card3 focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divTopCard3'>
                    <img className='card1logo' src={card3logo} alt="" />
                </div>
                <div className='divBottomCard3'>
                    <p className='titleCard'>Pro</p>
                    <p className='text-gray-400'>{toggle ? `$ ${props.priceMonth[2]}/mo` : `$ ${props.priceYear[2]}/yr`}</p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-7 h-[60px] bg-blue-200 flex justify-around items-center'>
            {
                toggle ? <p className='text-indigo-950 font-bold'>Monthly</p> : <p className='text-gray-400 font-bold'>Monthly</p>
            }

            <input type="checkbox" className="toggle" onChange={change} />

            {
                !toggle ?  <p className='text-indigo-950 font-bold '>Yearly</p> : <p className='text-gray-400 font-bold '>Yearly</p>
            }

        </div>

           
    </div>
  )
}
