<script lang="ts">
  import { Search } from "lucide-svelte";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade } from "svelte/transition";
  import SearchInput from "../earth/SearchInput.svelte";

  const {
    elements: { trigger, overlay, content, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });
</script>

<div class="hidden md:block">
  <SearchInput />
</div>
<button
  use:melt={$trigger}
  class="focus:outline-none whitespace-normal m-0.5 rounded-lg focus:ring-2 p-1.5 focus:ring-border hover:bg-secondary ms-3 md:hidden"
>
  <Search />
</button>
{#if $open}
  <div class="" use:melt={$portalled}>
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 150 }}
    />
    <div
      class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
          max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
          p-6 shadow-lg"
      use:melt={$content}
    >
      <SearchInput />
    </div>
  </div>
{/if}
