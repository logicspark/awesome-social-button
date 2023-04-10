<script lang="ts">
	import { SocialMedia } from ".";
	interface Props {
		type: "facebook" | "twitter" | "instagram" | "tiktok" | "google";
		shape?: "circle" | "square";
		dark?: boolean;
	}
</script>
<script setup lang="ts">
	import { computed } from "vue";
	const props = defineProps<Props>();
	const type = computed(() => props.type);
	const shape = computed(() => props.shape ?? "circle");
	const isDark = computed(() => props.dark ?? false);
</script>
<template>
	<button
		type="button"
		role="button"
		:data-theme="isDark ? 'dark' : 'light'"
		:class="[type]">
		<i
			class="fa-brands"
			:class="`fa-${type}`"></i>
	</button>
</template>
<style>
	:root {
		--facebook: #1877f2;
		--twitter: #1da1f2;
		--instagram: #c13584;
		--tiktok: #ee1d52;
		--transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		--dark: #334155;
		--light: #fff;
	}
	button {
		font-family: inherit;
		box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2),
			-8px -8px 16px rgba(255, 255, 255, 0.04);
		border-radius: 8px;
		border: none;
		padding: 0.8rem 0.9rem;
		font-size: 1.2rem;
		line-height: 1;
		position: relative;
		transition: background 0.4s, color 0.5s;
	}
	button[data-theme="light"].instagram {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--instagram) 50%,
			var(--instagram)
		);
		background-size: 100% 200%;
	}

	button[data-theme="dark"].instagram {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--instagram) 50%,
			var(--instagram)
		);
		background-size: 100% 200%;
	}

	button[data-theme="light"].facebook {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--facebook) 50%,
			var(--facebook)
		);
		background-size: 100% 200%;
	}

	button[data-theme="dark"].facebook {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--facebook) 50%,
			var(--facebook)
		);
		background-size: 100% 200%;
	}

	button[data-theme="light"].twitter {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--twitter) 50%,
			var(--twitter)
		);
		background-size: 100% 200%;
	}

	button[data-theme="dark"].twitter {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--twitter) 50%,
			var(--twitter)
		);
		background-size: 100% 200%;
	}

	button[data-theme="light"].tiktok {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--tiktok) 50%,
			var(--tiktok)
		);
		background-size: 100% 200%;
	}

	button[data-theme="dark"].tiktok {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--tiktok) 50%,
			var(--tiktok)
		);
		background-size: 100% 200%;
	}

	button:hover {
		background-position: 100% 100% !important;
		color: white !important;
	}
</style>
