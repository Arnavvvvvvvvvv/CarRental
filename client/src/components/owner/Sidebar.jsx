import React, { useState } from 'react'
import { assets, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Sidebar = () => {
    const {user, axios, fetchUser}=useAppContext();
    const location=useLocation();
    const [img, setImg]= useState('')

    const updateImage= async ()=>{
        try{
            const formData= new FormData();
            formData.append('image', img);

            const {data}= await axios.post('/api/owners/update-image', formData);
            if(data.success){
                fetchUser();
                toast.success(data.message);
                setImg('');
            }else{
                toast.error(data.message);
            }

        } catch(error){
            toast.error(error.message);
        }
    }

  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
        <div className='group relative'>
            <label htmlFor="image">
                <img src={img? URL.createObjectURL(img): user?.image || "https://www.mjunction.in/wp-content/uploads/2020/09/Dummy.jpg" } alt="" className='h-17 w-20 md:h-40 md:w-40 rounded-3xl mx-auto'/>
                <input type="file" id='image' accept='image/*' hidden onChange={e=>setImg(e.target.files[0])} />

                <div className='absolute top-0 right-2 hidden bg-gray-800 group-hover:flex items-center justify-center cursor-pointer'>
                    <img src={assets.edit_icon} className='h-5 w-5' alt="" />

                </div>
            </label>
        </div> 
        {/* if image exists to edit then show save button */}
        {img && (
            <button className='absolute top-0 right-0 flex p-2 gap-1 bg-blue-600 text-blue-300 cursor-pointer' onClick={updateImage}>Save <img src={assets.check_icon} width={13} alt="" /> </button>
        )}
        <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

        <div className='w-full'>
            {ownerMenuLinks.map((link, index)=>(
                <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${link.path===location.pathname?'bg-blue-200 text-blue-600':'text-gray-600'}`}>
                    <img src={link.path === location.pathname ? link.coloredIcon:link.icon } alt="menuicon" />
                    <span className='max-md:hidden'>{link.name}</span>        {/*small screen pe text hidden*/}
                </NavLink>
            ))}
        </div>
      
    </div>
  )
}

export default Sidebar
