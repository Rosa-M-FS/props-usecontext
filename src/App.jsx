import './App.css';
import RoutesApp from "./routes/RoutesApp";
import {CalculatorProvider} from "./components/CalculatorProvider";


function App() {
  return (
    <CalculatorProvider>
      <RoutesApp />
    </CalculatorProvider>
  );
}

export default App;
