import React from "react";
import { Multimedia } from "../../types/Multimedia";
import Card from "../../components/card/Card";
import styles from "./MultimediaList.module.css";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";
import Button from "../../components/button/Button";

type MultimediaListProps = {
  multimediaList?: Multimedia[];
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
};

const MultimediaList: React.FC<MultimediaListProps> = ({
  multimediaList,
  loading,
  page,
  setPage,
  pageCount,
}) => {
  const defaultImgUrl = "cd-151105.svg";

  return multimediaList && multimediaList.length > 0 ? (
    <>
      <div className={styles.gridContainer}>
        {!loading ? (
          multimediaList.map((multimedia) => (
            <Card
              key={multimedia.trackId}
              imageUrl={multimedia.artworkUrl100 ?? defaultImgUrl}
              name={
                multimedia.trackName ??
                multimedia.collectionName ??
                "Unknown Title"
              }
              artistName={multimedia.artistName ?? "Unknown Artist"}
              price={multimedia.trackPrice ? `$${multimedia.trackPrice}` : ""}
            />
          ))
        ) : (
          <>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
          </>
        )}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <span>Page {page}</span>
        <Button
          disabled={page === pageCount}
          onClick={() => {
            setPage(page + 1);
            console.log(page + " " + pageCount);
          }}
        >
          Next
        </Button>
      </div>
    </>
  ) : (
    <p>No results found.</p>
  );
};

export default MultimediaList;
