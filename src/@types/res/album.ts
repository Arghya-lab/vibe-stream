import type { ImageType } from "./misc";
import type { IArtistList } from "./search";
import type { ISong } from "./song";

export interface IAlbumMini {
  id: string;
  name: string;
  description: string;
  year: number | null;
  type: string;
  playCount: number | null;
  language: string;
  explicitContent: boolean;
  artists: IArtistList;
  url: string;
  image: ImageType[];
}

export interface IAlbum extends IAlbumMini {
  songCount: number | null;
  songs: ISong[] | null;
}

export interface IArtistAlbums {
  total: number;
  albums: IAlbum[];
}
