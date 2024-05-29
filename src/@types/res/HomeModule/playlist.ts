import type { HomeModuleArtistMiniType } from "./artist";
import type { HomeModuleMiniType, HomeModuleQuality } from "./misc";
import type { HomeModuleSongType } from "./song";

export interface HomePlaylistModulesType {
  related_playlist: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
    params: { id: string };
  };
  currently_trending_playlists: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
    params: { type: string; lang: string };
  };
  artists: {
    source: string;
    position: number;
    title: string;
    subtitle: string;
  };
}

export interface HomeModulePlaylistType {
  id: string;
  name: string;
  subtitle: string;
  header_desc?: string;
  type: "playlist";
  url: string;
  image: HomeModuleQuality;
  language: string;
  year?: number;
  play_count?: number;
  explicit: boolean;
  list_count?: number;
  list_type: string;
  user_id: string;
  is_dolby_content: boolean;
  last_updated?: string;
  username: string;
  firstname: string;
  lastname: string;
  follower_count?: number;
  fan_count?: number;
  share?: number;
  video_count?: number;
  artists?: HomeModuleArtistMiniType[];
  subtitle_desc: string[];
  songs?: (HomeModuleSongType | HomeModuleMiniType)[];
  modules?: HomePlaylistModulesType;
}
