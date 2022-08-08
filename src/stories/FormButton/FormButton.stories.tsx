import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormButton } from './FormButton';

export default {
  title: 'Example/FormButton',
  component: FormButton,
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'large',
  label: 'button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'small',
  label: 'button'
};