import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/EZE EC-05.svg"
import {Link} from "react-scroll"
import cv from "../assets/CV/CVEnglishEzequielSantiagoCura.pdf"

export default function Navbar({homeInView,aboutInView,skillsInView,projectsInView,contactInView}:any) {
    const [nav,setNav] = useState(false)

    const handleNav = ()=> setNav(!nav)
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "80px"}} />
        </div>

        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500} id='Home' style={homeInView ? {color:"lightblue",textDecoration:"Underline",textShadow:" 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"} : {}}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} id='About' style={aboutInView ? {color:"lightblue",textDecoration:"Underline",textShadow:" 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"} : {}}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} id='Skills' style={skillsInView ? {color:"lightblue",textDecoration:"Underline",textShadow:" 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"} : {}}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} id='Projects' style={projectsInView ? {color:"lightblue",textDecoration:"Underline",textShadow:" 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"} : {}}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} id='Contact' style={contactInView ? {color:"lightblue",textDecoration:"Underline",textShadow:" 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"} : {}}>
                        Contact
                    </Link>
                </li>
            </ul>
        

        {/* Hamburger menu */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {
                !nav ? <FaBars/> : <FaTimes/>
            }
        </div>

        {/* mobile menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

        {/* social icon */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
                    <a
                    className='flex justify-between items-center w-full h-full text-gray-300'
                    href='https://www.linkedin.com/in/ezequiel-cura/'
                    target='_blank'
                    >
                        Linkedin <FaLinkedin size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                    </a>
                </li>
                <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a
                    className='flex justify-between items-center w-full h-full text-gray-300'
                    href='https://github.com/Ezequiel-Cura'
                    target='_blank'
                    >
                        Github <FaGithub size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                    </a>
                </li>
                <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a
                    className='flex justify-between items-center w-full h-full text-gray-300'
                    href='mailto:ezequiel28cura@gmail.com'
                    target='_blank'
                    >
                        Email <HiOutlineMail size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                    </a>
                </li>
                <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                    className='flex justify-between items-center w-full h-full text-gray-300'
                    href={cv}
                    target='_blank'
                    download={"CV Ezequiel Cura"}
                    >
                        Resume <BsFillPersonLinesFill size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                    </a>
                </li>
            </ul>
       </div>
    </div>
  )
}
