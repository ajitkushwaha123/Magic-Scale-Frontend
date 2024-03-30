import React from 'react';
import TrustCard from '../components/TrustCard'; // Assuming TrustCard is a React component
import { hoursIcon, onlineShop, scheduleIcon } from '../assets'; // Assuming these are image imports

const Trust = () => {
  const TrustValues = [
    {
      iconImg: onlineShop,
      title: 'Seamless Integration' ,
      description: 'Unlock complete integration, from FSSAI registration to online operations, and boost sales with the magic of Scale.',
    },
    {
      iconImg: scheduleIcon,
      title: 'Fastest Account Setup' ,
      description: 'Get up and running on Zomato and Swiggy at lightning speed with the magic Scale.',
    },
    {
      iconImg: hoursIcon,
      title: '24/7 Support' ,
      description: 'Experiencing an issue? Dont worry! Our support team is available 24/7 .',
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
