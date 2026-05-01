import React from 'react'
import Title from './Title';
import {assets} from '../assets/assets';

 const Testimonial = () => {
    const testimonials = [
  {
    name: "RajKumar",
    location: "Ghanpur, India",
    image: assets.testimonial_image_1,
    testimonial:
      "I loved how easy it was to rent a car. Everything was handled professionally and the support team was very helpful."
  },
  {
    name: "Anwar",
    location: "Kazipet, India",
    image: assets.testimonial_image_2,
    testimonial:
      "Excellent service! The car was delivered on time and the whole process was hassle-free. Highly recommend CarRental."
  },
  {
    name: "Ganesh",
    location: "Chinnapendyal, India",
    image: assets.testimonial_image_2,
    testimonial:
      "Great experience with CarRental! The prices are affordable and the service is reliable. I’ll definitely use it again."
  }
];
  return (
     <div className="py-38 px-6 md:px-12 lg:px-24 xl:px-32">
          <Title 
  title="What Our Customers Say" 
  subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world." 
/>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
                {testimonials.map((testimonial , index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"> 
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src= {assets.star_icon} alt="star-icon" />
                               
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
