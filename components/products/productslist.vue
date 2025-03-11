<script setup lang="ts">
import { ref, computed } from "vue";
type Product = {
	name: string;
	description?: string;
	category: { name: string };
};
let products = ref(<Product[]>[]);
let activeCard = ref(<string | null>null);

const fetchProducts = async () => {
	const response = await $fetch("/api/products", { method: "GET" });
	if (response.status === "success") {
		products.value = response.products;
		console.log(products.value);
	} else products.value = <Product[]>[];
};

fetchProducts();
</script>

<template>
	<div class="product-list mt-10">
		<v-container fluid>
			<v-row dense>
				<v-col cols="12" sm="6" md="4" lg="3" v-for="(product, index) in products" :key="index">
					<v-card
						:style="{ minHeight: '200px' }"
						:color="'blue-darken-4'"
						:variant="'flat'"
						class="product"
						hover
						@mouseenter="activeCard = product.name"
						@mouseleave="activeCard = null">
						<v-card-item>
							<v-card-title>{{ product.name }} </v-card-title>
							<v-card-subtitle>{{ product.category.name }} </v-card-subtitle>
							<v-card-text v-if="product.description"> {{ product.description }} </v-card-text>
						</v-card-item>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
