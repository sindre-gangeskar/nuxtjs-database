<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { useHead } from "#app";

const title = "Products";
const description = "Products Overview";

useHead({ title, meta: [{ name: "description", content: description }] });

onMounted(() => {
  const tl = gsap.timeline();
  const prTl = gsap.timeline();
	tl.set(".main-wrapper > p", { x: -20, opacity: 0 });
	tl.to(".main-wrapper > p", { x: 0, duration: 1, stagger: 0.08, ease: "power4.out", opacity: 1 });
	prTl.set(".product-list > *", { y: -20, opacity: 0 });
	prTl.to(".product-list > *", { y: 0, duration: 1, stagger: 0.08, ease: "power4.out", opacity: 1 });
});
</script>

<template>
	<main class="mt-15 main-wrapper">
		<p class="text-h1">Products</p>
		<p class="text-subtitle-1">Overview over all records currently registered in the database. Being fetched using service files and <strong>PrismaClient</strong></p>
		<ProductsProductslist />
	</main>
</template>
