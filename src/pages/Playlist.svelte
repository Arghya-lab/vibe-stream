<script lang="ts">
  import { fetchPlaylist } from "../api";
  import Songs from "../components/earth/Songs.svelte";
  import TypeBanner from "../components/earth/TypeBanner.svelte";

  export let id: string;
</script>

{#await fetchPlaylist({ id })}
  Loading
{:then data}
  <TypeBanner {data} />
  {#if data.songs}
    <Songs songs={data.songs} />
  {/if}
  {console.log(data)}
{/await}
