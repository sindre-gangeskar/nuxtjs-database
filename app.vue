<template>
	<v-app>
		<div>
			<NuxtRouteAnnouncer />
			<v-container :style="{maxWidth: '1500px'}">
				<navbar />
				<NuxtPage />
			</v-container>
		</div>
	</v-app>
</template>
