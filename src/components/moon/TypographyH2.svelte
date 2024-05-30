<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h2
  class={cx(
    "scroll-m-20 font-Hind pb-3 text-4xl font-black tracking-tight lg:text-5xl text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h2>
