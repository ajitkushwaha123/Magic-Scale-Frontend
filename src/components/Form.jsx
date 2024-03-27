
import { BiDollarCircle, BiMap, BiKey, BiPowerOff } from "react-icons/bi";
import { Dropdown } from "./Dropdown"; // Assuming Dropdown is a custom component
import { useState } from "react";
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function InputGroup7({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div
      className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center pl-3 py-3 text-gray-600 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [phone , setPhone] = useState("");
  const [user , setUser] = useState({
    name : "",
    phone :"",
  })

  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(user);

    navigate('/');

    // const response = await fetch(`http://localhost:8000/api/form` , {
    //     method: "POST",
    //     headers : {
    //         "Content-Type" : "application/json" ,
    //     },
    //     body: JSON.stringify(user),
    // });

    // if(response.ok)
    // {
    //     console.log("submitted");
    // }
    // else
    // {
    //     alert("errror");
    // }
  

    // console.log(response);

    // const {data} = axios.post('http://localhost:8000/api/form', {
    //     name: 'Fred',
    //     phone : 4335678,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // })
    // .then((res) => {
    //     console.log(res.data); // Log the response data
    // })
    // .catch((err) => {
    //     console.error('Error:', err); // Log any errors
    // });
    console.log('Form submitted'); 
    console.log(user);
};


  const handleNameChange = (e) => {
    setName(e.target.value);
    setUser({
        name : name,
        phone : phone,
    })
  };

  const handlePhoneChange = (e) => {
      setPhone(e.target.value);
      setUser({
        name : name,
        phone : phone,
    })
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-mainBg'>
        <div className='max-w-[500px] px-[22px] rounded-xl pb-[32px] border-2 flex justify-center items-center flex-col shadow-lg shadow-lg-500/50'>
          <div className="flex flex-col w-full p-5 sm:p-10 gap-4">
      <InputGroup7
        name="Full Name"
        label="Name"
        decoration={<BiDollarCircle size="1rem" className="text-gray-400" />}
        onChange={handleNameChange} // Using a named function for clarity
      />
      <InputGroup7
        name="Phone"
        label="Phone"
        type="number"
        onChange={handlePhoneChange}
        decoration={<BiMap size="1rem" className="text-gray-400" />}
      />

      <Dropdown />
    </div>
          <Button title="Submit" bgColor="#0d6efd" onClick={submitHandler}/>
       </div>
    </div>
  );
}

export { Form };



