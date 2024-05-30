import type { HomeModuleQuality, HomeModuleItemType } from "./misc";

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
  type: HomeModuleItemType;
  featured_station_type: HomeModuleItemType;
  query: string;
  station_display_text: string;
}

export interface HomeModuleArtistMapType {
  primary_artists: HomeModuleArtistMiniType[];
  featured_artists: HomeModuleArtistMiniType[];
  artists: HomeModuleArtistMiniType[];
}
