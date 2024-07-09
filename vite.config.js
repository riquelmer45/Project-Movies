import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace"; // Importe o plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      // Adicione o plugin replace na lista de plugins
      preventAssignment: true,
      "http://localhost:5173/": "https://riquelmer45.github.io/Project-Movies/",
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion__: 15,
    }),
  ],
  base: "/Project-Movies/",
  build: {
    outDir: "docs",
  },
});
