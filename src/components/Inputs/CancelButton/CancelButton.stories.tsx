import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./CancelButton";

export default {
  title: "Inputs/CancelButton",
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args}>Button text</Component>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
// export const Secondary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Secondary.args = {
//   variant: "accent",
// };
