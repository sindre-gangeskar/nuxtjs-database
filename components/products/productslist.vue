<script setup lang="ts">
import { ref } from "vue";
type Product = {
	name: string;
	description?: string;
	category: { name: string };
};

let products = ref(<Product[]>[]);
let activeCard = ref(<string | null>null);
let loading = ref(true);

const fetchProducts = async () => {
	try {
		const response = await $fetch("/api/products", { method: "GET" });
		if (response.status === "success") {
			products.value = response.products;
			loading.value = false;
		} else products.value = <Product[]>[];
	} catch (error) {
		console.error(error);
	}
};

fetchProducts();
</script>

<template>
	<div class="product-list mt-10">
		<v-container fluid>
			<v-row dense>
				<v-col cols="12" sm="6" md="4" lg="3" v-for="(product, index) in products" :key="index" v-if="products.length > 0">
					<v-card :style="{ minHeight: '200px' }" color="blue-darken-4" :variant="'elevated'" class="product text-white" hover @mouseenter="activeCard = product.name" @mouseleave="activeCard = null">
						<v-card-item>
							<v-card-title>{{ product.name }} </v-card-title>
							<v-card-subtitle>{{ product.category.name }} </v-card-subtitle>
							<v-card-text v-if="product.description"> {{ product.description }} </v-card-text>
						</v-card-item>
					</v-card>
				</v-col>
				<v-col cols="12" v-if="products.length === 0 && loading === false">
					<p class="text-h4 text-center">No products found</p>
				</v-col>
				<v-col v-if="loading" cols="12" sm="6" md="4" lg="3" v-for="(_, index) in 5" :key="index">
					<v-skeleton-loader type="card"></v-skeleton-loader>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
