import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa'


const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 lg:mt-10'>
        <div className=' flex flex-col items-center justify-center '>
          {/* <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> */}
          <h1 className="text-4xl pl-10 text-center font-Outfit w-28 cursor-pointer mr-14">Ajay.</h1>

        <div className='w-max flex items-center mx-auto gap-2'>
        <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
          mouryaajay7548@gmailcom
        </div>
    </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 lg:mx-[10%] mt-6 py-4'>
      <p>@ 2025 Ajay Mourya. All right  reserved.</p>
      <ul className='flex items-center justify-center lg:gap-10 gap-6 mt-4 sm:mt-0'>
        <li className='flex items-center text-lg border px-2 rounded-lg lg:px-6 py-1 lg:py-2 bg-slate-100 dark:bg-gray-800 gap-2'><FaLinkedin className='size-6 '/><a  target='_blank' className='dark:text-white' href="http://linkedin.com/in/ajay-mourya-22b643150">Linkedln</a></li>
        <li className='flex items-center text-lg border px-2 rounded-lg lg:px-6 py-1 lg:py-2 bg-slate-100 dark:bg-gray-800 gap-2'><FaGithub className='size-6 '/><a  target='_blank' className='dark:text-white' href="https://github.com/Ajay7548">Github</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer