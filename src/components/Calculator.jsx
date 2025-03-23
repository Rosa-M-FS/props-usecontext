import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider";
import style from './Calculator.module.css'

const Calculator = () => {
    const { addNumber, currentNumber } = useCalculator();

    return (
        <div className={style.calculator}>
            <h1>Calculadora</h1>
            <div className={style.screen}>
                {currentNumber !== "" ? currentNumber:"0"}
                </div>
            <div className={style.buttons}>
                {[...Array(10).keys()].map((num) => (
                    <button key={num} onClick={() => addNumber(num)}
                    className={style.button}>
                        {num}
                    </button>
                ))}
            </div>
            <Link to="/resultado">Ver Resultado</Link>
        </div>
    );
};

export default Calculator;