type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void;
  error?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  onEnter = () => {},
  error,
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
      {error && <div style={{ color: "red", fontSize: "0.9rem" }}>{error}</div>}
    </div>
  );
};

export default SearchBar;
