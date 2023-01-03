import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as HeaderComponent } from "./Header";

export default {
  title: "Components/Header",
  component: HeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => <HeaderComponent />;

export const Header = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Header.args = {};
