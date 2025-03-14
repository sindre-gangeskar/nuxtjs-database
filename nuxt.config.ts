// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
	build: {
		transpile: ["vuetify"],
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", config => {
        //@ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
			});
		},
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
	compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  pages: true
});
