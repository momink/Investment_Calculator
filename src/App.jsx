import Header from "./header/Header"
import InputPanel from "./inputPanel/InputPanel"
import Result from "./result/Result";
import { useState } from "react";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 1200,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration:5,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestmentData(prevData => ({ ...prevData, [name]: +value }));
  }
  return (
    <>
      <Header />
      <InputPanel onChangeUserInput={handleChange} investmentData={investmentData} />
      {<Result investmentData={investmentData} />}
    </>
    
  )
}

export default App
