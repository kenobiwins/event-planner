import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      components: "/src/components",
      core: "/src/core",
      store: "/src/core/store",
      theme: "/src/core/theme",
      hooks:"/src/core/hooks"
    },
  },
  build: {
    outDir: "./dist",
    assetsDir: "./dist/assets",
  },
});
