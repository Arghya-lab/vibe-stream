import type { DownloadUrlType, ImageType, ISongLyricsType } from "./misc";
import type { IArtistList } from "./search";

export interface ISong {
  id: string;
  name: string;
  type: string;
  year: string | null;
  releaseDate: string | null;
  duration: number | null;
  label: string | null;
  explicitContent: boolean;
  playCount: number | null;
  language: string;
  hasLyrics: boolean;
  lyricsId: string | null;
  lyrics?: ISongLyricsType;
  url: string;
  copyright: string | null;
  album: {
    id: string | null;
    name: string | null;
    url: string | null;
  };
  artists: IArtistList;
  image: ImageType[];
  downloadUrl: DownloadUrlType[];
}

export interface IArtistSongs {
  total: number;
  songs: ISong[];
}
