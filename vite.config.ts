import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import headers from "vite-plugin-server-headers";

export default defineConfig({
  plugins: [
    react(),
    headers({
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    }),
  ],
  optimizeDeps: {
		esbuildOptions: {
			target: "esnext",
		},
	},

  build: {
		target: "esnext",
		outDir: "dist",
	},

  worker: {
    format: "es"
  }
});
