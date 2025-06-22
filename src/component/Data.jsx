import React, { useContext } from 'react';
import { MyContext } from '../context/ContextApi';
import { FaTemperatureThreeQuarters } from "react-icons/fa6"
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
function Data() {
  const { data } = useContext(MyContext);

  return (
    <div className="w-full">
  <div className="w-full max-w-md mx-auto h-auto rounded-[64px] bg-[#7389b5] shadow-[10px_10px_40px_#2e3748,-10px_-10px_30px_#b8dbff] text-white p-6">
    {data && !data.error ? (
      <>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Weather in {data.location.name}</h3>
          <span className="text-lg">
            {data.current.condition.text}, {data.current.temp_c}°C
          </span>
        </div>
        <div className="text-center space-y-4">
          <img
            src={data.current.condition.icon}
            alt="weather icon"
            className="mx-auto w-20 h-20"
          />
          <div className="flex items-center justify-center gap-2">
            <p>Feels like: {data.current.feelslike_c}°C</p>
            <FaTemperatureThreeQuarters size={24} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>Humidity: {data.current.humidity}%</p>
            <WiHumidity size={28} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>Wind: {data.current.wind_kph} kph</p>
            <LuWind size={32} />
          </div>
        </div>
      </>
    ) : (
      <div className="text-center text-white opacity-50">
        <p>Enter a city name and click search to view weather info.</p>
      </div>
    )}
  </div>
</div>

  );
}

export default Data;
