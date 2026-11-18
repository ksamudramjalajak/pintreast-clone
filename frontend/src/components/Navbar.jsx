import React from "react"
import logo from "../images/logo.png"
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="navbar flex items-center h-[80px] px-[30px]">
      <img className='w-[150px]' src={logo} alt="" />
      <div className="btns ml-7 flex items-center font-[500] gap-[25px]">
        <button>Today</button>
        <button>Watch</button>
        <button>Explore</button>
      </div>
      <div className="inputBox ml-5 w-[57vw] rounded-[30px]">
        <i className='ml-3 text-[grey]'><FaSearch /></i>
        <input className='rounded-[30px]' type="text" placeholder="Search here...!" />
      </div>
      <div className="flex ml-4 items-center gap-[10px]">
        <button className='btnNormal'>Login</button>
        <button className='btnNormal !bg-[#e60023] !text-white'>Sign Up</button>
        <i className='ml-2'><IoIosArrowDown /></i>
      </div>
    </div>
  )
}
export default Navbar