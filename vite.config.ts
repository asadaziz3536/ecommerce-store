import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss(),],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   build: {
    chunkSizeWarningLimit:600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          charts: [
            "recharts",
          ],
          icons: ["lucide-react", "react-icons"],
          maps: ["react-simple-maps", "d3-geo"],
        },
      },
    },
  },
  server:{
    host:true,
    port:3000
  }
})
