<script setup>
import { useTheme } from 'vuetify';
import { computed } from 'vue';
const theme = useTheme();
const isDark = computed(() => theme.global.name.value === 'dark');

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark';
}
</script>

<template>
  <v-btn variant="outlined" @click="toggleTheme"><v-icon :icon="isDark ? 'mdi-brightness-7' : 'mdi-brightness-2'"></v-icon></v-btn>
</template>