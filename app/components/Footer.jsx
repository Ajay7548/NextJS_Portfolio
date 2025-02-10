import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
          <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center mx-auto gap-2'>
        <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
          mouryaajay7548@gmailcom
        </div>
    </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-6 py-4'>
      <p>@ 2025 Ajay Mourya. All right  reserved.</p>
      <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
        <li><a  target='_blank' href="https://linkedin.com/in/jayesh-m-22b643150">Linkedln</a></li>
        <li><a  target='_blank' href="https://github.com/Ajay7548">Github</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer