<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h5
  class={cx(
    "scroll-m-20 text-2xl font-semibold tracking-tight text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h5>
