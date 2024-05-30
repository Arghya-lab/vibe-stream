<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<p
  class={cx(
    "text-xs text-muted-foreground leading-snug tracking-tight font-medium",
    className,
  )}
>
  <slot></slot>
</p>
