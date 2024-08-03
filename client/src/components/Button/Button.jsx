import styles from "./Button.module.css";

export default function Button({ text, type = "button", color, disabled = false, show = true, onClick, onMouseDown, id }) {
  const buttonStyles = {
    backgroundColor: color,
  };

  return (
    <button className={styles.container} type={type} style={buttonStyles} disabled={disabled} onClick={onClick} onMouseDown={onMouseDown} id={id}>
      {text}
    </button>
  );
}
