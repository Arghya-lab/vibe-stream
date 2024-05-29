import type { HomeModuleAlbumType } from "./album";
import type { HomeModuleArtistRecoType } from "./artist";
import type {
  HomeModuleChartType,
  HomeModuleCityModType,
  HomeModuleDiscoverType,
  HomeModuleRadioType,
  HomeModuleTagMixType,
  HomeModuleTrendingType,
} from "./category";
import type { HomeModulePlaylistType } from "./playlist";
import type { HomeModuleMiniType } from "./misc";
import type { HomeModuleSongType } from "./song";

export interface HomeModule<T> {
  title: string;
  subtitle: string;
  position: number;
  featured_text?: string;
  source: string;
  data: T[];
}

interface GlobalConfigItemLang {
  count: number;
  image: string;
  listid: string;
  title?: string;
}

type GlobalConfigItem = Record<string, GlobalConfigItemLang>;

export interface GlobalConfig {
  random_songs_listid: GlobalConfigItem;
  weekly_top_songs_listid: GlobalConfigItem;
}

export interface HomeModuleType {
  albums: HomeModule<HomeModuleAlbumType | HomeModuleSongType>;
  artist_recos: HomeModule<HomeModuleArtistRecoType>;
  charts: HomeModule<HomeModuleChartType>;
  city_mod?: HomeModule<HomeModuleCityModType>;
  discover: HomeModule<HomeModuleDiscoverType>;
  mixes: HomeModule<HomeModuleTagMixType>;
  playlists: HomeModule<HomeModulePlaylistType>;
  radio: HomeModule<HomeModuleRadioType>;
  trending: HomeModule<HomeModuleTrendingType[0]>;
  global_config: GlobalConfig;
}

export interface HomeModulesMiniType {
  albums: HomeModule<HomeModuleMiniType>;
  artist_recos: HomeModule<HomeModuleMiniType>;
  charts: HomeModule<HomeModuleMiniType>;
  city_mod?: HomeModule<HomeModuleMiniType>;
  discover: HomeModule<HomeModuleMiniType>;
  mixes: HomeModule<HomeModuleMiniType>;
  playlists: HomeModule<HomeModuleMiniType>;
  radio: HomeModule<HomeModuleMiniType>;
  trending: HomeModule<HomeModuleMiniType>;
  global_config: GlobalConfig;
}
