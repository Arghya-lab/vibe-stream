<script lang="ts">
  import { Search } from "lucide-svelte";
</script>

<div class="relative">
  <div
    class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none"
  >
    <Search class="text-muted-foreground" />
  </div>
  <input
    class="w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 bg-input focus:outline-none focus:border-border focus:ring-2 focus:ring-border text-sm rounded-lg ps-10 h-9 border border-input px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none"
    placeholder="Search..."
    type="text"
  />
</div>
