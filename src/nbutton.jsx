import "./Button.css";

function Nbutton({ children, onClick }) {
  return (
    <button className="net-btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Nbutton;