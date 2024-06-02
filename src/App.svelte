<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import { createScrollArea, melt } from "@melt-ui/svelte";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Navbar from "./components/milkyWay/Navbar.svelte";
  import Artist from "./pages/Artist.svelte";
  import Album from "./pages/Album.svelte";
  import Playlist from "./pages/Playlist.svelte";
  import Song from "./pages/Song.svelte";

  const {
    elements: { root, content, viewport, corner, scrollbarY, thumbY },
  } = createScrollArea({
    type: "scroll",
    dir: "ltr",
  });

  export let url = "";
</script>

<Navbar />
<div use:melt={$root} class="relative h-[calc(100dvh-76px)] overflow-hidden">
  <div use:melt={$viewport} class="h-full w-full">
    <main use:melt={$content}>
      <Router {url}>
        <Route path="/" component={Home} />
        <Route path="/artist/:id" let:params>
          <Artist id={params.id} />
        </Route>
        <Route path="/album/:id" let:params>
          <Album id={params.id} />
        </Route>
        <Route path="/playlist/:id" let:params>
          <Playlist id={params.id} />
        </Route>
        <Route path="/song/:id" let:params>
          <Song id={params.id} />
        </Route>

        <Route path="*" component={NotFound} />
      </Router>
    </main>
  </div>
  <div
    use:melt={$scrollbarY}
    class="flex h-full w-2.5 touch-none select-none border-l border-l-transparent bg-neutral-300/10 p-px transition-colors"
  >
    <div
      use:melt={$thumbY}
      class="relative flex-1 rounded-full bg-neutral-300/50"
    />
  </div>
  <div use:melt={$corner} />
</div>
