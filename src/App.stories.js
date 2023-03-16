import React from 'react';
import App from './App';

export default {
  title: 'App',
  component: App,
  argTypes: {
    buttonColor: {
      control: {
        type: 'select',
        options: ['red', 'green', 'blue']
      }
    }
  }
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonColor: 'red'
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  buttonColor: 'green'
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  buttonColor: 'blue'
};
