import React from 'react'
import { Video } from '../assets'
import { FaCheckCircle } from "react-icons/fa";


const About = () => {
  return (
    <div className='w-f80pxflex justify-center bg-[#fafafa] shadwp-lg shadow-indigo-500/50 flex justify-center flex-col md:flex-row items-center md:px-[100px] px-[40px] pt-[80px] pb-[40px] rounded-xl'>
        <div className='md:w-[80px rounded-xl relative md:px-[100px]'>
            <video className='rounded-xl md:w-[80pxx] shadow-lg shadow-indigo-500/50 md:h-[500px] w-[80pxx] h-[490px]' src={Video} controls loop autoPlay muted></video>
          {/* <iframe width="560" height="900" src="https://www.youtube.com/embed/eIyiWA6Br_w?si=o7z1NhPZqg-9jEaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <div className='absolute right-0 top-0 z-10'><img className='animate-spin' src='https://template.wphix.com/printx-prv/printx/assets/img/about/about-shape1-2.png'/></div>
        </div>

        <div className='md:px-[50px]'>
            <h3 className='font-normal mt-[40px] leading-7 md:text-start text-center text-[18px] mb-[15px]'>- About Our Company</h3>

            <h2 className='md:text-[39px] text-[28px] md:text-start text-center md:text-start text-[#09052f] leading-[1.3] pb-[18px] font-medium capitalize'>Fastest <span className='text-btn'>onBoarding</span> <br /> Service in India</h2>
            <p className='font-normal leading-8 text-[16px] text-center md:px-[0px] md:pr-[30px] px-[30px] md:text-start text-[#72747c]'>Magic Scale is a brand that assists restaurants in expanding their online presence to reach a broader audience.</p>

            <div className='flex md:justify-start justify-center md:items-start mt-[33px]'> 
                <div className='flex justify-center items-center'>
                     <div className= 'w-[65px] h-[65px] md:w-[80px] text-center border-2 p-[6px] border-lg shadow-lg rounded-lg md:h-[80px] w-[65px] h-[65px] md:w-[80px]'><img className='rounded-lg w-[100%] h-[100%]' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png'/></div>
                     <div className= 'w-[65px] h-[65px] md:w-[80px] text-center border-2 p-[6px] border-lg shadow-lg rounded-lg ml-[20px] md:h-[80px] w-[65px] h-[65px] md:w-[80px]'><img className='rounded-lg' src='https://images.yourstory.com/cs/images/companies/6723190122636619372819335513378071094231040o-1590990173281.png?fm=png&auto=formatar=1:1&mode=fill&fill=solid'/></div>
                     <div className= 'w-[65px] h-[65px] md:w-[80px] text-center border-2 p-[6px] border-lg shadow-lg rounded-lg ml-[20px] md:h-[80px] w-[65px] h-[65px] md:w-[80px]'><img className='rounded-lg' src='https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png'/></div>
                     <div className= 'w-[65px] flex justify-center items-center h-[65px] md:w-[80px] text-center border-2 p-[6px] border-lg shadow-lg rounded-lg ml-[20px] md:h-[80px] w-[65px] h-[65px] md:w-[80px]'><img className='rounded-lg h-[50px]' src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'/></div>
                </div>
            </div>

            {/* Add icons */}
            {/* <div className='w-full flex flex-col md:text-start md:items-start'>
            <p className=' flex flex-row mx-auto md:mx-0  justify-start items-center text-[#7274AD] text-[16px] font-normal leading-[1.3] pt-[20px]'><FaCheckCircle className='text-btn text-start mr-[7px]'/>Large paper & stock selection & Unique Print</p>
            <p className=' flex flex-row mx-auto md:mx-0 justify-start items-center text-[#7274AD] text-[16px] font-normal leading-[1.3] pt-[14px]'><FaCheckCircle className='text-btn text-start mr-[7px]'/>Large paper & stock selection & Unique Print</p>
            </div> */}
        </div>
    </div>
  )
}

export default About