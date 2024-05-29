import type { IAlbum } from "./album";
import type { BioType, ImageType } from "./misc";
import type { ISong } from "./song";

export interface IArtistMini {
  id: string;
  name: string;
  url: string;
  image: ImageType[];
  languages: {
    type: string;
  } | null;
  wiki: string;
  dob: string;
  fb: string;
  twitter: string;
  isRadioPresent: boolean;
  type: string;
  dominantType: string;
  aka: string;
  bio: string | null;
  similarArtists:
    | {
        id: string;
        name: string;
      }[]
    | null;
}

export interface IArtist {
  id: string;
  name: string;
  url: string;
  type: string;
  image: ImageType[];
  followerCount: number | null;
  fanCount: string | null;
  isVerified: boolean | null;
  dominantLanguage: string | null;
  dominantType: string | null;
  bio: BioType[] | null;
  dob: string | null;
  fb: string | null;
  twitter: string | null;
  wiki: string | null;
  availableLanguages: string[];
  isRadioPresent: boolean | null;
  topSongs: ISong[] | null;
  topAlbums: IAlbum[] | null;
  singles: ISong[] | null;
  similarArtists: IArtistMini[] | null;
}
