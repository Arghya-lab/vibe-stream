import type { HomeModuleArtistMapType } from "./artist";

export type HomeModuleType =
  | "artist"
  | "album"
  | "playlist"
  | "radio"
  | "radio_station"
  | "song"
  | "channel"
  | "mix"
  | "show"
  | "episode"
  | "season"
  | "label";

export type HomeModuleQuality = string | { quality: string; link: string }[];

export interface HomeModuleRights {
  code: unknown;
  cacheable: unknown;
  delete_cached_object: unknown;
  reason: unknown;
}

export interface HomeModuleMiniType {
  id: string;
  name: string;
  subtitle?: string;
  header_desc?: string;
  type: HomeModuleType;
  url: string;
  image: HomeModuleQuality;
  color?: string;
  duration?: number;
  album?: string;
  album_id?: string;
  album_url?: string;
  download_url?: HomeModuleQuality;
  artist_map?: HomeModuleArtistMapType;
  explicit?: boolean;
  list?: string;
}
