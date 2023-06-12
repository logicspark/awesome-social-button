import { mount } from "@vue/test-utils";
import AwesomeSocialButton from "../components/AwesomeSocialButton.vue";
import type { Props } from "../components/AwesomeSocialButton.vue";

test("mount component", async () => {
	expect(AwesomeSocialButton).toBeTruthy();
	const props = {
		type: "twitter",
		link: { href: "#" },
	} as Props;
	const wrapper = mount(AwesomeSocialButton, {
		props,
	});
	const element = wrapper.get(".social-awesome-button");

	expect(element).toBeDefined();
	expect(element.classes().length).toEqual(3);
	expect(element.classes().includes(props.type)).toBeTruthy();
	expect(element.get("a").attributes().href).toBeDefined();
	expect(element.get("a").attributes().href).toEqual(props.link.href);
	expect(wrapper.text()).toContain("");
	if (props.tooltip) {
		expect(element.get(".sab-tooltip")).toBeDefined();
	} else {
		expect(element.find(".sab-tooltip").exists()).toBeFalsy();
	}
});
