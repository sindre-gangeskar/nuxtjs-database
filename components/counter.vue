<script>
import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		const count = ref(0);
		const inc = () => count.value++;
		const dec = () => count.value--;
		const count2 = computed(() => count.value * 2);

		function reset() {
			count.value = 0;
		}

		return { count, count2, inc, dec, reset };
	},
});
</script>

<template>
	<v-container>
		<p class="text-h3">Hi!</p>
	</v-container>
</template>
