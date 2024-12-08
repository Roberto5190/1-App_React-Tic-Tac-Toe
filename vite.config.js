import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite acceder desde cualquier interfaz de red
    port: 5173, // Puedes personalizar el puerto si lo deseas
  }
})
