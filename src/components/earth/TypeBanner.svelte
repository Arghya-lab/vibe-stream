<script lang="ts">
  import TypographySmall from "./../moon/TypographySmall.svelte";
  import TypographyBodyM from "./../moon/TypographyBodyM.svelte";
  import Avatar from "./../moon/Avatar.svelte";
  import type { IAlbum } from "../../@types/res/album";
  import type { IPlaylist } from "../../@types/res/playlist";
  import getSrcFromImage from "../../utils/getScrFromImage";
  import { ImageQualityEnum } from "../../@types/res/misc";
  import TypographyH3 from "../moon/TypographyH3.svelte";

  export let data: IAlbum | IPlaylist;
  const src = getSrcFromImage(data.image, ImageQualityEnum["150P"]);
</script>

<div class="flex gap-4 items-end p-4">
  <Avatar {src} title={data.name} className="w-32 h-32 shadow-lg" />
  <div>
    <TypographyBodyM className="capitalize pb-1">{data.type}</TypographyBodyM>
    <TypographyH3>{data.name}</TypographyH3>
    <!-- {#if data.artists && data.artists?.primary}
      {#each data.artists.primary as artist}
        <TypographySmall>{artist.name}</TypographySmall>
        <span>•</span>
      {/each}
    {/if} -->
    {#if data.songs}
      <span>•</span>
      <TypographySmall>{data.songs.length} songs</TypographySmall>
    {/if}
    {#if data.year}
      <span>•</span>
      <TypographySmall>{data.year}</TypographySmall>
    {/if}
  </div>
</div>
