<script setup lang="ts">
	import { SocialAwesomeButton } from "./components";
</script>

<template>
	<div class="container-fluid">
		<div class="row vh-100">
			<div class="col dark-wrapper">
				<div class="d-flex align-items-center justify-content-around h-100">
					<div class="d-flex flex-column">
						<social-awesome-button
							:link="{ href: 'https://www.instagram.com/', target: '_blank' }"
							type="instagram"
							:width="55"
							dark>
							<template #tooltip>
								<i style="color: yellow">Instagram</i>
							</template>
						</social-awesome-button>
					</div>
					<social-awesome-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="facebook"
						dark />
					<social-awesome-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="google"
						tooltip="Google"
						dark />
					<social-awesome-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="tiktok"
						tooltip="Tiktok"
						dark />
					<social-awesome-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="twitter"
						tooltip="Twitter"
						dark />
				</div>
			</div>
			<div class="col light-wrapper">
				<div class="d-flex align-items-center justify-content-around h-100">
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
		</div>
	</div>
</template>

<style scoped>
	.dark-wrapper {
		background-color: #242424;
	}
	.light-wrapper {
		background-color: #ffffff;
	}
	.pre {
		max-width: 100px;
		overflow: scroll;
	}
</style>
