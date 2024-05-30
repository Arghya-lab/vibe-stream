<script lang="ts">
  import type { HomeModuleQuality } from "../../@types/res/HomeModule";
  import { ImageQualityEnum } from "../../@types/res/misc";
  import Avatar from "../moon/Avatar.svelte";
  import TypographyBodyS from "../moon/TypographyBodyS.svelte";
  import TypographyMuted2 from "../moon/TypographyMuted2.svelte";

  export let imgUrls: HomeModuleQuality;
  export let title;
  export let subtitle;

  const src =
    typeof imgUrls === "string"
      ? imgUrls
      : imgUrls.find((urls) => urls.quality === ImageQualityEnum["500P"])
          ?.link ||
        imgUrls.findLast(() => true)?.link ||
        "";
</script>

<div class="min-w-40 max-w-60 p-3 hover:bg-muted rounded-lg" role="button">
  <Avatar className="w-full rounded-lg" {src} {title} />
  <div class="pt-2">
    <TypographyBodyS className="font-semibold">{title}</TypographyBodyS>
    <TypographyMuted2>{subtitle}</TypographyMuted2>
  </div>
</div>
