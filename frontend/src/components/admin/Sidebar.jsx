import React from 'react'
import {  ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast'
import axios from 'axios'

const Sidebar = () => {
    
    const {user ,axios ,fetchUser} = useAppContext();
    const location = useLocation();
    const [image, setImage] = useState('');

    const updateImage = async (e) => {
        try {
          const formData = new FormData()
          formData.append('image',image)

          const{data} = await axios.post('/api/admin/update-image',formData)
          if(data.success){
            fetchUser()
            toast.success(data.message)
            setImage('')
          }else{
            toast.success(data.message)
          }
          
        } catch (error) {
           toast.error(error.message)
        }
    }

  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
  
  <div className='group relative'>
    
    <label htmlFor="image">
      <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'
        src={
          image
            ? URL.createObjectURL(image)
            : user?.image ||
              "https://wallpaperaccess.com/full/8675170.jpg"
        }
        alt=""
      />

      <input
        type="file"
        id="image"
        accept="image/*"
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />

      <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
        <img src={assets.edit_icon} alt="" />
      </div>
    </label>

  </div>
   {image && (
    <button  className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'
     onClick={updateImage} >Save
        <img src={assets.check_icon} width={13} alt="" 
        />
    </button>
   )}
   <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>
   <div>
    {ownerMenuLinks.map((link, index) => (
      <NavLink key={index} to={link.path} className={`flex items-center gap-3 py-2 px-4 rounded-lg w-full mt-6 ${link.path === location.pathname ? 'bg-primary  text-primary-foreground' : 'text-gray-500'}`}>
        <img src={link.path === location.pathname ? link.colored : link.icon} alt="" />
        <span className='max-md:hidden'>{link.name}</span>
        <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-8 rounded-1 ${link.path === location.pathname ? 'bg-primary' : ''}`}>

        </div>
      </NavLink>
     )) }
   </div>
</div>
  )
}

export default Sidebar
