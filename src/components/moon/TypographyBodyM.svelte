<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<p class={cx("scroll-m-20 font-medium text-pretty break-words", className)}>
  <slot></slot>
</p>
