import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logo.png"

export default function Navbar() {
    const [nav,setNav] = useState(false)

    const handleNav = ()=> setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "50px"}} />
        </div>

        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        

        {/* Hamburger menu */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {
                !nav ? <FaBars/> : <FaTimes/>
            }
        </div>

        {/* mobile menu */}
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <ul>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Technologies</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>

        {/* social icon */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        LinkkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="" className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
