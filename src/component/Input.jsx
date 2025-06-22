import React from 'react';
import { MyContext } from '../context/ContextApi';
import { useContext } from 'react';

const Input = () => {
  const{inputCity , setInputCity}= useContext(MyContext);
  return (
<div className="w-full sm:w-80 h-10 rounded-[64px] bg-[#7389b5] shadow-[18px_-18px_36px_#2e3748,-18px_18px_36px_#b8dbff] text-[#AEB9D0]">
  <input
    type="text"
    placeholder="Search City..."
    value={inputCity}
    onChange={(e) => setInputCity(e.target.value)}
    className="w-full h-full pb-2 rounded-[62px] pl-3 pt-1 bg-[#7389b5] placeholder:text-[#AEB9D0] hover:text-white hover:placeholder:text-white border-none outline-none"
  />
</div>

  );
}

export default Input;