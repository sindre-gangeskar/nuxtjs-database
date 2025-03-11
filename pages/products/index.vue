<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline();
  tl.set(".product-list > *", { x: -20, opacity: 0 });
  tl.to(".product-list > *", { x: 0, duration: 1.5, stagger: 0.08, ease: "elastic.out", opacity: 1 });
})

</script>

<template>
  <main class="mt-15">
    <p class="text-h1">Products</p>
		<p class="text-subtitle-1">Overview over all projects currently registered in the database</p>
    <ProductsProductslist/>
  </main>
</template>
