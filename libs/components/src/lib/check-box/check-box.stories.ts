// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {CheckBoxComponent} from './check-box.component';
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { action } from '@storybook/addon-actions';
import {MatCheckboxChange, MatCheckboxModule} from "@angular/material/checkbox";

export default {
  title: 'Angular Material/CheckBox',
  component: CheckBoxComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatCheckboxModule],
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
      description: 'Whether the check-box element is checked or not'
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the component is disabled'
    },
    id: {
      control: {
        type: 'text'
      },
      description: 'A unique id for the checkbox input. '
    },
    indeterminate: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the checkbox is indeterminate.'
    },
    labelPosition: {
      options: ['before', 'after'],
      control: {type: 'radio'},
      description: "Whether the label should appear after or before the checkbox"
    },
    name: {
      control: {
        type: 'text'
      },
      description: 'Name value will be applied to the input element if present'
    },
    required: {
      control: {
        type: 'boolean'
      },
      description: 'Whether the checkbox is required.'
    },
    value: {
      control: {
        type: 'text'
      },
      description: 'The value attribute of the native input element'
    },
    label: {
      control: {
        type: 'text'
      },
      description: 'The Check box label'
    },
      clickAction: {
        options: [ 'noop','check', 'check-indeterminate'],
        control: {type: 'radio'},
        description: "Checkbox click action when user click on input element. noop: Do not toggle checked or indeterminate. check: Only toggle checked status, ignore indeterminate. check-indeterminate: Toggle checked status, set indeterminate to false. Default behavior. undefined: Same as check-indeterminate."
      },
    change: {
      action: 'change',
      description: "Event emitted when the checkbox's checked value changes."
    },
    indeterminateChange: {
      action: 'indeterminateChange',
      description: "Event emitted when the checkbox's indeterminate value changes."
    }
  },

} as Meta;

const Template: Story<CheckBoxComponent> = (args: CheckBoxComponent) => ({
  props: {
    ...args,
    onChange: (ev: MatCheckboxChange) => {
      // console.log('onChange', ev)
      return action('change')({checked: ev.checked})
    },
    onToggleChange: (ev: void) => {
      // console.log('onToggleChange', ev)
      return action('indeterminateChange')(ev)
    }
  },
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary', // primary | accent | warn
  checked: false,
  disabled: false,
  labelPosition: "after",
  required: true,
  label: "Default",
};
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  color: 'primary', // primary | accent | warn
  checked: false,
  disabled: false,
  indeterminate: true,
  labelPosition: "after",
  required: true,
  label: "Indeterminate",
};
export const Disabled = Template.bind({});
Disabled.args = {
  color: 'primary', // primary | accent | warn
  checked: false,
  disabled: true,
  indeterminate: false,
  labelPosition: "after",
  required: false,
  label: "Disabled",
};
export const Checked = Template.bind({});
Checked.args = {
  color: 'primary', // primary | accent | warn
  checked: true,
  disabled: false,
  indeterminate: false,
  labelPosition: "after",
  required: false,
  label: "Checked",
};
