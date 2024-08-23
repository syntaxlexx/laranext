import { defineConfig, loadEnv } from "vite";
import laravel, { refreshPaths } from "laravel-vite-plugin";

// For React
import react from "@vitejs/plugin-react";

export default function ({ mode }) {
  const env = loadEnv(mode, process.cwd());

  const host = env.VITE_APP_ENV == "local" ? env.VITE_APP_DOMAIN : undefined;

  return defineConfig({
    server: { host },
    plugins: [
      laravel({
        input: ["resources/css/app.css", "resources/js/app.tsx"],
        refresh: [...refreshPaths, "resources/js/**", "app/**"],
      }),

      // For React
      react(),
    ],
  });
}
