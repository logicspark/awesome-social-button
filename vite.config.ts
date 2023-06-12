// import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin()],
	css: {},
	test: {
		globals: true,
		environment: "jsdom",
	},
	build: {
		target: "esnext",
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			name: "AwesomeSocialButton",
			fileName: (format) => `awesome-social-button.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
