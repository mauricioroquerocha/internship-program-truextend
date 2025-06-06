import { useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import Button from "../components/button/Button";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType, Multimedia } from "../types/Multimedia";
import MultimediaList from "./multimediaList/MultimediaList";

export default function MediaSearchPage() {
  const [query, setQuery] = useState("");
  const [multimediaList, setMultimediaList] = useState<Multimedia[]>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      setMultimediaList(await getMultimedia(query, MediaType.ALL));
      setLoading(false);
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
        gap: "2rem",
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
      <MultimediaList
        multimediaList={multimediaList}
        loading={loading}
      ></MultimediaList>
    </div>
  );
}
