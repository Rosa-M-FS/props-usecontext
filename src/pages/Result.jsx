import { Link } from "react-router-dom";
import { useCalculator } from "../components/CalculatorProvider";
import style from './Result.module.css'

const Result = () => {
    const { numbers, getSum, resetCalculator } = useCalculator();

    return (
        <div className={style.result}>
            <h1>Resultado</h1>
            <p className={style.numbers}>Números seleccionados: {numbers.length > 0 ? numbers.join(" + ") : "Ninguno"}</p>
            <p className={style.numbers}>Suma total: {getSum()}</p>

            {/* Botón de Reset */}
            <button onClick={resetCalculator} className={style.resetBtn}>Reset</button>

            {/* Enlace de vuelta a la calculadora */}
            <Link to="/" className={style.backLink} >Volver a la Calculadora</Link>
        </div>
    );
};

export default Result;
