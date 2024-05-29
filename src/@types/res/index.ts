import type { HomeModuleType } from "./HomeModule/misc";
import type { HomeModulesMiniType } from "./HomeModule/module";
import type { IAlbum, IArtistAlbums } from "./album";
import type { IArtist } from "./artist";
import type { ISongLyricsType } from "./misc";
import type { IPlaylist } from "./playlist";
import type {
  IGlobalSearchData,
  ISearchAlbumsData,
  ISearchArtistData,
  ISearchPlaylistData,
  ISearchSongsData,
} from "./search";
import type { IArtistSongs, ISong } from "./song";

export interface ApiResponseType<T> {
  success: boolean;
  data: T;
}

// Home Module //
export interface HomeModuleResponseType {
  status: string;
  message: string;
  data: HomeModuleType | HomeModulesMiniType;
}

// Searches //
export type GlobalSearchResponseType = ApiResponseType<IGlobalSearchData>;
export type SearchSongsResponseType = ApiResponseType<ISearchSongsData>;
export type SearchAlbumsResponseType = ApiResponseType<ISearchAlbumsData>;
export type SearchArtistsResponseType = ApiResponseType<ISearchArtistData>;
export type SearchPlaylistsResponseType = ApiResponseType<ISearchPlaylistData>;

// Songs //
export type FetchSongsResponseType = ApiResponseType<ISong[]>;
export type FetchSongLyricsResponseType = ApiResponseType<ISongLyricsType>;
export type FetchSongSuggestionsResponseType = ApiResponseType<ISong[]>;

// Albums //
export type FetchAlbumResponseType = ApiResponseType<IAlbum>;

// Artist //
export type fetchArtistResponseType = ApiResponseType<IArtist>;
export type fetchArtistSongsResponseType = ApiResponseType<IArtistSongs>;
export type fetchArtistAlbumsResponseType = ApiResponseType<IArtistAlbums>;

// Playlist //
export type fetchPlaylistResponseType = ApiResponseType<IPlaylist>;
