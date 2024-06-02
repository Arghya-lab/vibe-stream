<script lang="ts">
  import { fetchAlbum } from "../api";
  import TypeBanner from "../components/earth/TypeBanner.svelte";
  import Songs from "../components/earth/Songs.svelte";

  export let id: string;
</script>

{#await fetchAlbum({ id })}
  Loading
{:then data}
  <TypeBanner {data} />
  {#if data.songs}
    <Songs songs={data.songs} />
  {/if}
{/await}
