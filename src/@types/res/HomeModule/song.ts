import type { HomeModuleArtistMapType } from "./artist";
import type {
  HomeModuleItemType,
  HomeModuleQuality,
  HomeModuleRights,
} from "./misc";

export interface HomeModuleSongType {
  id: string;
  name: string;
  subtitle: string;
  header_desc: string;
  type: HomeModuleItemType;
  url: string;
  image: HomeModuleQuality;
  language: string;
  year: number;
  play_count: number;
  explicit: boolean;
  list: string;
  list_type: string;
  list_count: number;
  music: string;
  song?: string;
  album: string;
  album_id: string;
  album_url: string;
  label: string;
  label_url: string;
  origin: string;
  is_dolby_content: boolean;
  "320kbps": boolean;
  download_url: HomeModuleQuality;
  duration: number;
  rights: HomeModuleRights;
  has_lyrics: boolean;
  lyrics_id?: string;
  lyrics_snippet: string;
  starred: boolean;
  copyright_text: string;
  artist_map: HomeModuleArtistMapType;
  release_date?: string;
  vcode: string;
  vlink: string;
  triller_available: boolean;
}
