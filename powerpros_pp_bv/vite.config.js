// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/react-project",
  resolve: {
    alias: {
      "@design": path.resolve("./src/app/components/design"),
      "@functional": path.resolve("./src/app/components/functional"),
      "@core": path.resolve("./src/core"),
      // "@Modules": path.resolve("./src/app/core/Modules/categories"),
      "@pages": path.resolve("./src/app/pages"),
      "@style": path.resolve("./src/app/style"),
    },
  },
});