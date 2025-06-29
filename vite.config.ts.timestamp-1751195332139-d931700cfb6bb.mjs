// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  server: {
    proxy: {
      "/api/astrology-form-submission": {
        target: "https://n8n.commcal.in/webhook",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/astrology-form-submission/, "/astrology-form-submission")
      },
      "/api/astrology-payments": {
        target: "https://n8n.astrosastra.com/webhook",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/astrology-payments/, "/astrology-payments")
      },
      "/api/verify-payment": {
        target: "https://n8n.astrosastra.com/webhook",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/verify-payment/, "/verify-payment")
      },
      "/api/places-autocomplete": {
        target: "https://n8n.astrosastra.com/webhook",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/places-autocomplete/, "/places-autocomplete")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaS9hc3Ryb2xvZ3ktZm9ybS1zdWJtaXNzaW9uJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwczovL244bi5jb21tY2FsLmluL3dlYmhvb2snLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9hc3Ryb2xvZ3ktZm9ybS1zdWJtaXNzaW9uLywgJy9hc3Ryb2xvZ3ktZm9ybS1zdWJtaXNzaW9uJyksXG4gICAgICB9LFxuICAgICAgJy9hcGkvYXN0cm9sb2d5LXBheW1lbnRzJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwczovL244bi5hc3Ryb3Nhc3RyYS5jb20vd2ViaG9vaycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaVxcL2FzdHJvbG9neS1wYXltZW50cy8sICcvYXN0cm9sb2d5LXBheW1lbnRzJyksXG4gICAgICB9LFxuICAgICAgJy9hcGkvdmVyaWZ5LXBheW1lbnQnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vbjhuLmFzdHJvc2FzdHJhLmNvbS93ZWJob29rJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpXFwvdmVyaWZ5LXBheW1lbnQvLCAnL3ZlcmlmeS1wYXltZW50JyksXG4gICAgICB9LFxuICAgICAgJy9hcGkvcGxhY2VzLWF1dG9jb21wbGV0ZSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9uOG4uYXN0cm9zYXN0cmEuY29tL3dlYmhvb2snLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9wbGFjZXMtYXV0b2NvbXBsZXRlLywgJy9wbGFjZXMtYXV0b2NvbXBsZXRlJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsa0NBQWtDO0FBQUEsUUFDaEMsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLHFDQUFxQyw0QkFBNEI7QUFBQSxNQUNuRztBQUFBLE1BQ0EsMkJBQTJCO0FBQUEsUUFDekIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLDhCQUE4QixxQkFBcUI7QUFBQSxNQUNyRjtBQUFBLE1BQ0EsdUJBQXVCO0FBQUEsUUFDckIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLDBCQUEwQixpQkFBaUI7QUFBQSxNQUM3RTtBQUFBLE1BQ0EsNEJBQTRCO0FBQUEsUUFDMUIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLCtCQUErQixzQkFBc0I7QUFBQSxNQUN2RjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
