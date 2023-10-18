import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  /*site: "https://grigorygriko.github.io",
  base: "/astro_checklist",*/
  integrations: [react()]
});
