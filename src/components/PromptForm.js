import { useState } from "react";
import styles from "./PromptForm.module.css";

export default function PromptForm({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");
  const [consultas, setConsultas] = useState();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (prompt === "") {
          return;
        }
        onSubmit(prompt);
        setConsultas(prompt);
        setPrompt("");
      }}
    >
      <div className={styles.inputforma}>
      <input
        className={styles.input}
        type="text"
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button
        className={styles.submitButton}
        type="submit"
      >
        <span className={styles.buttonText}>Enviar</span>
        {isLoading && (
          <svg
            className={styles.loading}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="30 30"
              strokeLinecap="round"
              strokeOpacity="0.3"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="30 150"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
      </div>
    </form>
  );
}
