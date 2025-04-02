import { useState } from "react";
import styles from "./PromptForm.module.css";

export default function PromptForm({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Fire callback...
        if (prompt === "") {
          return;
        }

        onSubmit(prompt);
        setPrompt("");
      }}
    >
      <label className={styles.label}>Ingrese una consulta:</label>
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
    </form>
  );
}
