<script setup lang="ts">
	import { AwesomeSocialButton } from "./components";
</script>

<template>
	<div class="container-fluid">
		<div class="row vh-100">
			<div class="col dark-wrapper">
				<div class="d-flex align-items-center justify-content-around h-100">
					<div class="d-flex flex-column">
						<awesome-social-button
							:link="{ href: 'https://www.instagram.com/', target: '_blank' }"
							type="snapchat"
							:width="55"
							dark>
							<template #tooltip>
								<i style="color: blue">Instagram</i>
							</template>
						</awesome-social-button>
					</div>
					<awesome-social-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="whatsapp"
						tooltip="youtube"
						dark />
					<awesome-social-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="google"
						tooltip="Google"
						dark />
					<awesome-social-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="tiktok"
						tooltip="Tiktok"
						dark />
					<awesome-social-button
						:link="{ href: 'https://www.instagram.com/' }"
						type="twitter"
						tooltip="Twitter"
						dark />
				</div>
			</div>
			<div class="col light-wrapper">
				<div class="d-flex align-items-center justify-content-around h-100">
					<awesome-social-button
						:width="60"
						type="snapchat"
						:link="{ href: 'https://www.twitter.com/' }"
						tooltip="Twitter" />
					<awesome-social-button
						:width="60"
						type="facebook"
						:link="{ href: 'https://www.twitter.com/' }"
						tooltip="Facebook" />
					<awesome-social-button
						:width="50"
						type="instagram"
						:link="{ href: 'https://www.twitter.com/' }"
						tooltip="Instagram" />
					<awesome-social-button
						:width="50"
						type="tiktok"
						:link="{ href: 'https://www.twitter.com/' }"
						tooltip="tiktok" />
					<awesome-social-button
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
