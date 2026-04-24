import Button from "./Button";
import "./InputField.css";

function InputField({
  calculate,
  loading,
  isFormValid,
  setFormData,
  formData,
}) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value === "" ? "" : Number(value),
    }));
  };
  return (
    <div className="container">
      <h2>Mortgage Calculator</h2>

      <div className="form-group">
        <label htmlFor="total">Total Amount ($)</label>
        <input
          id="total"
          type="number"
          value={formData.total}
          placeholder="Enter total amount"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="downPayment">Down Payment ($)</label>
        <input
          id="downPayment"
          type="number"
          value={formData.downPayment}
          placeholder="Enter down payment"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="rate">Interest Rate (%)</label>
        <input
          id="rate"
          type="number"
          value={formData.rate}
          placeholder="Enter interest rate"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="years">Amortization Period (Years)</label>
        <input
          id="years"
          type="number"
          value={formData.years}
          placeholder="Enter years"
          onChange={handleChange}
        />
      </div>

      <Button onClick={calculate} loading={loading} isFormValid={isFormValid}>
        Calculate
      </Button>
    </div>
  );
}

export default InputField;
