import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from "vite-plugin-pwa"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss(), VitePWA({
    registerType: "autoUpdate",

     // important: keeps normal web behavior
      workbox: {
        navigateFallback: "/index.html",

        runtimeCaching: [
          // Pages → network first
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
            },
          },

          // Assets → fast + safe
          {
            urlPattern: ({ request }) =>
              ["style", "script", "image", "font"].includes(
                request.destination
              ),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "assets",
            },
          },
        ],
      },

      manifest: {
        name: "Ecommerce Store",
        short_name: "EcomStore",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0f172a",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
  
  })],
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
        },
      },
    },
  },
  server:{
    host:true,
    port:3000
  }
})
