<script setup>
const routes = [ "/", "/products" ];
import { useRoute } from 'vue-router';
const path = useRoute();
</script>

<template>
	<nav>
		<v-container :style="{ display: 'flex', gap: '15px', justifyContent: 'space-between' }">
			<div class="navigation d-flex ga-2">
				<v-btn color="primary" :ripple="false" :variant="path.path === route ? 'outlined' : 'plain'" v-for="route in routes" component="NuxtLink" :to="route">{{ route === "/" ? "Home" : route.replace("/", "") }}</v-btn>
			</div>
			<div class="end-wrapper">
				<themetoggler />
			</div>
		</v-container>
	</nav>
</template>
