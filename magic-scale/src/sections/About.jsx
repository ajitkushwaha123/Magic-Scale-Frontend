import React from 'react'
import { Video } from '../assets'
import { FaCheckCircle } from "react-icons/fa";


const About = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#fafafa] shadwp-lg shadow-indigo-500/50 flex justify-center flex-col md:flex-row items-center md:px-[100px] px-[40px] pt-[80px] pb-[40px] rounded-xl'>
        <div className='md:w-[50%] rounded-xl relative md:px-[100px]'>
            <video className='rounded-xl md:w-[290px] shadow-lg shadow-indigo-500/50 md:h-[500px] w-[320px] h-[490px]' src={Video} controls loop autoPlay muted></video>
          {/* <iframe width="560" height="900" src="https://www.youtube.com/embed/eIyiWA6Br_w?si=o7z1NhPZqg-9jEaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <div className='absolute right-0 top-0 z-10'><img className='animate-spin' src='https://template.wphix.com/printx-prv/printx/assets/img/about/about-shape1-2.png'/></div>
        </div>

        <div className='md:px-[50px]'>
            <h3 className='font-normal mt-[40px] leading-7 text-center md:text-start text-[18px] mb-[15px]'>- About Our Company</h3>

            <h2 className='md:text-[39px] text-[28px] text-center md:text-start md:text-start text-[#09052f] leading-[1.3] pb-[18px] font-medium capitalize'>High Quality <span className='text-btn'>Printing</span> <br /> Service Australia</h2>
            <p className='font-normal leading-8 text-[16px] text-center md:text-start text-[#72747c]'>Turn digital images into physical products with <br /> Printes – print locally, scale globally.</p>

            <div className='flex mt-[33px] items-center justify-center'> 
                <div className='flex justify-center items-center'>
                     <div className='md:w-[60px] text-center md:h-[60px] w-[60px]'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png'/></div>
                     <div className='pl-[20px]'>
                        <h3 className='text-[#09052f] font-medium pb-[6px] text-[18px] pb-[13px] leading-[1.1] '>Banners Printing</h3>
                        <p className='text-[#72747c] font-medium text-[16px] leading-[1.2] '>Attract relevant users using specific hashtags.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                     <div className='md:w-[60px] text-center md:text-start md:h-[60px] w-[60px]'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png'/></div>
                     <div className='pl-[20px]'>
                        <h3 className='text-[#09052f] font-medium pb-[6px] text-[18px] pb-[13px] leading-[1.1] '>Banners Printing</h3>
                        <p className='text-[#72747c] font-medium text-[16px] leading-[1.2] '>Attract relevant users using specific hashtags.</p>
                    </div>
                </div>
            </div>

            {/* Add icons */}
            <div className='w-full flex justify-center items-center flex-col text-center md:text-start md:items-start'>
            <p className=' flex text-center md:text-start items-center mx-auto flex-row justify-start items-center text-[#7274AD] text-[16px] font-normal leading-[1.3] pt-[20px]'><FaCheckCircle className='text-btn text-center md:text-start mr-[7px]'/>Large paper & stock selection & Unique Print</p>
            <p className=' flex text-center md:text-start items-center mx-auto flex-row justify-start items-center text-[#7274AD] text-[16px] font-normal leading-[1.3] pt-[14px]'><FaCheckCircle className='text-btn text-center md:text-start mr-[7px]'/>Large paper & stock selection & Unique Print</p>
            </div>
        </div>
    </div>
  )
}

export default About