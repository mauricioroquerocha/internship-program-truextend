import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType, Multimedia } from "../types/Multimedia";

export default function MediaSearchPage() {
  const [query, setQuery] = useState("");
  const [multimediaList, setMultimediaList] = useState<Multimedia[]>();
  const [error, setError] = useState("");

  const validate = (value: string): boolean => {
    if (!value.trim()) {
      setError("Search query is required.");
      return false;
    }

    setError("");
    return true;
  };

  const onSearch = async () => {
    if (validate(query)) {
      setMultimediaList(await getMultimedia(query, MediaType.ALL));
    } else {
      setMultimediaList([]);
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.2rem",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search..."
          onEnter={onSearch}
          error={error}
        ></SearchBar>
        {/* TODO: Implement filter dropdown */}
        <Button onClick={() => {}}>Filter</Button>
        <Button onClick={onSearch}>Search</Button>
      </div>
      {/* TODO: Implement list search */}
      {multimediaList?.map((multimedia) => {
        return <h6>{multimedia.artistName}</h6>;
      })}
    </div>
  );
}
