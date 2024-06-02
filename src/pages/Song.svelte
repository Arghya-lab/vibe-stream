<script lang="ts">
  import { fetchSong } from "../api";
  import TypeBanner from "../components/earth/TypeBanner.svelte";
  import Songs from "../components/earth/Songs.svelte";

  export let id: string;
</script>

{#await fetchSong({ id })}
  Loading
{:then data}
  {#if data}
    <Songs songs={data} />
  {/if}
{/await}
