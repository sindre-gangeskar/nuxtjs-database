<template>
	<v-app>
		<div>
			<NuxtRouteAnnouncer />
			<navbar />
			<v-container :style="{ maxWidth: '1500px' }">
				<NuxtPage />
			</v-container>
		</div>
	</v-app>
</template>
