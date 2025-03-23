import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(null);

    const addNumber = (num) => {
        setNumbers([...numbers, num]);
        setCurrentNumber(num);
    };

    const getSum = () => numbers.reduce((acc, num) => acc + num, 0);

    const resetCalculator = () => {
        setNumbers([]);
        setCurrentNumber(null);
    };

    return (
        <CalculatorContext.Provider value={{ numbers, currentNumber, addNumber, getSum, resetCalculator }}>
            {children}
        </CalculatorContext.Provider>
    );
};


export const useCalculator = () => useContext(CalculatorContext);