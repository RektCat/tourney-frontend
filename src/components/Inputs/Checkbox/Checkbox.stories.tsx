import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./Checkbox";

export default {
  title: "Inputs/Checkbox",
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Radio Button",
};
