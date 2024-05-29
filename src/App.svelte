<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Home from "./routes/Home.route.svelte";
  import NotFound from "./routes/NotFound.route.svelte";
  import { getPlaylists } from "./api";

  export let url = "";

  console.log(getPlaylists());
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/*" component={NotFound} />
</Router>
