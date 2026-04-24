import Button from "./Button";
import "./Result.css";

function Result({ handleBack, data }) {
  return (
    <div className="results">
      <h3 className="results-title">Results</h3>

      <div className="result-card highlight">
        <p>Monthly Payment</p>
        <h2>${data.monthlyPayment}</h2>
      </div>

      <div className="result-grid">
        <div className="result-card">
          <p>Total Payment</p>
          <h3>${data.totalPayment}</h3>
        </div>

        <div className="result-card">
          <p>Loan Amount</p>
          <h3>${data.loanAmount}</h3>
        </div>
      </div>

      <div className="result-footer">
        <p>Payoff Date</p>
        <strong>{data.payoffDate}</strong>
      </div>

      <Button onClick={handleBack}>Back to Calculator</Button>
    </div>
  );
}

export default Result;
