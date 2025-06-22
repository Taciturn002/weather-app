import React from 'react'
import WeatherApi from './component/WeatherApi'
import Card from './component/Card'
function App() {
  return (

      <div className='w-full min-h-screen bg-[#86A1C6] px-4 sm:px-6 md:px-12 pt-8 ' >
        <h1 className='text-center text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-10 ' > Current Weather</h1>
      <WeatherApi />      
      <Card />
    </div>


  )
}

export default App