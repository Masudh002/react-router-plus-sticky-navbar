import React from 'react';
import styles from "../style";
import dianiclean from "../assets/dianiclean.jpg";


import { footerLinks, socialMedia } from "../constants";


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-black sm:mx-4 rounded-t-lg`} >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
            <div className=' flex flex-row gap-2'>
              <img src={dianiclean} alt="p"  className=' ml-4 h-[80px] object-contain bg-red-500'/>
              <div className=' font-poppins'>
                 <p className=' text-white font-bold'>DIANI YOUTH BCMS</p>
                 <p className=' text-red-600'>Bahari Yetu Jukumu Letu</p>
              </div>
            </div>
            <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white ml-2`}>
             Through eco-friendly beach cleaning we pave the way for a sustainable legacy on our coastal journey.
            </p>
           
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 xs:ml-0 ml-2">
            {footerLinks.map((footerLink) =>(
                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h1>
                    <ul  className="list-none mt-4">
                        {footerLink.links.map((link,index) =>(
                            <li  className={`font-poppins font-normal text-[16px] leading-[24px] text-slate-200 hover:text-blue-200 cursor-pointer ${
                                index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                              }`} onClick={() => window.open(link.link)}
                            >
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
         <p className="font-poppins font-normal text-center sm:text-[18px] text-[14px] leading-[24px] text-white">
           Copyright Ⓒ 2024 DYBC. All Rights Reserved.
         </p>
         <p className="font-poppins font-normal text-center sm:text-[16px] sm:leading-[20px] text-[12px] leading-[16px] text-white">
          Designed by <a href="https://masudhportfolio.vercel.app/" target='_blank' className=' text-orange-700 underline'>Masudh002</a></p>
         <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social, index) =>(
                <img src={social.icon} id={social.id} alt="img" className={`w-[21px] h-[21px] object-contain cursor-pointer
                 ${index !== socialMedia.length - 1 ? "mr-6" : "mr-2"}`} onClick={() => window.open(social.link)}/>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Footer
