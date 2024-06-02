import { ImageQualityEnum } from "../@types/res/misc";

export default function getSrcFromImage(
  image:
    | string
    | {
        quality: ImageQualityEnum;
        link?: string;
        url?: string;
      }[],
  imgQuality: ImageQualityEnum,
): string {
  if (typeof image === "string") return image;

  const foundQuality = image.find((item) => item.quality === imgQuality);

  if (foundQuality) {
    return foundQuality?.link || foundQuality?.url || "";
  }

  return "";
}
