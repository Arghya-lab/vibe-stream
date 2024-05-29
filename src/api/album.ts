import ApiInstance from ".";
import type { FetchAlbumResponseType } from "../@types/res";

/* Retrieve an album by providing either an ID or a direct link to the album on JioSaavn. */
export const fetchAlbum = async (params: { id?: string; link?: string }) => {
  const { data }: { data: FetchAlbumResponseType } = await ApiInstance.get(
    "/albums",
    {
      params: params?.id ? { id: params.id } : params,
    }
  );
  return data;
};
