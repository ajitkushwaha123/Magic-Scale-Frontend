import React from 'react';
import TrustCard from '../components/TrustCard'; // Assuming TrustCard is a React component
import { hoursIcon, onlineShop, scheduleIcon } from '../assets'; // Assuming these are image imports

const Trust = () => {
  const TrustValues = [
    {
      iconImg: onlineShop,
      title: 'Get Listed',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere nisi.',
    },
    {
      iconImg: scheduleIcon,
      title: 'Fast Service',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere nisi.',
    },
    {
      iconImg: hoursIcon,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere nisi.',
    },
  ];

  return (
    <div className='w-full flex flex-col md:flex-row  md:px-[100px] px-[20px] py-[60px]'>
      {TrustValues.map((val, index) => (
        <TrustCard key={index}
        iconImg={val.iconImg}
          title={val.title}
          description={val.description}
          borderWidth={index === TrustValues.length - 1 ? "0" : "2"}  
        />
      ))}
    </div>
  );
};

export default Trust;

//add if statement that only at last index borderWidht = "0"
