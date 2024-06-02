<script lang="ts">
  import { EllipsisVertical } from "lucide-svelte";
  import TypographyH5 from "../moon/TypographyH5.svelte";
  import NavLinks from "../solarSystem/NavLinks.svelte";
  import SearchInput from "../solarSystem/SearchInputContainer.svelte";
  import { createDialog, melt } from "@melt-ui/svelte";
  import { fade, fly } from "svelte/transition";
  import { X } from "lucide-svelte";

  const {
    elements: { trigger, overlay, content, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });
</script>

<nav class="px-2 sm:px-4 py-2.5 w-full h-[76px] bg-background border-b-2">
  <div
    class="mx-auto flex flex-wrap justify-between items-center w-full px-2 sm:px-8"
  >
    <a href="/" class="flex items-center">
      <img src="/logo.svg" class="me-3 h-6 sm:h-9" alt="Vibe Stream" />
      <TypographyH5>Vibe Stream</TypographyH5>
    </a>
    <div class="flex md:order-2">
      <SearchInput />
      <button
        use:melt={$trigger}
        class="focus:outline-none whitespace-normal m-0.5 rounded-lg focus:ring-2 p-1.5 focus:ring-border hover:bg-secondary ms-3 md:hidden"
      >
        <EllipsisVertical />
      </button>
    </div>
    <div class="hidden md:block">
      <NavLinks />
    </div>
  </div>
</nav>
{#if $open}
  <div class="" use:melt={$portalled}>
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 150 }}
    />
    <div
      use:melt={$content}
      class="fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-white p-6
            shadow-lg focus:outline-none"
      transition:fly={{
        x: -350,
        duration: 300,
        opacity: 1,
      }}
    >
      <button
        use:melt={$close}
        aria-label="Close"
        class="absolute right-[10px] top-[10px] inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 focus:outline-none focus:ring-2 focus:ring-magnum-400"
      >
        <X class="size-4" />
      </button>
      <NavLinks />
    </div>
  </div>
{/if}
