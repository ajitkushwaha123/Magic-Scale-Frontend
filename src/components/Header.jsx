import React from 'react';
import { Logo } from '../assets';
import { Link , NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useUserAuth } from '../context/UserAuthContext'

// import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const {user , logout} = useUserAuth();
  console.log(user);

  return (
     <>
       <nav className='bg-transparent w-full sticky top-0 flex items-center justify-between h-[80px] z-10 sm:px-[100px] px-[15px]'>
          <div className='flex justify-between items-center'>
            <img height={"50px"} width={"160px"} src={Logo}/>
          </div>

          <div className='flex hidden md:block'>
            <ul className='flex text-[16px] leading-16 font-medium uppercase'>
                <li className='ml-5'><NavLink to={"/"}>Home</NavLink></li>
                <li className='ml-5'><a href='#services'>Services</a></li>
                <li className='ml-5'>About</li>
                <li className='ml-5'>Contact</li>
            </ul>
          </div>

          <div className='rounded-xl  text-white hover:text-[#111] hover:bg-[#fff]'>
          <NavLink to={"/login"} >
            {!user && 
              <Button colors={"#fff"} title={"Login"} bgColor={'btn'} hoverColor={"#111"} hoverBg={"#fff"} hoverBorder={"btn"}/>
            }
            </NavLink>
            <NavLink to={"/"} >
            {user &&
              <div className='flex justify-center items-center'><img className='rounded-full w-[40px] h-[40px]' src={user.photoURL}/></div>
            }
           </NavLink>
          </div>

          {/* ccccccc */}

      
       </nav>
     </>
  )
}

export default Header
