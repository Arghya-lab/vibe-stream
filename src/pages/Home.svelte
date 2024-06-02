<script lang="ts">
  import { type HomeModuleValueType } from "./../@types/res/HomeModule/module";
  import { fetchHomeModules } from "../api";
  import GeneralModuleBanner from "../components/solarSystem/GeneralModuleBanner.svelte";
  import { onMount } from "svelte";

  let moduleData: HomeModuleValueType | null = null;
  let isLoading = false;
  let error: string | null = null;

  onMount(async () => {
    isLoading = true;
    try {
      const res = await fetchHomeModules();
      const data: HomeModuleValueType = Object.values(res);

      moduleData = data
        .filter((item) => item.position)
        .sort((a, b) => a.position - b.position);
    } catch {
      error = "Error fetching home module data";
    } finally {
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  loading
{:else if error}
  Error fetching home HomeModuleSongType
{:else if moduleData}
  {console.log(moduleData)}
  {#each moduleData as data}
    <GeneralModuleBanner {data} />
  {/each}
{/if}
