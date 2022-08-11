import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = { direction: 'horizontal', items:['a','b','c'], builder:((item)=><h2>{item}</h2>)};

export const Secondary = Template.bind({});
Secondary.args = {};
export const Big = Template.bind({});
