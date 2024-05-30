<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h6
  class={cx(
    "scroll-m-20 text-xl font-semibold text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h6>
