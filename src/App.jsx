import { useState } from 'react'
import Infopage from './assets/components/Infopage/Infopage'
import Planpage from './assets/components/Planpage/Planpage'
import Pickadd from './assets/components/Pickadd/Pickadd'
import Summary from './assets/components/Summary/Summary'
import LastPage from './assets/components/LastPage/LastPage'

import './App.css'

function App() {
  const [page, setPage] = useState(0)

  const priceMonth = [9,12,15]
  const priceYear = [90,120,150]

  const priceAddMonth = [1,2,2]
  const priceAddYear = [10,20,20]
  const [frequence, setFrequence] = useState(true)
  
  const [total, setTotal] = useState(0)

  const [online, setOnline] = useState(false)
  const [storage, setStorage] = useState(false)
  const [profile, setProfile] = useState(false)
  
  const [arcade, setArcade] = useState(false)
  const [advenced, setAdvenced] = useState(false)
  const [pro, setPro] = useState(false)

  return (
    <>
       <div className='container'>
         <div className='background'>
             <div className='divLeftInfo'>
                 <div className='bgImgInfo'>
                     <div className='containerLeftInfo'>
                         <div className='divLeftStep'>
                             <p id='circle' className={`${page == 0 ? 'bg-indigo-200 text-black':''}`}>1</p>
                         </div>
                         <div className='divRightStep'>
                             <p className='textStep1'>STEP 1</p>
                             <p className='textInfo1'>YOUR INFO</p>
                         </div>
                     </div>  
                     <div className='containerLeftInfo'>
                         <div className='divLeftStep'>
                             <p id='circle' className={`${page == 1 ? 'bg-indigo-200 text-black':''}`}>2</p>
                         </div>
                         <div className='divRightStep'>
                             <p className='textStep1'>STEP 2</p>
                             <p className='textInfo1'>SELECT PLAN</p>
                         </div>
                        
                     </div>  
                     <div className='containerLeftInfo'>
                         <div className='divLeftStep'>
                             <p id='circle' className={`${page == 2 ? 'bg-indigo-200 text-black':''}`}>3</p>
                         </div>
                         <div className='divRightStep'>
                             <p className='textStep1'>STEP 3</p>
                             <p className='textInfo1'>ADD-ONS</p>
                         </div>
                        
                     </div>  
                     <div className='containerLeftInfo'>
                         <div className='divLeftStep'>
                             <p id='circle' className={`${page == 3 ? 'bg-indigo-200 text-black':''}`}>4</p>
                         </div>
                         <div className='divRightStep'>
                             <p className='textStep1'>STEP 4</p>
                             <p className='textInfo1'>SUMMARY</p>
                         </div>
                        
                     </div>   
                 </div>
             </div>
             <div className='divRightInfo'>
                {
                  page == 0 ? <Infopage/> : ""
                }
                {
                  page == 1 ? <Planpage priceMonth={priceMonth} priceYear={priceYear} setFrequence={setFrequence} frequence={frequence} total={total} setTotal={setTotal} arcade={arcade} setArcade={setArcade} advenced={advenced} setAdvenced={setAdvenced} pro={pro} setPro={setPro}/> : ""
                }
                {
                    page == 2 ? <Pickadd priceAddMonth={priceAddMonth} priceAddYear={priceAddYear} setFrequence={setFrequence} frequence={frequence} total={total} setTotal={setTotal} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} profile={profile} setProfile={setProfile}/> : ""
                }   
                {
                    page == 3 ? <Summary setFrequence={setFrequence} frequence={frequence} priceMonth={priceMonth} priceYear={priceYear} priceAddMonth={priceAddMonth} priceAddYear={priceAddYear} total={total} setTotal={setTotal} /> : ""
                } 
                {
                    page == 4 ? <LastPage/> : ""
                }  
             </div>
                 <div className='divBtnNext'>
                    <button onClick={() => setPage(page+1)}  id='btnNext' className={`${page >= 3 ? 'hidden':''}`}>Next Step</button>
                    <button onClick={() => setPage(page+1)} className={`${page == 3 ? 'h-[45px] w-[110px] rounded-lg bg-indigo-600 text-white' : 'hidden'}`}>Confirm</button>
                 </div>
                 <div className='divBtnBack'>
                    <button onClick={() => setPage(page-1)} className={`${page == 0 || page == 4 ? 'hidden':'text-indigo'}`}>Go Back</button>
                 </div>
           </div>
        </div>

      
    </>
  )
}

export default App
