<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Navbar from "./components/milkyWay/Navbar.svelte";

  export let url = "";
</script>

<Navbar />
<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/*" component={NotFound} />
</Router>
