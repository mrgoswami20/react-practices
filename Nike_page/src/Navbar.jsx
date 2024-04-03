import React from "react"
import logo from './images/brand_logo.png';


const Navbar = () => {
    return(
        <div className="flex justify-between p-4 h-14 fixed min-w-full shadow-md">
            <div className="pl-10">
                <img className="h-9" src={logo} alt="" />
            </div>
            <div className="flex justify-between gap-6 font-bold text-sm uppercase">
                <div className=" cursor-pointer">Menu</div>
                <div className=" cursor-pointer">Location</div>
                <div className=" cursor-pointer">About</div>
                <div className=" cursor-pointer">Contact</div>
            </div>
            <div className=" pr-10 font-semibold text-white">
                <button className=" bg-red-600 pl-2 pr-2 pb-1 border rounded-sm border-hidden">Login</button>
            </div>
        </div>
    )
}

export default Navbar;