import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./RadioButton";

export default {
  title: "Inputs/RadioButton",
  component: Component,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <fieldset>
          <Story />
          <Story />
        </fieldset>
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Radio Button",
};
// export const Secondary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Secondary.args = {
//   variant: "accent",
// };
