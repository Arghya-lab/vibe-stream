import ApiInstance from ".";
import type { fetchPlaylistResponseType } from "../@types/res";

/* Retrieve a playlist by providing either an ID or a direct link to the playlist on JioSaavn. */
export const fetchPlaylist = async (params: {
  id?: string;
  link?: string;
  page?: number;
  limit?: number;
}) => {
  const { data }: { data: fetchPlaylistResponseType } = await ApiInstance.get(
    "/playlists",
    { params },
  );
  return data;
};
