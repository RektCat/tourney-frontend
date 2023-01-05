import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./DifferentTabs";

export default {
  title: "Experimental/Tabs",
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args}>Button text</Component>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    {
      content: (
        <>
          <p>Some paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non ab eius sit, nam ducimus aliquid
            temporibus repudiandae porro amet numquam dolorum sunt fuga, vitae sed autem, commodi sint unde?
          </p>
        </>
      ),
      label: "First Paragraph",
    },
    {
      content: (
        <>
          <p>Some second paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus!
          </p>
        </>
      ),
      label: "Second Paragraph",
    },
  ],
};

export const Secondary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  tabs: [
    {
      content: (
        <>
          <p>Some paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate non ab eius sit, nam ducimus aliquid
            temporibus repudiandae porro amet numquam dolorum sunt fuga, vitae sed autem, commodi sint unde?
          </p>
        </>
      ),
      label: "First Paragraph",
    },
    {
      content: (
        <>
          <p>Some second paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus!
          </p>
        </>
      ),
      label: "Third Paragraph",
    },
    {
      content: (
        <>
          <p>Some third paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae
            libero sint aliquid mollitia. Veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus, officia.
          </p>
        </>
      ),
      label: "Second Paragraph",
    },
    {
      content: (
        <>
          <p>Some third paragraph text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae
            libero sint aliquid mollitia. Veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus, officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae
            libero sint aliquid mollitia. Veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus, officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias facere odit ducimus officia sunt
            quia ipsam beatae maxime possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae
            libero sint aliquid mollitia. Veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus, officia.
          </p>
        </>
      ),
      label: "Second Paragraph",
    },
  ],
};
