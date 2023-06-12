<script lang="ts">
	import { SocialMediaType } from ".";
	export interface LinkType {
		href: string;
		target?: AnchorHTMLAttributes["target"];
	}
	export type Shape = "circle" | "square";
</script>
<script setup lang="ts">
	import {
		AnchorHTMLAttributes,
		PropType,
		computed,
		onMounted,
		useSlots,
		ref,
	} from "vue";
	const props = defineProps({
		type: {
			type: String as PropType<SocialMediaType>,
			required: true,
		},
		link: {
			type: Object as PropType<LinkType>,
			required: true,
		},
		shape: {
			type: String as PropType<Shape>,
			required: false,
			default: "circle",
		},
		dark: {
			type: Boolean,
			required: false,
			default: false,
		},
		width: {
			type: Number,
			required: false,
			default: 40,
		},
		tooltip: {
			type: String,
			required: false,
		},
		color: {
			type: String,
			required: false,
			validator(code: string) {
				const hex = code.split("#").at(-1);
				return (
					typeof hex === "string" &&
					code.startsWith("#") &&
					hex.length === 6 &&
					!isNaN(Number("0x" + hex))
				);
			},
		},
	});
	const eleRef = ref<HTMLDivElement>();
	const type = computed(() => props.type);
	const shape = computed(() => props.shape);
	const isDark = computed(() => props.dark);
	const tooltip = computed(() => props.tooltip);
	const color = computed(() => props.color);
	const slots = useSlots();
	onMounted(() => {
		const element = eleRef.value;
		if (!element) return;
		if (color.value) {
			let c = color.value;
			element.style.setProperty("--default", c);
		} else {
			const c = getComputedStyle(element).getPropertyValue(`--${type.value}`);
			if (c) {
				element.style.setProperty("--default", c);
			}
		}
	});
</script>
<template>
	<div
		class="social-awesome-button"
		role="button"
		ref="eleRef"
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
<style scoped>
	@import url("/fontawesome/css/brands.min.css");
	.social-awesome-button {
		--google: #ea4335;
		--facebook: #1877f2;
		--twitter: #1da1f2;
		--instagram: #c13584;
		--tiktok: #ee1d52;
		--pinterest: #e60023;
		--youtube: #ff0000;
		--linkedin: #0077b5;
		--whatsapp: #25d366;
		--snapchat: #fffc00;
		--default: #1877f2;
		--transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		--dark: #334155;
		--light: #fff;
		--width: 40px;
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
	.social-awesome-button[data-theme="light"] {
		color: #36597d;
		background: linear-gradient(
			var(--light),
			var(--light) 50%,
			var(--default) 50%,
			var(--default)
		);
		background-size: 100% 200%;
	}
	.social-awesome-button[data-theme="dark"] {
		color: #cdd5e1;
		background: linear-gradient(
			var(--dark),
			var(--dark) 50%,
			var(--default) 50%,
			var(--default)
		);
		background-size: 100% 200%;
	}
	.social-awesome-button:hover {
		background-position: 100% 100% !important;
		color: white !important;
	}
	.social-awesome-button:hover i.fa-snapchat {
		color: black !important;
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
	.social-awesome-button[data-theme]:hover > .sab-tooltip,
	.social-awesome-button[data-theme]:hover > .sab-tooltip:before {
		background: var(--default);
	}
	.social-awesome-button.snapchat > .sab-tooltip {
		color: #000;
	}
</style>
