<script setup lang="ts">
	import { SocialAwesomeButton } from "./components";
</script>

<template>
	<div class="container">
		<div class="dark-wrapper">
			<social-awesome-button
				type="instagram"
				dark />
		</div>
		<div class="light-wrapper">
			<social-awesome-button type="instagram" />
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
		justify-content: space-around;
		height: 100vh;
	}
	.dark-wrapper,
	.light-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.dark-wrapper {
		background-color: #242424;
	}
	.light-wrapper {
		background-color: #ffffff;
	}
</style>
