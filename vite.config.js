import glob from "glob";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/dictionary/",
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/index.html', // Adjust the path based on your app's entry point
    },
    sourcemap: true,
  },
});
