import React from 'react'
import './Pickadd.css'
export default function Pickadd(props) {
    let online = props.online
    let storage = props.storage
    let profile = props.profile

  const handleOnline = (event) =>{
    if(event){
      props.setOnline(false)
    }else{
      props.setOnline(true)
    }}
    const handleStorage = (event) =>{
        if(event){
          props.setStorage(false)
        }else{
          props.setStorage(true)
        }}

    const handleProfile = (event) =>{
            if(event){
              props.setProfile(false)
            }else{
              props.setProfile(true)
            }}
  return (
    <div className='containerRightPickadd'>
        <div className='pt-8'>
            <p className='titlePinfo text-[40px]'> Pick add-ons</p>
            <p className='text-gray-600 '>Add ons help enhance your gaming experience.</p>
        </div>
        <div className='flex flex-col gap-4 pt-5'>
            <div  id='pickaddOption' className='focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divLeftPickadd pl-5'>
                    <input onChange={() => handleOnline(online)} type="checkbox" defaultUnChecked className="checkbox h-4 w-4 rounded-none" />
                </div>
                <div className='divMidPickadd w-[40%]'>
                    <p className='text-[20px] font-bold text-indigo-950'>Online service</p>
                    <p className='text-xs'>Acces to multiplayer games</p>
                </div>
                <div className='flex justify-end items-center w-[30%]'>
                    <p>{props.frequence ? `$ ${props.priceAddMonth[0]}/mo` : `$ ${props.priceAddYear[0]}/yr`}</p>
                </div>
            </div>
            <div  id='pickaddOption' className='focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divLeftPickadd pl-5'>
                    <input onChange={() => handleStorage(storage)} type="checkbox" defaultUnChecked className="checkbox h-4 w-4 rounded-none" />
                </div>
                <div className='divMidPickadd w-[40%]'>
                    <p className='text-[20px] font-bold text-indigo-950'>Larger Storage</p>
                    <p className='text-xs'>Extra 1TB of cloud save</p>
                </div>
                <div className='flex justify-end items-center w-[30%]'>
                    <p>{props.frequence ? `$ ${props.priceAddMonth[1]}/mo` : `$ ${props.priceAddYear[1]}/yr`}</p>
                </div>
            </div>
            <div  id='pickaddOption' className='focus:border-purple-700 focus:bg-slate-200' tabIndex="0">
                <div className='divLeftPickadd pl-5'>
                    <input onChange={() => handleProfile(profile)} type="checkbox" defaultUnChecked className="checkbox h-4 w-4 rounded-none" />
                </div>
                <div className='divMidPickadd w-[50%]'>
                    <p className='text-[20px] font-bold text-indigo-950'>Customizable Profile</p>
                    <p className='text-xs'>Custom them on your profile</p>
                </div>
                <div className='flex justify-end items-center w-[20%]'>
                    <p>{props.frequence ? `$ ${props.priceAddMonth[2]}/mo` : `$ ${props.priceAddYear[2]}/yr`}</p>
                </div>
            </div>
            


        </div>
    </div>
  )
}
