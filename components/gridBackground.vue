<script setup lang="ts">
import { defineProps } from "vue";
import { useTheme } from "vuetify";

const props = defineProps<{
	size: string;
	gridSize: string;
}>();
</script>

<template>
	<div
		:style="{
			width: props.size,
			height: props.size,
			margin: 'auto',
      position: 'absolute',
			background: `linear-gradient(to right, gray 1px, transparent 1px ), linear-gradient(to top, gray 1px, transparent 1px)`,
      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
			backgroundSize: `${props.gridSize} ${props.gridSize}`,
			backgroundRepeat: 'repeat',
		}"></div>
</template>
