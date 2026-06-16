import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/powerwash-ops-app/",
  plugins: [react()],
  preview: {
    allowedHosts: ["powerwash-ops-dashboard.onrender.com", "ibehar2025-creator.github.io"],
  },
});
