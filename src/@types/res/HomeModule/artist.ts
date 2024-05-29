import type { HomeModuleQuality, HomeModuleType } from "./misc";

export interface HomeModuleArtistMiniType {
  id: string;
  image: HomeModuleQuality;
  url: string;
  name: string;
  type: "artist";
  role: string;
}

export interface HomeModuleArtistRecoType {
  explicit: boolean;
  id: string;
  image: HomeModuleQuality;
  url: string;
  subtitle: string;
  name: string;
  type: HomeModuleType;
  featured_station_type: HomeModuleType;
  query: string;
  station_display_text: string;
}

export interface HomeModuleArtistMapType {
  primary_artists: HomeModuleArtistMiniType[];
  featured_artists: HomeModuleArtistMiniType[];
  artists: HomeModuleArtistMiniType[];
}
