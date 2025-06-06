import React from "react";
import styles from "../button/Button.module.css";

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <select
        data-testid="dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.button}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
