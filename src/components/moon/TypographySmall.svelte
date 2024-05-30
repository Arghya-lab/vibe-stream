<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<span class={cx("text-xs leading-snug tracking-tight font-medium", className)}>
  <slot></slot>
</span>
