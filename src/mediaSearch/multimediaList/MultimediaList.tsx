import React from "react";
import { Multimedia } from "../../types/Multimedia";
import Card from "../../components/Card";
import styles from "./MultimediaList.module.css";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";

type MultimediaListProps = {
  multimediaList?: Multimedia[];
  loading: boolean;
};

const MultimediaList: React.FC<MultimediaListProps> = ({
  multimediaList,
  loading,
}) => {
  const defaultImgUrl = "cd-151105.svg";

  return multimediaList && multimediaList.length > 0 ? (
    <div className={styles.gridContainer}>
      {!loading ? (
        multimediaList.map((multimedia) => (
          <Card
            key={multimedia.trackId}
            imageUrl={multimedia.artworkUrl100 ?? defaultImgUrl}
            name={multimedia.trackName ?? "Unknown Title"}
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
  ) : (
    <p>No results found.</p>
  );
};

export default MultimediaList;
