import type { IAlbumMini } from "./album";
import type { ImageType } from "./misc";
import type { ISong } from "./song";

export interface ISearchItemArtistItem {
  id: string;
  name: string;
  role: string;
  type: string;
  image: ImageType[];
  url: string;
}

export interface IArtistList {
  primary: ISearchItemArtistItem[];
  featured: ISearchItemArtistItem[];
  all: ISearchItemArtistItem[];
}

/* -------------------------- Global search -------------------------- */
export interface IGlobalSearchAlbums {
  id: string;
  title: string;
  image: ImageType[];
  artist: string;
  url: string;
  type: string;
  description: string;
  year: string;
  language: string;
  songIds: string;
}

export interface IGlobalSearchSongs {
  id: string;
  title: string;
  image: ImageType[];
  album: string;
  url: string;
  type: string;
  description: string;
  primaryArtists: string;
  singers: string;
  language: string;
}

export interface IGlobalSearchArtists {
  id: string;
  title: string;
  image: ImageType[];
  type: string;
  description: string;
  position: number;
}

export interface IGlobalSearchPlaylist {
  id: string;
  title: string;
  image: ImageType[];
  url: string;
  language: string;
  type: string;
  description: string;
}

export interface IGlobalSearchTopQuery {
  id: string;
  title: string;
  image: ImageType[];
  album: string;
  url: string;
  type: string;
  description: string;
  primaryArtists: string;
  singers: string;
  language: string;
}

export interface IGlobalSearchItem<T> {
  results: T[];
  position: number;
}

export interface IGlobalSearchData {
  albums: IGlobalSearchItem<IGlobalSearchAlbums>;
  songs: IGlobalSearchItem<IGlobalSearchSongs>;
  artists: IGlobalSearchItem<IGlobalSearchArtists>;
  playlists: IGlobalSearchItem<IGlobalSearchPlaylist>;
  topQuery: IGlobalSearchItem<IGlobalSearchTopQuery>;
}

/* -------------------------- Search songs -------------------------- */
export interface ISearchSongsData {
  total: number;
  start: number;
  results: ISong[];
}

/* -------------------------- Search for albums -------------------------- */
export interface ISearchAlbumsData {
  total: number;
  start: number;
  results: IAlbumMini[];
}

/* -------------------------- Search for artists -------------------------- */
export interface ISearchArtistResult {
  id: string;
  name: string;
  role: string;
  type: string;
  image: ImageType[];
  url: string;
}

export interface ISearchArtistData {
  total: number;
  start: number;
  results: ISearchArtistResult[];
}

/* -------------------------- Search for playlists -------------------------- */
export interface ISearchPlaylistResult {
  id: string;
  name: string;
  type: string;
  image: ImageType[];
  url: string;
  songCount: number | null;
  language: string;
  explicitContent: boolean;
}

export interface ISearchPlaylistData {
  total: number;
  start: number;
  results: ISearchPlaylistResult[];
}
