import styles from "./button.css";

function Button({ children, buttonColor }) {
  return (
    <button className={buttonColor}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
