import { useContext } from "react"

const calculator = () =>{
    const {addNumber,number} = useContext(CalculatorContext);
    return (
        <div >
            <h2>Calculadora</h2>
            <div>
                
            </div>
        </div>
    )

}