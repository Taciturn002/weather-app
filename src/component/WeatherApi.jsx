import  { useContext, useEffect} from 'react'
import { MyContext } from '../context/ContextApi';

function WeatherApi() {
    const {searchCity , setData}= useContext(MyContext);

    
const url = `//api.weatherapi.com/v1/current.json?key=d997b07209434a1291981132252006&q=${searchCity}`;
const options = {
	method: 'GET'
};
    useEffect(()=>{
        if (!searchCity) return;  
        async function fetchData() {
            try{
                const res = await fetch(url,options);
                const json = await res.json();
                setData (json);
            }
            catch(error){
                console.log(error)
            } 
        }
        fetchData();
    },[searchCity,setData])

    //  useEffect(()=>{
    //      console.log(data)
    //  },[data])
  return (
    <div>
      
    </div>
  )
}

export default WeatherApi
