<script lang="ts">
  import { createAvatar, melt } from "@melt-ui/svelte";
  import cx from "classNames";

  export let src: string;
  export let title: string;
  export let className = "";

  const {
    elements: { image, fallback },
  } = createAvatar({
    src,
    delayMs: 650,
  });

  const fallbackText = title
    .split(" ")
    .map((word) => word.slice(0, 1))
    .slice(0, 2)
    .join("")
    .toUpperCase();
</script>

<div
  class={cx(
    "flex w-16 aspect-square items-center justify-center rounded-full bg-neutral-100",
    className,
  )}
>
  <img use:melt={$image} alt="Avatar" class="h-full w-full rounded-[inherit]" />
  <span use:melt={$fallback} class="text-3xl font-medium">{fallbackText}</span>
</div>
