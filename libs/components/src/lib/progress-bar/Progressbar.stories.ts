// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Angular Material/Progressbar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, BrowserAnimationsModule, MatProgressBarModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
  value: 35,
  color: 'primary', // primary | accent | warn
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  mode: 'indeterminate',
  color: "accent" // primary | accent | warn
};

export const Buffer = Template.bind({});
Buffer.args = {
  mode: 'buffer',
  value: 35,
  bufferValue: 65,
  color: "warn" // primary | accent | warn
};

export const Query = Template.bind({});
Query.args = {
  mode: 'query',
  color: "warn" // primary | accent | warn
};
