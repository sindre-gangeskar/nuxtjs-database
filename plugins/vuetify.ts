import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
export default defineNuxtPlugin(app => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: "dark",
		},
		icons: {
			defaultSet: "mdi",
			sets: { mdi },
		},
	});

	app.vueApp.use(vuetify);
});
