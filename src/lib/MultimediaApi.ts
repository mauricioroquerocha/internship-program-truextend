import { MediaType, ResponseMultimedia } from "../types/Multimedia";
import { Api } from "./Api";

const getMultimedia = async (query: string, mediaType: MediaType) => {
  const encodedQuery = encodeURIComponent(query);

  const data = await Api.get<ResponseMultimedia>(
    "/search",
    `?term=${encodedQuery}&media=${mediaType}`
  );

  return data.results;
};

export { getMultimedia };
