import { Multimedia } from "../src/types/Multimedia";

export const sampleMultimediaList: Multimedia[] = [
  {
    trackId: 1,
    trackName: "Song One",
    artistName: "Artist One",
    trackPrice: 1.99,
    artworkUrl100: "https://example.com/image1.jpg",
    collectionName: "Song One",
  },
  {
    trackId: 2,
    trackName: "Song Two",
    artistName: "Artist Two",
    trackPrice: 2.99,
    artworkUrl100: "https://example.com/image2.jpg",
    collectionName: "Song Two",
  },
];

export const sampleMultimediaListPaginnation: Multimedia[] = Array.from(
  { length: 25 },
  (_, i) => ({
    trackId: i + 1,
    trackName: `Track ${i + 1}`,
    artistName: `Artist ${i + 1}`,
    trackPrice: i + 0.99,
    artworkUrl100: "",
    collectionName: `Collection ${i + 1}`,
  })
);
