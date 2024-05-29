export enum ImageQualityEnum {
  "50P" = "50x50",
  "150P" = "150x150",
  "500P" = "500x500",
}

export enum DownloadQualityEnum {
  "12kbps" = "12kbps",
  "48kbps" = "48kbps",
  "96kbps" = "96kbps",
  "160kbps" = "160kbps",
  "320kbps" = "320kbps",
}

export interface ImageType {
  quality: ImageQualityEnum;
  url: string;
}

export interface DownloadUrlType {
  quality: DownloadQualityEnum;
  url: string;
}

export interface ISongLyricsType {
  lyrics: string;
  copyright: string;
  snippet: string;
}

export interface BioType {
  text: string | null;
  title: string | null;
  sequence: number | null;
}
