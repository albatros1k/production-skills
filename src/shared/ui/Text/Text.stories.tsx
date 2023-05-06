import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem2',
  text: 'Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem2',
  text: 'Description',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem2',
};

export const OnlyText = Template.bind({});
Primary.args = {
  text: 'Description',
};

export const PrimaryDark = Template.bind({});
Primary.args = {
  title: 'Title lorem2',
  text: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem2',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
Primary.args = {
  text: 'Description',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
