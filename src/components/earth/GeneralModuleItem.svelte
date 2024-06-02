<script lang="ts">
  import { navigate } from "svelte-routing";
  import type {
    HomeModuleAlbumType,
    HomeModuleMiniType,
    HomeModulePlaylistType,
    HomeModuleSongType,
  } from "../../@types/res/HomeModule";
  import { ImageQualityEnum } from "../../@types/res/misc";
  import Avatar from "../moon/Avatar.svelte";
  import TypographyBodyS from "../moon/TypographyBodyS.svelte";
  import TypographyMuted2 from "../moon/TypographyMuted2.svelte";
  import getSrcFromImage from "../../utils/getScrFromImage";

  export let data:
    | HomeModuleAlbumType
    | HomeModuleSongType
    | HomeModulePlaylistType
    | HomeModuleMiniType;

  const src = getSrcFromImage(data.image, ImageQualityEnum["500P"]);

  const handleClick = () => {
    console.log(data.type, data);

    switch (data.type) {
      case "artist":
        navigate(`/artist/${data.id}`);
        break;
      case "album":
        navigate(`/album/${data.id}`); //done
        break;
      case "playlist":
        navigate(`/playlist/${data.id}`); //done
        break;
      case "song":
        navigate(`/song/${data.id}`); //done
        break;

      default:
        break;
    }
  };
</script>

<button
  class="min-w-40 max-w-60 p-3 hover:bg-muted rounded-lg flex flex-col"
  on:click={handleClick}
>
  <Avatar className="w-full" {src} title={data.name} />
  <div class="pt-2">
    <TypographyBodyS className="font-semibold">{data.name}</TypographyBodyS>
    <TypographyMuted2>{data.subtitle}</TypographyMuted2>
  </div>
</button>
