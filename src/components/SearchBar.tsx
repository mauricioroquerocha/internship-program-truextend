import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  onEnter = () => {},
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: "0.5rem 1rem",
          maxWidth: "400px",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
