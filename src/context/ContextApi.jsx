import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextApi=(props)=>{
    const[inputCity , setInputCity]= useState('');
    const[searchCity , setSearchCity]= useState('');
    const[data,setData]=useState(null);
    return(
       <MyContext.Provider value={{inputCity,setInputCity,data,setData,searchCity,setSearchCity}} >
        {props.children}
       </MyContext.Provider>
    )
}