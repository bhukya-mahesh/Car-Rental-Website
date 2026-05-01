import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-black">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img alt="car rent logo" className="h-11" src={assets.logo} />
                    <p className="mt-6 text-sm">
                        Experience the freedom of the open road with our car rental service. Whether you're planning a weekend getaway or a business trip, we have the perfect vehicle for you. With a wide range of cars to choose from, competitive prices, and exceptional customer service, we make renting a car easy and convenient. Book your next adventure with us and hit the road in style!
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://imgs.search.brave.com/muMByE0tLup2i2OLvISD5_94I-FC9zvxPZP2M_fHA6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9h/cHAtc3RvcmUtZ29v/Z2xlLXBsYXktbG9n/by5wbmc" alt="google play" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/cars">Cars</a></li>
                            <li><a href="/my-bookings">My Bookings</a></li>
                            <li><a href="/privacy-policy">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91-7981569848</p>
                            <p>CarRent@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="/home">Car-Rental</a>. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
