import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import * as path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  // https://vitejs.dev/config/
  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    define: {
      "process.env": {},
    },
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js",
        },
      ],
    },
    plugins: [
      vue(),
      tsconfigPaths(),
      vueI18n({
        include: path.resolve(__dirname, "./src/core/i18n/**"),
      }),
    ],
    server: {
      port: 3001,
      host: true,
      strictPort: true,
      // configure vite for HMR with Gitpod
      hmr: process.env.GITPOD_WORKSPACE_URL_APP
        ? {
            clientPort: 443,
          }
        : true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
         
        @import "./src/assets/sass/components/_variables.custom.scss";
    `,
        },
      },
    },
  });
};
