<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h3
  class={cx(
    "scroll-m-20 font-Hind pb-1 text-3xl font-bold tracking-tight first:mt-0 text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h3>
