import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5002',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-scroll-area', 'framer-motion'],
          'chart-vendor': ['recharts'],
          'utils-vendor': ['axios', 'class-variance-authority', 'clsx', 'tailwind-merge'],

          // Page chunks - group related pages
          'pages-core': ['./src/pages/PremiumHome', './src/pages/About', './src/pages/Contact'],
          'pages-professional': ['./src/pages/Experience', './src/pages/Skills', './src/pages/Projects'],
          'pages-content': ['./src/pages/Blog', './src/pages/Testimonials', './src/pages/Resources'],
          'pages-interactive': ['./src/pages/Analytics', './src/pages/Chat'],

          // Component chunks
          'components-core': ['./src/components/PremiumNavigation', './src/components/Footer'],
          'components-interactive': ['./src/components/ChatbotWidget', './src/components/ThemeToggle']
        }
      }
    }
  }
})
