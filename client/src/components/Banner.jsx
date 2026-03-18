import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const Banner = () => {
  const { axios, isOwner, setIsOwner } = useAppContext()
  const navigate = useNavigate()

  const changeRole = async () => {
    try {
      const { data } = await axios.post('/api/owners/change-role')
      if (data.success) {
        setIsOwner(true)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}}
    className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
      <div className='text-white'>
        <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
        <p className='mt-2'>Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className='max-w-130'>We take care of insurance, driver verification and secure payments- so you can earn passive income, stress-free.</p>

        <motion.button whileHover={{scale:1.15}} whileTap={{scale:0.9}} onClick={() => (isOwner ? navigate('/owner') : changeRole())} className='px-6 py-2 text-blue-900 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'>
          {isOwner ? 'Dashboard' : 'List your car'}
        </motion.button>
      </div>
      <motion.img
      initial={{opacity:0, x:50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, delay:0.7}}
      src={assets.banner_car_image} alt="carbanner" className='max-h-45 mt-10' />
    </motion.div>
  )
}

export default Banner