<script lang="ts">
	import { SocialMediaType } from ".";
	export interface Props {
		type: SocialMediaType;
		link: { href: string; target?: AnchorHTMLAttributes["target"] };
		shape?: "circle" | "square";
		dark?: boolean;
		width?: number;
		tooltip?: string;
	}
</script>
<script setup lang="ts">
	import { AnchorHTMLAttributes, computed, useSlots } from "vue";
	const props = defineProps<Props>();
	const type = computed(() => props.type);
	const shape = computed(() => props.shape ?? "circle");
	const isDark = computed(() => props.dark ?? false);
	const tooltip = computed(() => props.tooltip);
	const slots = useSlots();
</script>
<template>
	<div
		class="social-awesome-button"
		role="button"
		:data-theme="isDark ? 'dark' : 'light'"
		:class="[type, shape]"
		:style="{ '--width': `${props.width ?? 40}px` }">
		<span
			v-if="slots.tooltip || tooltip"
			class="sab-tooltip">
			<slot
				v-if="slots.tooltip"
				name="tooltip"></slot>
			<template v-else>{{ tooltip }}</template>
		</span>

		<i
			class="fa-brands"
			:class="`fa-${type}`"></i>
		<a
			:href="props.link.href"
			:target="props.link.target ?? '_self'"></a>
	</div>
</template>
<style>
	@import url("/fontawesome/css/brands.min.css");
	:root {
		--google: #ea4335;
		--facebook: #1877f2;
		--twitter: #1da1f2;
		--instagram: #c13584;
		--tiktok: #ee1d52;
		--transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		--dark: #334155;
		--light: #fff;
		--width: 40px;
	}
	.social-awesome-button {
		box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2),
			-8px -8px 16px rgba(255, 255, 255, 0.04);
		border-radius: 8px;
		border: none;
		font-size: calc(var(--width) / 2);
		line-height: 1;
		position: relative;
		transition: background 0.4s, color 0.5s;
		width: var(--width);
		height: var(--width);
	}
	.social-awesome-button > i {
		font-family: "Font Awesome 6 Brands";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-style: inherit;
	}
	.social-awesome-button.circle {
		border-radius: 50%;
	}
	.social-awesome-button > a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.social-awesome-button[data-theme="light"].instagram {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--instagram) 50%,
			var(--instagram)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="dark"].instagram {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--instagram) 50%,
			var(--instagram)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="light"].facebook {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--facebook) 50%,
			var(--facebook)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="dark"].facebook {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--facebook) 50%,
			var(--facebook)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="light"].twitter {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--twitter) 50%,
			var(--twitter)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="dark"].twitter {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--twitter) 50%,
			var(--twitter)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="light"].tiktok {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--tiktok) 50%,
			var(--tiktok)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="dark"].tiktok {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--tiktok) 50%,
			var(--tiktok)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="light"].google {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--google) 50%,
			var(--google)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button[data-theme="dark"].google {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--google) 50%,
			var(--google)
		);
		background-size: 100% 200%;
	}

	.social-awesome-button:hover {
		background-position: 100% 100% !important;
		color: white !important;
	}

	.social-awesome-button > .sab-tooltip {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1rem;
		text-transform: unset;
		background: #ffffff;
		color: #ffffff;
		padding: 5px 8px;
		border-radius: 5px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
		opacity: 0;
		pointer-events: none;
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		width: max-content;
	}

	.social-awesome-button > .sab-tooltip::before {
		position: absolute;
		content: "";
		height: 8px;
		width: 8px;
		background: #ffffff;
		bottom: -3px;
		left: 50%;
		transform: translate(-50%) rotate(45deg);
		transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.social-awesome-button:hover > .sab-tooltip {
		top: -40px;
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}
	.social-awesome-button[data-theme]:hover.twitter > .sab-tooltip,
	.social-awesome-button[data-theme]:hover.twitter > .sab-tooltip:before {
		background: var(--twitter);
	}
	.social-awesome-button[data-theme]:hover.facebook > .sab-tooltip,
	.social-awesome-button[data-theme]:hover.facebook > .sab-tooltip:before {
		background: var(--facebook);
	}
	.social-awesome-button[data-theme]:hover.google > .sab-tooltip,
	.social-awesome-button[data-theme]:hover.google > .sab-tooltip:before {
		background: var(--google);
	}
	.social-awesome-button[data-theme]:hover.tiktok > .sab-tooltip,
	.social-awesome-button[data-theme]:hover.tiktok > .sab-tooltip:before {
		background: var(--tiktok);
	}
	.social-awesome-button[data-theme]:hover.instagram > .sab-tooltip,
	.social-awesome-button[data-theme]:hover.instagram > .sab-tooltip:before {
		background: var(--instagram);
	}
</style>
