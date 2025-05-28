import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/kolibri-website/",
  plugins: [react()],
  assetsInclude: [
    "**/*.PNG",
    "**/*.JPG",
    "**/*.JPEG",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
  ],
});
