import ApiInstance from ".";
import type { ShortByEnum, ShortOrderEnum } from "../@types/reqParamEnums";
import type {
  fetchArtistAlbumsResponseType,
  fetchArtistResponseType,
  fetchArtistSongsResponseType,
} from "../@types/res";

/* Retrieve artist by ID or by a direct artist link. */
export const fetchArtist = async (params: {
  id?: string;
  link?: string;
  page?: number;
  songCount?: number;
  albumCount?: number;
  sortBy?: ShortByEnum;
  sortOrder?: ShortOrderEnum;
}) => {
  const { data }: { data: fetchArtistResponseType } = await ApiInstance.get(
    "/artists",
    { params }
  );
  return data;
};

/* Retrieve a list of songs for a given artist by their ID, with optional sorting and pagination. */
export const fetchArtistSongs = async (
  id: string,
  params: {
    page?: number;
    sortBy?: ShortByEnum;
    sortOrder?: ShortOrderEnum;
  }
) => {
  const { data }: { data: fetchArtistSongsResponseType } =
    await ApiInstance.get(`/artists/${id}/songs`, { params });
  return data;
};

/* Retrieve a list of albums for a given artist by their ID, with optional sorting and pagination. */
export const fetchArtistAlbums = async (
  id: string,
  params: {
    page?: number;
    sortBy?: ShortByEnum;
    sortOrder?: ShortOrderEnum;
  }
) => {
  const { data }: { data: fetchArtistAlbumsResponseType } =
    await ApiInstance.get(`/artists/${id}/albums`, { params });
  return data;
};
