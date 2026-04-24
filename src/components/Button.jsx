import "./Button.css";

function Button({ onClick, children, loading, isFormValid }) {
  return (
    <button
      className={`btn ${loading ? "loading" : ""}`}
      onClick={onClick}
      disabled={loading || (isFormValid !== undefined && !isFormValid)}
      type="button"
    >
      {loading ? <span className="spinner"></span> : children}
    </button>
  );
}

export default Button;
