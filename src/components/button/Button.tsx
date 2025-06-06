import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "0.5rem",
        backgroundColor: "black",
        color: "white",
        borderRadius: "0.5rem",
        border: "1px solid #ccc",
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
