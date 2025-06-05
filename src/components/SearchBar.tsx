import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
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
      />
    </div>
  );
};

export default SearchBar;
