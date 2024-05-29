import type { HomeModuleAlbumType } from "./album";
import type {
  HomeModuleMiniType,
  HomeModuleQuality,
  HomeModuleType,
} from "./misc";
import type { HomeModulePlaylistType } from "./playlist";
import type { HomeModuleSongType } from "./song";

export interface HomeModuleChartType {
  id: string;
  name: string;
  subtitle?: string;
  type: "playlist";
  image: HomeModuleQuality;
  url: string;
  explicit?: boolean;
  count?: number;
  first_name?: string;
  language?: string;
  listname?: string;
}

export interface HomeModuleCityModType {
  explicit: boolean;
  id: string;
  image: HomeModuleQuality;
  url: string;
  subtitle: string;
  name: string;
  type: HomeModuleType;
  album_id?: string;
  featured_station_type?: string;
  query?: string;
}

export interface HomeModuleDiscoverType {
  explicit: boolean;
  id: string;
  image: HomeModuleQuality;
  url: string;
  subtitle: string;
  name: string;
  type: "channel";
  badge: string;
  is_featured: boolean;
  sub_type: HomeModuleType;
  tags: Record<string, string[]>;
  video_thumbnail: string;
  video_url: string;
}

export interface HomeModuleTagMixType {
  explicit: boolean;
  id: string;
  image: HomeModuleQuality;
  url: string;
  subtitle: string;
  name: string;
  type: HomeModuleType;
  first_name: string;
  language: string;
  last_name: string;
  list_count: number;
  list_type: HomeModuleType;
  list: string;
  play_count: number;
  year: number;
}

export interface HomeModuleRadioType {
  id: string;
  name: string;
  subtitle: string;
  type: "radio_station";
  image: HomeModuleQuality;
  url: string;
  explicit: boolean;
  color?: string;
  description?: string;
  featured_station_type: HomeModuleType;
  language: string;
  query?: string;
  station_display_text: string;
}

export type HomeModuleTrendingType = (
  | HomeModuleAlbumType
  | HomeModuleSongType
  | HomeModulePlaylistType
  | HomeModuleMiniType
)[];
