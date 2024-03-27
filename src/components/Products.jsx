import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [isTab, setTab] = useState('0');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/form');
    }

    const restaurantItems = [
        {
            serviceImg: "https://static.vecteezy.com/system/resources/previews/000/430/684/original/logo-design-of-restaurant-menu-vector.jpg",
            btnTitle: "Menu Designing",
        },
        {
            serviceImg: "https://static.vecteezy.com/system/resources/previews/019/763/173/non_2x/fssai-logo-transparent-free-png.png",
            btnTitle: "FSSAI Registration",
        },
        {
            serviceImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png",
            btnTitle: "Zomato Setup",
        },
        {
            serviceImg: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png",
            btnTitle: "Swiggy Setup",
        },
    ];

    const Eccommerce = [
        {
            serviceImg: "https://www.penningfuxer.de/wp-content/uploads/2019/07/amazon-logo.png",
            btnTitle: "Amazon Setup",
        },
        {
            serviceImg: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
            btnTitle: "Flipkart Setup",
        },
        {
            serviceImg: "https://static.meeshosupply.com/web/images/meesho-logo.png",
            btnTitle: "Meesho Setup",
        },
        {
            serviceImg: "https://equalconsultancy.com/new/wp-content/uploads/2020/02/GST-LOGO.png",
            btnTitle: "GST Registration",
        },
    ];

    const Cloudkitchen = [
        {
            serviceImg: "https://yes.sgp1.digitaloceanspaces.com/diginews/uploads/2021/07/3.-Cloud-Kitchen.jpg",
            btnTitle: "Complete Cloud Kitchen Setup",
        },
    ];

    const tab1 = () => {
        setTab('0');
    };

    const tab2 = () => {
        setTab('1');
    };

    const tab3 = () => {
        setTab('-1');
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-5xl text-btn flex justify-center items-center'>Services</h1>

            <div className='pt-10 pb-4 text-center uppercase font-bold text-[22px]'>
                <button onClick={tab1} className={`md:mr-4 hover:text-btn text-[20px] md:ml-[30px] px-[12px] text-medium ${isTab == 0 ? "text-btn" : "text-[#111]"}`}>
                    Restaurant 
                </button>
                <button onClick={tab2} className={`md:mr-4 hover:text-btn text-[20px] md:ml-[30px] px-[12px] text-medium ${isTab == '1' ? "text-btn" : "text-[#111]"}`}>
                    D2C
                </button>
                <button onClick={tab3} className={`md:mr-4 hover:text-btn text-[20px] md:ml-[30px] px-[12px] text-medium ${isTab == '-1' ? "text-btn" : "text-[#111]"}`}>
                    Cloud Kitchen
                </button>
                {/* <button onClick={tab2} className={`mr-4 hover:text-btn text-[20px] ml-[30px] text-medium ${isTab == 0 ? "text-btn" : "text-[#111]"}`>
                    D2C Services
                </button>
                <button onClick={tab3} className={`mr-4 hover:text-btn text-[20px] ml-[30px] text-medium ${isTab == 0 ? "text-btn" : "text-[#111]"}`>
                    Cloud Kitchen Services
                </button> */}
            </div>

            {isTab === '0' && (
                <div className='px-16 pt-8 flex flex-col md:flex-row justify-center items-center'>
                    {restaurantItems.map((item, index) => (
                        <div
                            key={index}
                            className='mx-8 rounded-xl mb-[40px] py-[28px] border-2 shadow-lg shadow-indigo-500/40 flex flex-col items-center justify-center w-64 px-4'
                        >
                            <div className='w-40 mb-[40px] h-40 p-2 border-2 bg-white shadow-lg shadow-indigo-500/50 mb-4'>
                                <img src={item.serviceImg} alt={item.btnTitle} className='w-full h-full object-cover' />
                            </div>
                            <Button
                                colors='#fff'
                                className='mt-[30px]'
                                title={item.btnTitle}
                                bgColor='btn'
                                hoverColor='#111'
                                hoverBg='#fff'
                                hoverBorder='btn'
                                onClick={handleClick}
                            />
                        </div>
                    ))}
                </div>
            )}

{isTab === '1' && (
                <div className='px-16 pt-8 flex justify-center flex-col md:flex-row items-center'>
                    {Eccommerce.map((item, index) => (
                        <div
                            key={index}
                            className='mx-8 mb-[40px] rounded-xl py-[28px] border-2 shadow-lg shadow-indigo-500/40 flex flex-col items-center justify-center w-64 px-4'
                        >
                            <div className='w-40 h-40 p-6 mb-[40px] border-2 bg-white shadow-lg shadow-indigo-500/50 mb-4'>
                                <img src={item.serviceImg} alt={item.btnTitle} className='w-full h-full object-cover' />
                            </div>
                            <Button
                                colors='#fff'
                                className='mt-[30px]'
                                title={item.btnTitle}
                                bgColor='btn'
                                hoverColor='#111'
                                hoverBg='#fff'
                                hoverBorder='btn'
                                onClick={handleClick}
                            />
                        </div>
                    ))}
                </div>
            )}

{isTab === '-1' && (
                <div className='px-16 pt-8 flex justify-center flex-col md:flex-row items-center'>
                    {Cloudkitchen.map((item, index) => (
                        <div
                            key={index}
                            className='mx-8 rounded-xl py-[28px] border-2 shadow-lg shadow-indigo-500/40 flex flex-col items-center justify-center w-64 px-4'
                        >
                            <div className='w-40 h-40 mb-[40px] p-6 border-2 bg-white shadow-lg shadow-indigo-500/50 mb-4'>
                                <img src={item.serviceImg} alt={item.btnTitle} className='w-full h-full object-cover' />
                            </div>
                            <Button
                                colors='#fff'
                                className='mt-[30px]'
                                title={item.btnTitle}
                                bgColor='btn'
                                hoverColor='#111'
                                hoverBg='#fff'
                                hoverBorder='btn'
                                onClick={handleClick}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
