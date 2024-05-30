<script lang="ts">
  import cx from "classNames";

  export let className = "";
</script>

<p
  class={cx(
    "text-sm text-muted-foreground leading-snug tracking-tight font-semibold",
    className,
  )}
>
  <slot></slot>
</p>
