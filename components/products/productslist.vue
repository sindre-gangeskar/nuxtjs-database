<script setup lang="ts">
import { ref, computed } from "vue";
type Product = {
	name: string;
	description?: string;
	category: string;
};
let products = ref(<Product[]>[]);
let activeCard = ref(<string | null>null);;
const fetchProducts = async () => {
	const response = await $fetch("/api/products", { method: "GET" });
	if (response.status === "success") {
		products.value = response.products;
	} else products.value = <Product[]>[];
};

fetchProducts();
</script>

<template>
	<div class="product" v-for="product in products" :key="product.name">
		<v-card :color="activeCard === product.name ? 'success' : ''" :variant="activeCard === product.name ? 'elevated' : 'flat'" @mouseenter="activeCard = product.name" @mouseleave="activeCard = null">
			<v-card-item>
				<v-card-title>
					{{ product.name }}
				</v-card-title>
				<v-card-subtitle>
					<p v-if="product.description">{{ product.description }}</p>
				</v-card-subtitle>
			</v-card-item>
		</v-card>
	</div>
</template>
