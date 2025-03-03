import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
 
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      // Expose the base API URL to your client-side code via process.env.REACT_APP_BASE_API_URL
      'process.env.REACT_APP_BASE_API_URL': JSON.stringify(env.VITE_BASE_API_URL),
    },
    plugins: [react()],
    server: {
      port: 5173, 
      proxy: {

        '/api': {
          target: env.VITE_BASE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
