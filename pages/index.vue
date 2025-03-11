<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
	const tl = gsap.timeline();
	tl.set(".main-wrapper > p, section > p", { opacity: 0, x: -30 });
	tl.to(".main-wrapper > p, section > p", { opacity: 1, x: 0, duration: 0.5, ease: "power4.out", stagger: 0.08 });
});

import { LogosLogo } from "#components";
import GridBackground from "~/components/gridBackground.vue";
</script>

<template>
	<GridBackground size="1200px" gridSize="50px" :style="{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }" />
	<main class="mt-15 mb-16 main-wrapper px-10">
		<p class="text-h4">Welcome to my Nuxt sandbox project</p>
		<p class="text-h6">This is a demo project created for displaying my progress of learning Vue.js alongside Nuxt and displaying my progress and fun ideas as I come up with them here.</p>
		<br />
		<p class="text-subtitle-1">
			The project currently has a basic database set up with some dummy data. The database being used is MySQL (Would love to and planning on learning <strong>PostgresSQL</strong>) and modeled utilizing the
			<strong>prisma.schema</strong> file.
		</p>
		<p class="text-subtitle-1">I chose to go with Vuetify as the UI library as it's closest to what I'm used to with JoyUI, and it's looking pretty neat out of the box!</p>
	</main>
	<section>
    <p class="text-h3 text-center text-primary">Tools & Frameworks</p>
		<LogosLogo />
	</section>
</template>
