import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ButtonComponent],
    })
  ],
  argTypes: {
    color: {
      options: ['primary' , 'accent' , 'warn' , undefined],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `<button met-button><span>test</span></button>`,
});


export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  color: 'primary'
}

export const Accent = Template.bind({});
Accent.args = {
  ...Accent.args,
  color: 'accent'
}