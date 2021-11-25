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

export const Highlight = Template.bind({});
export const Primary = Template.bind({});

Highlight.args = {
  children: 'Highlight',
  variant: 'highlight'
};
Highlight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Qik8LRHbB8Z75X9aFsZVkA/001----Seminovos-Barigui----Componentes-(Copy)?node-id=82%3A422',
  },
}

Primary.args = {
  children: 'Primary',
  variant: 'primary'
};
