// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {SlideToggleComponent} from './slide-toggle.component';
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Angular Material/SlideToggle',
  component: SlideToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatSlideToggleModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: {type: 'radio'},
    },
    checked: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the slide-toggle element is checked or not'
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the component is disabled'
    },
    change: {
      action: 'change'
    },
    toggleChange: {
      action: 'toggleChange'
    }
  },

} as Meta;

const Template: Story<SlideToggleComponent> = (args: SlideToggleComponent) => ({
  props: {
    ...args,
    onChange: (ev: MatSlideToggleChange) => {
      // console.log('onChange', ev)
      return action('change')({checked: ev.checked})
    },
    onToggleChange: (ev: void) => {
      // console.log('onToggleChange', ev)
      return action('toggleChange')(ev)
    }
  },
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary', // primary | accent | warn
  checked: false,
  disabled: false,
};
export const Disabled = Template.bind({});
Default.args = {
  color: 'primary', // primary | accent | warn
  checked: false,
  disabled: true,
};
export const Checked = Template.bind({});
Checked.args = {
  color: 'primary', // primary | accent | warn
  checked: true,
  disabled: false,
};
