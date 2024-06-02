<script lang="ts">
  import { Clock, Play, Shuffle } from "lucide-svelte";
  import type { ISong } from "../../@types/res/song";
  import TypographyBodyM from "../moon/TypographyBodyM.svelte";
  import TypographyMuted1 from "../moon/TypographyMuted1.svelte";
  import TypographyMuted2 from "../moon/TypographyMuted2.svelte";

  export let songs: ISong[];
</script>

<div class="h-16 w-full flex items-center gap-4 p-4">
  <button
    class="h-12 w-12 hover:scale-110 duration-150 flex justify-center items-center rounded-full bg-[#ed3675]"
  >
    <Play
      size={24}
      color="hsl(var(--foreground))"
      fill="hsl(var(--foreground))"
    />
  </button>
  <button
    class="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
  >
    <Shuffle />
  </button>
</div>
<div class="p-4">
  <div class="song-grid h-9 border-b-2 mb-2 sticky top-0 bg-background">
    <div class="flex items-center justify-self-end">
      <TypographyMuted1>#</TypographyMuted1>
    </div>
    <div class="flex items-center">
      <TypographyMuted1>Title</TypographyMuted1>
    </div>
    <div class="flex items-center justify-center">
      <Clock size={16} color="hsl(var(--muted-foreground))" />
    </div>
  </div>
  {#each songs as song, id}
    <div class="song-grid h-14 hover:bg-muted rounded-sm">
      <div class="flex items-center justify-self-end">
        <TypographyMuted1>{id + 1}</TypographyMuted1>
      </div>
      <div class="flex flex-col justify-center">
        <TypographyBodyM>{song.name}</TypographyBodyM>
        <TypographyMuted2
          >{song.artists.primary.map((i) => i.name)}</TypographyMuted2
        >
      </div>
      <div class="flex items-center justify-center">
        <TypographyMuted1>{"5:34"}</TypographyMuted1>
      </div>
    </div>
  {/each}
</div>

<style>
  .song-grid {
    padding: 0 16px;
    display: grid;
    gap: 16px;
    grid-template-columns:
      [index] 16px [first] minmax(120px, 4fr)
      [last] minmax(120px, 1fr);
  }
</style>
