import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub project pages: https://pchhonkar.github.io/<repo>/ — CI sets VITE_BASE_PATH
function viteBase(): string {
  const env = (
    globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }
  ).process?.env;
  return env?.VITE_BASE_PATH?.trim() || "/";
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: viteBase(),
});
