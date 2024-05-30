import type { HomeModuleSongType } from "./song";
import type {
  HomeModuleMiniType,
  HomeModuleQuality,
  HomeModuleItemType,
} from "./misc";
import type { HomeModuleArtistMapType } from "./artist";

export interface HomeAlbumModulesType {
  recommend: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
    params: { id: string };
  };
  currently_trending: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
    params: { type: string; lang: string };
  };
  top_albums_from_same_year: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
    params: { year: string; lang: string };
  };
  artists: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
  };
}

export interface HomeModuleAlbumType {
  explicit: boolean;
  id: string;
  image: HomeModuleQuality;
  url: string;
  subtitle: string;
  name: string;
  type: "album";
  header_desc: string;
  language: string;
  play_count: number;
  duration: number;
  year: number;
  list_count: number;
  list_type: HomeModuleItemType;
  artist_map?: HomeModuleArtistMapType;
  song_count?: number;
  label_url?: string;
  copyright_text?: string;
  is_dolby_content?: boolean;
  songs?: (HomeModuleSongType | HomeModuleMiniType)[];
  modules?: HomeAlbumModulesType;
}
