<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps<{
	src: string;
	href: string;
	title: string;
	color: "primary" | "secondary" | "info" | "warning" | "error" | "success";
}>();

const loading = ref(true);
</script>

<template>
		<div class="logo-wrapper text-center">
			<v-card variant="plain" class="pa-3">
				<a :href="props.href" target="_blank" :style="{ textDecoration: 'none', color: 'white' }">
					<v-img :src="props.src" :width="150" @load="loading = false" :style="{margin: 'auto'}"></v-img>
					<v-skeleton-loader v-if="loading" type="image" :width="150" :style="{margin: 'auto'}"></v-skeleton-loader>
					<v-card-item>
						<v-card-title> {{ props.title }} </v-card-title>
					</v-card-item>
				</a>
			</v-card>
		</div>
</template>
