import React, { createContext, useContext, useState } from "react";

const CalculatorContext=createContext;

const CalculatorProvider = ({children})=>{
    const [number,setNumber]=useState([]);
    const addNumber = (num) =>{
        setNumber ([...number,num]);
    };
    const reset = ()=>{
        setNumber([]);
    };

    return (
        <CalculatorContext.Provider value ={{number,addNumber,reset}}>
            {children}
        </CalculatorContext.Provider>
    );
};