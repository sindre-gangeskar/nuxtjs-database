import { defineNitroPlugin } from "#imports";
export default defineNitroPlugin(nitroApp => {
	nitroApp.hooks.hook("error", (error, event) => {
		console.error(error);
	});
});
