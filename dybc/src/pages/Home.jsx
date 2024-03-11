import React from 'react';
import { stats } from '../constants';
import styles from "../style";
import { DB_image } from '../assets';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section id='Home' className={`flex flex-col ${styles.paddingY} mt-[100px]`}>
        <div className={`flex-1 ${styles.flexStart} sm:flex-row flex-col gap-2 xl:px-0 sm:px-12 px-4  h-[100vh]`}>
        <div className=''>
            <div className={`${styles.flexCenter} flex-row sm:mb-4 mb-2 bg-discount-gradient rounded-[20px]`}>
             {stats.map((stat) => (
                 <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-2`} >
                     <h4 className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[40px] leading-[30px] text-red-600">
                         {stat.value}
                     </h4>
                     <p className="font-poppins font-normal xs:text-[12px] text-[8px] xs:leading-[14px] leading-[8px] text-white uppercase ml-3">
                         {stat.title}
                     </p>
                 </div>
              ))}
            </div>
            <div className=' flex flex-col gap-2'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[46px] text-[46px] text-black ss:leading-[70px] leading-[55px]'>
                  Our Oceans, Our Future: <br /> { " "}
                 <span className=''>Act Now for a Cleaner Coast</span> { " "}
                </h1>
                <p className={`${styles.paragraph}`}>
                     We are dedicated to preserving the beauty of our beaches through sustainable cleaning practices and commmunity engagement. <br />
                     Join us on a journey to preserve the pristine beauty of Diani's beaches, fostering a community driven commitment to environment harmony. <br />
                     Lets work together to inspire the next generation and make a lasting difference.
                </p>                
                <div className=' flex gap-12'>
                 <Link className="bg-orange-500 hover:bg-orange-400  w-fit p-3 text-white rounded-lg outline-none font-poppins font-medium" to='/donate'>
                     Support Us
                 </Link>
                 <Link id=' about' className="text-[20px] text-orange-500 hover:text-orange-400 underline font-poppins font-medium pt-3">
                    Learn More About us
                </Link>
                </div>
            </div>
        </div>
        <div className=' flex'>
            <img src={DB_image} alt=" image1" className=' w-[100%] h-[100%]' />
        </div>
    </div>
    <div className=' mt-[10px]' id='#about'>
        <p className=' text-center '>Together, We Keep Diani Beach Clean</p>
        
    </div>
    </section>
  )
}

export default Home
