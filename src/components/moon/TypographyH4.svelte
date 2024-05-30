<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<h4
  class={cx(
    "scroll-m-20 text-2xl pb-0.5 font-bold text-pretty break-words",
    className,
  )}
>
  <slot></slot>
</h4>
