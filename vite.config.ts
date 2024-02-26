import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Builds the site
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../docs",
    // minify: false,
  },
});
