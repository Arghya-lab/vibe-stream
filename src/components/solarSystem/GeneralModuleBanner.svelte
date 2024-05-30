<script lang="ts">
  import type {
    HomeModule,
    HomeModuleAlbumType,
    HomeModuleMiniType,
    HomeModulePlaylistType,
    HomeModuleSongType,
  } from "../../@types/res/HomeModule";
  import GeneralModuleItem from "../earth/GeneralModuleItem.svelte";
  import TypographyH5 from "../moon/TypographyH5.svelte";
  import TypographyMuted2 from "../moon/TypographyMuted2.svelte";

  export let data: HomeModule<
    | HomeModuleAlbumType
    | HomeModuleSongType
    | HomeModulePlaylistType
    | HomeModuleMiniType
  >;
</script>

<section>
  <div class="mt-6 flex justify-between items-center">
    <TypographyH5>{data.title}</TypographyH5>
    <TypographyMuted2>Show More</TypographyMuted2>
  </div>
  <div
    class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
  >
    {#each data.data.slice(0, 5) as itemData}
      <GeneralModuleItem
        imgUrls={itemData.image}
        title={itemData.name}
        subtitle={itemData.subtitle}
      />
    {/each}
  </div>
</section>
