import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Contact({refContact}:any) {
  return (
    <div className='bg-[#0a192f] flex flex-col '>
        <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' ref={refContact}>
            <form method='POST' action="https://getform.io/f/f55546c8-49d3-403c-a0ad-6cf5d544c234" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>{/* Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in*/}</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message' required></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
        
        <ul className='flex mb-10 mx-auto md:hidden bg-[#0a192f] '>
            <li className='w-[100px] h-[100px] flex justify-between items-center bg-blue-600 '>
                <a
                className='flex flex-col justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/ezequiel-cura/'
                target='_blank'
                >
                    Linkedin <FaLinkedin size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
            <li className='w-[100px]  h-[100px] flex justify-between items-center   bg-[#333333]'>
                <a
                className='flex flex-col justify-between items-center w-full text-gray-300'
                href='https://github.com/Ezequiel-Cura'
                target='_blank'
                >
                    Github <FaGithub size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
            <li className='w-[100px]  h-[100px] flex justify-between items-center  bg-[#6fc2b0]'>
                <a
                className='flex flex-col justify-between items-center w-full text-gray-300'
                href='/'
                target='_blank'
                >
                    Email <HiOutlineMail size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
            <li className='w-[100px] h-[100px] flex justify-between items-center  bg-[#565f69]'>
                <a
                className='flex flex-col justify-between items-center w-full text-gray-300'
                href='/'
                target='_blank'
                
                >
                    Resume <BsFillPersonLinesFill size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
        </ul>
       
    </div>
  )
}
