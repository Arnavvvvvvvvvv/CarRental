import React, {useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { motion } from "motion/react";

const Hero = () => {
  const[pl, setpl]= useState('')

  const {pickupDate, returnDate, setPickupDate, setReturnDate, navigate}= useAppContext();

  const handleSearch= (e)=>{
    e.preventDefault();
    navigate('/cars?pickupLocation='+pl+'&pickupDate='+pickupDate+'&returnDate='+returnDate);  
  }

  return (
    <motion.div 
    initial={{y:50, opacity:0}} 
    animate={{y:0, opacity:1}} 
    transition={{duration: 0.8}}
    className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <motion.h1 initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.8, delay: 0.2 }} className='text-4xl md:text-5xl font-semibold'>Luxury cars on Rent</motion.h1>

      <motion.form
      initial={{scale:0.6, opacity:0}}
      animate={{scale:1, opacity: 1}}
      transition={{duration: 0.6, delay:0.4}}
      onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.3)]'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8'>
          <div className='flex flex-col items-start gap-2'>
            <select required value={pl} onChange={(e)=>setpl(e.target.value)}>
              <option value="">Pickup Location</option>
              {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
            </select>
            <p className='px-1 text-sm text-gray-500'>{pl? pl: 'Please select location'}</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="pickupdate">Pick-up Date</label>
            <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickupdate" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="returndate">Return Date</label>
            <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="returndate" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
          </div>
          
        </div>
        <motion.button whileHover={{scale: 1.07}} whileTap={{scale:0.95}} className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-blue-800 hover:bg-blue-600 text-white rounded-full cursor-pointer'>
            <img src={assets.search_icon} alt="search" className='brightness-300'/>
            Search
        </motion.button>
      </motion.form>

      <img src={assets.main_car} alt="car" className='max-h-74'/>
    </motion.div>
  )
}

export default Hero
