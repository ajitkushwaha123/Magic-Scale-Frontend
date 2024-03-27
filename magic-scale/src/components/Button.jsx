import React from 'react'

const Button = ({colors , title , hoverBg , hoverColor , onClick, bgColor="#0d6efd" , hoverBorder , normalBorder}) => {
  return (
    <>
      <button onClick={onClick} className={`bg-[#0d6efd] px-6 py-2 rounded-xl text-[#fff] hover:text-[${hoverColor}] hover:bg-[${hoverBg}] text-[20px] font-medium border-2 border-[${bgColor}] hover:border-[${hoverBorder}]`}>
         {title}
      </button>
    </>
  )
}

export default Button