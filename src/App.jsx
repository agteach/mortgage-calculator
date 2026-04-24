import InputField from "./components/InputField";
import "./app.css";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [resultData, setResultData] = useState(null);

  const [formData, setFormData] = useState({
    total: "",
    downPayment: "",
    rate: "",
    years: "",
  });

  const calculateMortgage = () => {
    const { total, downPayment, rate, years } = formData;

    if (
      total <= 0 ||
      downPayment < 0 ||
      downPayment > total ||
      rate < 0 ||
      years <= 0
    ) {
      return null;
    }
    const loanAmount = total - downPayment;
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;

    if (totalMonths === 0) return null;

    let monthlyPayment;

    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / totalMonths;
    } else {
      monthlyPayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalPayment = monthlyPayment * totalMonths;

    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + totalMonths);
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
      payoffDate: payoffDate.toLocaleDateString(),
    };
  };

  const handleResult = () => {
    setLoading(true);

    setTimeout(() => {
      const calculatedData = calculateMortgage();
      if (!calculatedData) {
        setLoading(false);
        return;
      }
      setResultData(calculatedData);
      setLoading(false);
      setResult(true);
    }, 1000);
  };
  const handleBack = () => {
    setResult(false);
    setResultData(null);
  };
  const isFormValid =
    formData.total > 0 &&
    formData.downPayment >= 0 &&
    formData.downPayment <= formData.total &&
    formData.rate >= 0 &&
    formData.years > 0;
  return (
    <div className="app">
      <div className="wrapper">
        <div className="header">
          <h1>Mortgage Calculator</h1>
          <p>
            Fill in the Total Amount, Down Payment, Interest Rate, and
            Amortization Period to calculate your monthly payment and payoff
            details.
          </p>
        </div>
        {result ? (
          <Result handleBack={handleBack} data={resultData} />
        ) : (
          <InputField
            calculate={handleResult}
            loading={loading}
            isFormValid={isFormValid}
            setFormData={setFormData}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
