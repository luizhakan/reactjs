import styles from "./SubmitButton.module.css";

export default function SubmitButton({
  text,
  handleSubmit
}) {
  return (
    <div>
      <button onClick={handleSubmit} className={styles.button}>{text}</button>
    </div>
  );
}
