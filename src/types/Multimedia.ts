export interface Multimedia {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100?: string;
  trackPrice?: number;
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
