import React from 'react';

import Test from './Test';

export default {
  title: 'Test',
  component: Test,
  argTypes: {
  },
};

const Template = (args) => {
    return (<>
        <Test {...args}>
            testsd
        </Test>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {
    days:[
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]  ,      
    showChars:2, //mo, tu, we, th, fr, sa, su
    activeDayStyle:{
        backgroundColor: 'green',
        color: 'white'
    },
    inactiveDayStyle:{
        backgroundColor: 'pink',
        color: 'black'
    },
    inputStyle:{
        margin: '10px',
        color: 'white',
    },
    dayStyle:{
        border: '2px dotted black',
    },
};