import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType, Multimedia } from "../types/Multimedia";

export default function MediaSearchPage() {
  const [query, setQuery] = useState("");
  const [multimediaList, setMultimediaList] = useState<Multimedia[]>();

  const onSearch = async () => {
    setMultimediaList(await getMultimedia(query, MediaType.ALL));
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
