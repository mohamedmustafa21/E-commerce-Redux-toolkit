import React from 'react'
import Logo from '../../assets/imgs/Logos/logo-pngwhite.png'

function Footer() {
  return (
    <div className='w-full h-[35vh] bg-[#2E4620] p-5  '>
      <div className='flex justify-around max-md:justify-between py-5  items-stretch   max-md:relative'>
         <div className='p-5 mt-5  max-md:absolute max-md:top-[50%] max-md:left-0 '>
        <img className='w-32 max-md:w-16' src={Logo}  alt="" />
      </div>
      <div className='w-[20%] px-5'>
        <h1 className='text-[white] text-[20px] font-[500] max-md:text-[15px]'>RESOURCES</h1>
       <ul className='text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]'>
       <li>Application</li>
       <li>Documentation</li>
       <li>Systems</li>
       <li>FAQ</li>
       </ul>
      </div>
      <div className='w-[20%] px-5'>
        <h1 className='text-[white] text-[20px] font-[500] max-md:text-[15px]'>PRICING</h1>
       <ul className='text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]'>
       <li>Overview</li>
       <li>Premium Plans</li>
       <li>Affiliate Program</li>
       </ul>
      </div>
      <div className='w-[20%] px-5'>
        <h1 className='text-[white] text-[20px] font-[500] max-md:text-[15px]'>COMPANY</h1>
       <ul className='text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]'>
       <li>About Us</li>
       <li>Blog</li>
       <li>Partnerships</li>
       <li>Careers</li>
       <li>Press</li>
       </ul>
      </div>
      <div className='w-[20%] px-5'>
        <h1 className='text-[white] text-[20px] font-[500] max-md:text-[15px]'>SOCIAL</h1>
       <ul className='text-[#e4e3e3] text-[15px] font-[300] max-md:text-[12px]'>
       <li>Facebook</li>
       <li>Instagram</li>
       <li>LinkedIn</li>
       </ul>
      </div>
      </div>
     
    </div>
  )
}

export default Footer