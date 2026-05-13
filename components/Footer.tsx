import React from 'react'
import { FloatingDockDemo } from './ui/Float'
import FooterCard from './FooterCard'

const Footer = () => {
  return (
      <main className='flex flex-col items-center bottom-0 pb-10'>
            
        <div id='footer' className="w-full mb-10">
            <h1 className='py-16 heading'>
                My
                <span className='text-purple '> Socials
                </span>
            </h1>
             <FloatingDockDemo />
        </div>
        <FooterCard/>
      </main>
  )
}

export 
default Footer
