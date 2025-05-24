import React, { useState } from 'react'

export function Login(props) {
    

    return (
        <div className='bg-slate-100 w-screen h-screen'>
           <Navbar />
        </div>
    )
}


const navList=["about","mode","signup"]

const Navbar=()=>{
    const [active,setActive]=useState(0)


    return(
       <div  className='w-full flex flex-row justify-between items-center px-2 h-[100px]'>
         <div>
            <img src={require('../assets/logo.png')} className='size-20 shadow-2xl rounded-full hover:scale-[1.01]' alt="" srcset="" />
            </div>
            <div className='flex flex-row gap-4 capitalize'>
                {
                    navList.map((title,index)=>(
                        <span onClick={()=>setActive(index)} className={`${active===index?"font-bold underline":"hover:text-slate-400 hover:border-b-2"} cursor-pointer hover:scale-[1.01] `} key={index}>{title}</span>
                    ))
                }       
            </div>
       </div>
    )
}