import React from 'react'
import Button from '../components/Button'
import { AboutImg } from '../assets'

const Hero = () => {
  return (
    <div className='w-full md:h-screen h-auto md:px-[100px] pl-[20px] pt-[164px] bg-mainBg mt-[-80px]'>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-[50%] w-full px-[10px] md:px-[50px]'>
            <h3 className='text-[17px] leading-7 text-[#111] font-medium mb-[23px]'> - Food Consulting Service </h3>

            <p className='font-medium leading-[1.1] md:text-[70px] text-[38px] km:text-[60px] capitalize '>Food <span className='text-btn'>Regitration</span>
 <br /> Service Agency</p>

            <p className='text-[15px] pt-[25px] text-[#72747c] md:pr-[75px] leading-7 mb-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere nisi, ut veritatis laudantium non nos.</p>
            
            <Button bgColor={"btn"}
             colors={"#fff"} 
             hoverBg={"#fff"} 
             title="Let’s talk — Send a message"
             hoverColor={"#111"}
             />
        </div>

        <div>
            <div className='pt-[30px] md:pt-[0]'>
                <img src={AboutImg}/>
            </div>

            <div className='absolute md:right-28 right-10 top-28 animate-bounce'><img className='rounded-full md:w-[100px] w-[60px]' src='http://khabar4u.in/wp-content/uploads/2020/06/og-magicpin-icon.png'/></div>
            <div className='absolute right-50 bottom-1 animate-bounce'><img className='md:w-[160px] w-[90px]' src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'/></div>
            <div className='absolute md:right-45  md:top-60 top-24  animate-bounce'><img className='md:w-[120px] w-[60px]' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png'/></div>
            <div className='md:right-20 right-5 rounded-md md:bottom-10 bottom-1 animate-bounce'><img className='md:w-[90px] w-[60px] rounded-xl' src='https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png'/></div>
        </div>

      </div>
    </div>
  )
}

export default Hero