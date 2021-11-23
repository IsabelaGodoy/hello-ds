import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, Props } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
