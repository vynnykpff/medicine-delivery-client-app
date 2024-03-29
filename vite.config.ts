import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsPath from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsPath()],
  base: '/',
})
