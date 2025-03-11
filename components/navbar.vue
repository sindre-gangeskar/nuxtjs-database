<script setup>
const routes = ["/", "/products"];
import { useRoute } from "vue-router";
const path = useRoute();
</script>

<template>
	<v-container fluid :style="{ position: 'sticky', zIndex: 999, top: 0, backdropFilter: 'blur(8px)' }">
		<nav class="mx-auto" :style="{ maxWidth: '1500px', display: 'flex', gap: '15px', justifyContent: 'space-between' }">
			<div class="d-flex ga-2">
				<v-btn color="primary" :ripple="false" :variant="path.path === route ? 'outlined' : 'plain'" v-for="route in routes" component="NuxtLink" :to="route">{{
					route === "/" ? "Home" : route.replace("/", "")
				}}</v-btn>
			</div>
			<div class="end-wrapper">
				<themetoggler />
			</div>
		</nav>
	</v-container>
</template>
