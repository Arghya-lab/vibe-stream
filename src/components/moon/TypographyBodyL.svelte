<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<p
  class={cx(
    "scroll-m-20 font-medium text-pretty break-words text-lg tracking-tight",
    className,
  )}
>
  <slot></slot>
</p>
