import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deleniti, culpa sapiente repellendus iure adipisci provident praesentium modi ullam numquam vel maiores illo abvoluptatum aperiam eveniet autem deserunt expedita!',
  isOpen: true,
};
