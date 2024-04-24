import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preprocessorOptions: {
    scss: {
      // Add any SCSS-related options here
    },
  },
});
