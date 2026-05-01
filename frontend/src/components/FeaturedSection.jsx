import React from 'react'
import Title from './Title'
import CarCard from './CarCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeaturedSection = () => {
    const navigate = useNavigate();
    
     const {cars} =useAppContext();

     
  return (

    <div>
      <Title title="Featured Cars" subTitle="Discover our selection of top-rated vehicles and Enjoy the best driving experience" />


    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
  {
    cars.slice(0,6).map((car) => (
      <div key={car._id}>
        <CarCard car={car} />
      </div>
    ))
  }
</div>

<div className='flex justify-center px-5 py-5 '>
    <button
onClick={()=>{
 navigate('/cars');
    scrollTo(0,0)
}  
}
className='flex items-center  gap-2 px-6 py-2 border border-borderColor hover:bg-blue-500 rounded-md mt-18 cursor-pointer'>
  Explore all cars 
  <img src={assets.arrow_icon} alt="arrow" />
</button>
</div>

 </div>
  )
}

export default FeaturedSection
