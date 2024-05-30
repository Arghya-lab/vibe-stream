import ApiInstance from ".";
import type {
  GlobalSearchResponseType,
  SearchAlbumsResponseType,
  SearchArtistsResponseType,
  SearchPlaylistsResponseType,
  SearchSongsResponseType,
} from "../@types/res";

/* Search for songs, albums, artists, and playlists based on the provided query string. */
export const doGlobalSearch = async (params: { query: string }) => {
  const { data }: { data: GlobalSearchResponseType } = await ApiInstance.get(
    "/search",
    { params },
  );
  return data;
};

/* Search for songs based on the provided query. */
export const doSearchSongs = async (params: {
  query: string;
  page?: number;
  limit?: number;
}) => {
  const { data }: { data: SearchSongsResponseType } = await ApiInstance.get(
    "/search/songs",
    { params },
  );
  return data;
};

/* Search for albums based on the provided query. */
export const doSearchAlbums = async (params: {
  query: string;
  page?: number;
  limit?: number;
}) => {
  const { data }: { data: SearchAlbumsResponseType } = await ApiInstance.get(
    "/search/albums",
    { params },
  );
  return data;
};

/* Search for artists based on the provided query. */
export const doSearchArtists = async (params: {
  query: string;
  page?: number;
  limit?: number;
}) => {
  const { data }: { data: SearchArtistsResponseType } = await ApiInstance.get(
    "/search/artists",
    { params },
  );
  return data;
};

/* Search for playlists based on the provided query. */
export const doSearchPlaylists = async (params: {
  query: string;
  page?: number;
  limit?: number;
}) => {
  const { data }: { data: SearchPlaylistsResponseType } = await ApiInstance.get(
    "/search/playlists",
    { params },
  );
  return data;
};
