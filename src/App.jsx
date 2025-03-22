import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/resultado" element={<Result />} />
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
