<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<p class={cx("text-[0.9375rem] leading-normal", className)}>
  <slot></slot>
</p>
