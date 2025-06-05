export interface Multimedia {
  wrapperType: string;
  kind: MediaType;
  trackName: string;
  artistName: string;
  collectionName: string;
}

export enum MediaType {
  MOVIE = "movie",
  PODCAST = "podcast",
  MUSIC = "music",
  ALL = "all",
}

export interface ResponseMultimedia {
  resultCount: number;
  results: Multimedia[];
}
