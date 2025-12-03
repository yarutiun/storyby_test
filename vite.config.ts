import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fg from "fast-glob";
import path from "path";


export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
      root: "src/landings/landing-1",
      publicDir: "../../public",
      server: {
        open: "/index.html",
      },
    };
  }

  const entries = fg.sync("src/landings/**/index.html");

  const input: Record<string, string> = {};
  for (const p of entries) {
    const name = path.basename(path.dirname(p));
    input[name] = path.resolve(p);
  }

  return {
    plugins: [react()],
    build: {
      outDir: "dist",
      rollupOptions: {
        input,
      },
    },
  };
});
