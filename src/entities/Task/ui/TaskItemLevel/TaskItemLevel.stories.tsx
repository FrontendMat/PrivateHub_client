import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskItemLevel} from './TaskItemLevel';

export default {
    title: 'shared/TaskItemLevel',
    component: TaskItemLevel,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskItemLevel>;

const Template: ComponentStory<typeof TaskItemLevel> = (args) => <TaskItemLevel {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
