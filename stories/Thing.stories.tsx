import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing, Props } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Thing,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
