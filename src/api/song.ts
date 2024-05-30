import ApiInstance from ".";
import type {
  FetchSongLyricsResponseType,
  FetchSongSuggestionsResponseType,
  FetchSongsResponseType,
} from "../@types/res";

/* Retrieve songs by a comma-separated list of IDs or by a direct link to the song on JioSaavn. */
export const fetchSongs = async (params: { ids?: string[]; link?: string }) => {
  const { data }: { data: FetchSongsResponseType } = await ApiInstance.get(
    "/songs",
    { params: params?.ids ? { ids: params.ids.join(",") } : params },
  );
  return data;
};

/* Retrieve a song by its ID. Optionally, include lyrics in the response. */
export const fetchSong = async ({
  id,
  lyrics,
}: {
  id: string;
  lyrics?: boolean;
}) => {
  const { data }: { data: FetchSongsResponseType } = await ApiInstance.get(
    `/songs/${id}`,
    { params: { lyrics } },
  );
  return data;
};

/* Retrieve the lyrics for a song by its ID. */
export const fetchSongLyrics = async (params: { id: string }) => {
  const { data }: { data: FetchSongLyricsResponseType } = await ApiInstance.get(
    `/songs/${params.id}/lyrics`,
  );
  return data;
};

/* Retrieve song suggestions based on the given song ID. This can be used to get similar songs to the one provided for infinite playback. */
export const fetchSongSuggestions = async (params: { id: string }) => {
  const { data }: { data: FetchSongSuggestionsResponseType } =
    await ApiInstance.get(`/songs/${params.id}/suggestions`);
  return data;
};
