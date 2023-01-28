// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { DividerComponent } from './divider.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDividerModule} from "@angular/material/divider";

export default {
  title: 'Angular Material/Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, BrowserAnimationsModule, MatDividerModule],
    }),
  ],
  argTypes: {
    inset: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the divider is an inset divider.'
    },
    vertical: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the divider is vertically aligned.'
    },
  },
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  inset: false,
  vertical: false,
};

export const Insent = Template.bind({});
Insent.args = {
  inset: true,
  vertical: false,
};
export const Vertical = Template.bind({});
Vertical.args = {
  inset: false,
  vertical: true,
};
