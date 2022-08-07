// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../src/tailwind.css';
import {withA11y} from '@storybook/addon-a11y'
import { addDecorator } from '@storybook/react';
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

addDecorator(withA11y)
