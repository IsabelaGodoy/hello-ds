import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

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
  decorators: [withDesign],
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  children: 'Button',
  variant: 'primary'
};

Secondary.args = {
  children: 'Button',
  variant: 'secondary'
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/SRkbgOY5g8kwp6FhEAmusA/Design-System?node-id=143%3A5973',
  },
}
