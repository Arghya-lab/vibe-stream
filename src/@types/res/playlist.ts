import type { ImageType } from "./misc";
import type { ISong } from "./song";

export interface IPlaylist {
  id: string;
  name: string;
  description: string | null;
  year: number | null;
  type: string;
  playCount: number | null;
  language: string;
  explicitContent: boolean;
  songCount: number | null;
  url: string;
  image: ImageType[];
  songs: ISong[] | null;
  artists:
    | {
        id: string;
        name: string;
        role: string;
        type: string;
        image: ImageType[];
        url: string;
      }[]
    | null;
}
