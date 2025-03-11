<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { useHead } from "#app";
const title = "Home";
const description = "Sindre Gangeskar's Nuxt application";

useHead({ title, meta: [{ name: "description", content: description }] });

import gsap from "gsap";
onMounted(async () => {
  await nextTick();
	const tl = gsap.timeline();
	const btnTl = gsap.timeline();

	tl.set(".main-wrapper p, section p", { opacity: 0, x: -30 });
	tl.to(".main-wrapper p, section p", { opacity: 1, x: 0, duration: 0.5, ease: "power1.out", stagger: 0.08 });

	btnTl.set(".btn-wrapper > *", { opacity: 0 });
	btnTl.to(".btn-wrapper > *", { opacity: 1, duration: 0.6, ease: "power4.in" });
});

import { LogosLogo } from "#components";
import GridBackground from "~/components/gridBackground.vue";
</script>

<template>
	<GridBackground size="1200px" gridSize="50px" :style="{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }" />
	<main class="mt-15 mb-16 main-wrapper px-10">
		<p class="text-h4 text-uppercase">Welcome</p>
		<p class="text-subtitle-1">This is a demo project created for displaying my progress of learning <strong>Vue.js</strong> alongside <strong>Nuxt</strong>.</p>
		<p class="text-subtitle-1">
			The project currently has a basic database structure with some dummy data. <br><br> The database being used is currently MySQL, but I want to learn <strong>PostgresSQL</strong> in the near future. <br>
			I'm using <strong>Prisma</strong> as the ORM, which is quite incredible in my opinion. It allows for an easy and simple way of defining models and relationships thanks to the
			<strong>prisma.schema</strong> file.<br><br>
		</p>
		<p class="text-subtitle-1">I chose to go with <strong>Vuetify</strong> as the UI library / framework as it's closest to what I'm used to with <strong>Joy UI</strong>, supports utility classes and it's looking pretty neat out of the box!</p>
	</main>
	<section class="text-center">
		<p class="text-h3 text-center text-primary">Tools & Frameworks</p>

		<v-container class="btn-wrapper">
			<v-row dense>
				<v-col>
					<v-btn class="btn" href="https://sindregangeskar.dev" color="blue-darken-4" target="_blank">Visit Sindre Gangeskar's Portfolio </v-btn>
				</v-col>
				<v-col>
					<v-btn class="btn" href="https://github.com/sindre-gangeskar/nuxtjs-database" target="_blank" prepend-icon="mdi-github">Visit Repository</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<LogosLogo />
	</section>
</template>
