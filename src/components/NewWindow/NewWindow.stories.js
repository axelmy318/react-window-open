import React from 'react';

import NewWindow from './NewWindow';

export default {
  title: 'NewWindow/NewWindow',
  component: NewWindow,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (
        <NewWindow>
            Test
        </NewWindow>
    )
};


export const test = Template.bind({});
test.args = {

};