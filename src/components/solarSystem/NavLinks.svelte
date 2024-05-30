<script>
  import TypographyBodyL from "./../moon/TypographyBodyL.svelte";
  import TypographyBodyM from "./../moon/TypographyBodyM.svelte";
  import { EllipsisVertical } from "lucide-svelte";
  import TypographyBodyS from "../moon/TypographyBodyS.svelte";
</script>

<div class="w-full md:block md:w-auto">
  <ul
    class="flex flex-col p-4 mt-4 md:flex-row space-y-2 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium"
  >
    <li
      class="hover:bg-muted md:hover:bg-transparent px-2 py-1 md:p-0 rounded-lg"
    >
      <a href="/"
        ><TypographyBodyL
          className="md:text-[0.9375rem] md:leading-normal hover:underline hover:text-muted-foreground"
          >Home</TypographyBodyL
        >
      </a>
    </li>
    <li
      class="hover:bg-muted md:hover:bg-transparent px-2 py-1 md:p-0 rounded-lg"
    >
      <a href="/about"
        ><TypographyBodyL
          className="md:text-[0.9375rem] md:leading-normal hover:underline hover:text-muted-foreground"
          >About</TypographyBodyL
        >
      </a>
    </li>
    <li
      class="hover:bg-muted md:hover:bg-transparent px-2 py-1 md:p-0 rounded-lg"
    >
      <a href="/about"
        ><TypographyBodyL
          className="md:text-[0.9375rem] md:leading-normal hover:underline hover:text-muted-foreground"
          >Search</TypographyBodyL
        >
      </a>
    </li>
  </ul>
</div>
