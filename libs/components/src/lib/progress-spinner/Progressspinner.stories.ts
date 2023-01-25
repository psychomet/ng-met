// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";

export default {
  title: 'Angular Material/ProgressSpinner',
  component: ProgressSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ProgressSpinnerComponent> = (args: ProgressSpinnerComponent) => ({
  props: args,
});

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
  value: 35,
    // diameter: 5,
  color: 'primary', // primary | accent | warn
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  mode: 'indeterminate',
  value: 35,
  // diameter: 5,
  color: "accent" // primary | accent | warn
};
