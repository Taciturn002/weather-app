import React, { useContext } from 'react';
import { MyContext } from '../context/ContextApi';

function SearchButton() {
  const { inputCity, setSearchCity } = useContext(MyContext);

  const handleClick = () => {
    if (!inputCity.trim()) {
      alert('Please enter a city');
      return;
    }
    setSearchCity(inputCity);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full sm:w-32 h-10 relative group inline-block rounded-full overflow-hidden p-[3px] shadow-[18px_-18px_36px_#2e3748,-18px_18px_36px_#b8dbff] cursor-pointer"
    >
      {/* Gradient border effect */}
      <span className="absolute inset-0 w-[400%] h-full bg-gradient-to-l from-green-400 via-[#7869b0] to-[#d05d49] bg-[length:25%_100%] transition-transform duration-300 ease-out group-hover:translate-x-[-2%] group-hover:animate-borderSlide z-0" />

      {/* Actual button */}
      <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#7389b5] text-[#AEB9D0] text-base font-semibold transition-all duration-300 ease-in-out hover:text-white">
        Search
      </div>
    </div>
  );
}

export default SearchButton;
