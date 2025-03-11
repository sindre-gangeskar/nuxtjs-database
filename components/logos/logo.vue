<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  const tl = gsap.timeline();
	tl.set(".logo-wrapper > *", { y: -20 });
	tl.to(".logo-wrapper > *", { y: 0, duration: 1.8, stagger: 0.08, ease: "elastic.out" });
});

const logos = [
	{
		title: "Vue.js",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
		href: "https://vuejs.org/",
		color: "success" as "success",
	},
	{
		title: "Nuxt",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
		href: "https://nuxt.com/",
		color: "success" as "success",
	},
	{
		title: "Prisma",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
		href: "https://www.prisma.io/",
		color: "info" as "info",
	},
	{
		title: "Vuetify",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
		href: "https://vuetifyjs.com",
		color: "info" as "info",
	},
];
</script>

<template>
	<v-container fluid>
		<v-row dense justify="center" :style="{marginTop: '50px'}">
			<v-col v-for="(logo, index) in logos" cols="12" sm="6" md="3" lg="2">
				<LogosCard :key="index" :color="logo.color" :href="logo.href" :title="logo.title" :src="logo.src"></LogosCard>
			</v-col>
		</v-row>
	</v-container>
</template>
