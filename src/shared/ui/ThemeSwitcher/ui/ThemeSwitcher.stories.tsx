import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import cls from './ThemeSwitcher.module.scss';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeProvider>
    <ThemeSwitcher {...args} />
  </ThemeProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  children: <ThemeIcon className={cls.light} />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  children: <ThemeIcon className={cls.dark} />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
