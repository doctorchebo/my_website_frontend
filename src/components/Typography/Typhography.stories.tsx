import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Typhography, { TyphographyProps } from "./Typhography";

export default {
  title: "Components/Typhography",
  component: Typhography,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TyphographyProps> = (args) => <Typhography {...args} />;

export const Primary = Template.bind({});
Primary.args = { style: "modern", content: "Modern Typhography", size:'small'};

export const Secondary = Template.bind({});
Secondary.args = {
  style: "classic",
  content: "Classic Typhography",
  size:'medium'
};
export const Big = Template.bind({});
Big.args = {
  style: "modern",
  content: "Big Modern Typhography",
  size:'large'
};
