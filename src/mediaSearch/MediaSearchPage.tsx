import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

export default function MediaSearchPage() {
  const [query, setQuery] = useState("");

  const search = () => {};

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by artist name..."
        ></SearchBar>
        {/* TODO: Implement filter dropdown */}
        <Button onClick={() => {}}>Filter</Button>
        <Button onClick={search}>Search</Button>
      </div>
    </div>
  );
}
