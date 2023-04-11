<script setup lang="ts">
	import { SocialAwesomeButton } from "./components";
</script>

<template>
	<div class="container">
		<div class="dark-wrapper">
			<social-awesome-button
				:link="{ href: 'https://www.instagram.com/', target: '_blank' }"
				type="instagram"
				dark />
			<social-awesome-button
				:link="{ href: 'https://www.instagram.com/' }"
				type="facebook"
				dark />
			<social-awesome-button
				:link="{ href: 'https://www.instagram.com/' }"
				type="google"
				dark />
			<social-awesome-button
				:link="{ href: 'https://www.instagram.com/' }"
				type="tiktok"
				dark />
			<social-awesome-button
				:link="{ href: 'https://www.instagram.com/' }"
				type="twitter"
				tooltip="Twitter"
				dark />
		</div>
		<div class="light-wrapper">
			<social-awesome-button
				:width="60"
				type="twitter"
				:link="{ href: 'https://www.twitter.com/' }"
				tooltip="Twitter" />
			<social-awesome-button
				:width="60"
				type="facebook"
				:link="{ href: 'https://www.twitter.com/' }"
				tooltip="Facebook" />
			<social-awesome-button
				:width="50"
				type="instagram"
				:link="{ href: 'https://www.twitter.com/' }"
				tooltip="Instagram" />
			<social-awesome-button
				:width="50"
				type="tiktok"
				:link="{ href: 'https://www.twitter.com/' }"
				tooltip="tiktok" />
			<social-awesome-button
				:width="50"
				type="google"
				:link="{ href: 'https://www.twitter.com/' }"
				tooltip="Google" />
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
		justify-content: space-evenly;
	}
	.dark-wrapper {
		background-color: #242424;
	}
	.light-wrapper {
		background-color: #ffffff;
	}
</style>
