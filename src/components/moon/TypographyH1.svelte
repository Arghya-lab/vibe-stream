<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h1
  class={cx(
    "scroll-m-20 font-Hind pb-3 text-5xl font-black tracking-tight lg:text-6xl text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h1>
