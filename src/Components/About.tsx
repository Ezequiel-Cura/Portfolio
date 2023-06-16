import React from 'react'

export default function About({refAbout}:any) {
  return (
    <div data-name='about' id='about' className='w-full h-screen bg-[#0a192f] text-gray-300' ref={refAbout}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Ezequiel Cura, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent software that improves
                    the lives of those around me. In addition to my outstanding technical skills, with me you will have a software developer with excellent analytical thinking, with a desire and determination to learn, to give my best in anything assigned to me, with the highest expectations to start with my working life, consolidate, strengthen and develop all my skills.</p>  
                </div>
            </div>
        </div>
    </div>
  )
}
