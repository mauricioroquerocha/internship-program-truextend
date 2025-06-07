import { useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import Button from "../components/button/Button";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType, Multimedia } from "../types/Multimedia";
import MultimediaList from "./multimediaList/MultimediaList";
import Dropdown from "../components/dropdown/Dropdown";

export default function MediaSearchPage() {
  const [query, setQuery] = useState("");
  const [allMultimediaList, setAllMultimediaList] = useState<Multimedia[]>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mediaType, setMediaType] = useState<string>(MediaType.ALL);
  const [page, setPage] = useState(1);

  const pageSize = 10;
  const pageCount = Math.ceil((allMultimediaList?.length ?? 0) / pageSize);

  // Client-side pagination
  const paginatedMultimediaList = allMultimediaList?.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const validate = (value: string): boolean => {
    if (!value.trim()) {
      setError("Search query is required.");
      return false;
    }

    setError("");
    return true;
  };

  const onSearch = async (mediaType: string, pageNumber = 1) => {
    if (validate(query)) {
      setLoading(true);
      console.log(loading);

      setAllMultimediaList(await getMultimedia(query, mediaType));
      setPage(pageNumber);

      setLoading(false);
    } else {
      setAllMultimediaList([]);
    }
  };

  const onMediaTypeSelected = (mediaType: string) => {
    setMediaType(mediaType);
    onSearch(mediaType, 1);
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
          onEnter={() => {
            onSearch(mediaType, 1);
          }}
          error={error}
        ></SearchBar>
        <Dropdown
          options={Object.values(MediaType)}
          value={mediaType}
          onChange={onMediaTypeSelected}
        ></Dropdown>
        <Button
          onClick={() => {
            onSearch(mediaType, 1);
          }}
        >
          Search
        </Button>
      </div>
      <MultimediaList
        multimediaList={paginatedMultimediaList}
        loading={loading}
        page={page}
        setPage={(page: number) => {
          setPage(page);
        }}
        pageCount={pageCount}
      ></MultimediaList>
    </div>
  );
}
