import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'vite-riv-loader',
      enforce: 'pre',
      transform(_, id) {
        if (id.endsWith('.riv')) {
          return `export default '${id}'`;
        }
      }
    }
  ],
  
  server: {
    host: true, // Esto permite acceder desde cualquier interfaz de red
    port: 5173, // Puedes personalizar el puerto si lo deseas
  }
})
