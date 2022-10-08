import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default ({ mode }: { mode: any }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), tsconfigPaths(), svgr()],
    base: process.env.VITE_BASE_URL,
    server: {
      watch: {
        usePolling: true,
      },
    },
  });
};
