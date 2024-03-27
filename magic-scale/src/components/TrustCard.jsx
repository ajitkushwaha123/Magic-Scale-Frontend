import React from 'react';
import { hoursIcon } from '../assets'; 

const TrustCard = ({ borderWidth = "2", iconImg, title, description }) => {

  return (
    <div className={`flex px-[20px] justify-center items-center border-r-${borderWidth} border-dotted border-gray-400`}>
      <img className='md:w-[83px] md:h-[83px] w-[60px] h-[60px]' src={iconImg} alt={title} /> 
      <div className='pl-[28px] py-[15px]'>
        <strong className='mb-[6px] font-medium text-[#111] text-[24px] capitalize pb-[20px]'>{title}</strong>
        <p className='font-normal pt-[7px] text-[16px] text-[#72747c] pr-[13px]'>{description}</p>
      </div>
    </div>
  );
};

export default TrustCard;
