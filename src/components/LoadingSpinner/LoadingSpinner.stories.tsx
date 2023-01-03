import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

export default {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "normal",
};

export const Inverted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inverted.args = {
  variant: "inverted",
};
