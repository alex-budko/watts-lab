import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { storiesOf } from '@storybook/react';
import App from './App';

storiesOf('App', module)
  .add('default', () => <App />);

test('button initially displays "click me"', () => {
  const { getByText } = render(<App />);
  const button = getByText('click me');
  expect(button).toBeInTheDocument();
});

test('clicking the button changes its text to "thanks"', () => {
  const { getByText } = render(<App />);
  const button = getByText('click me');
  fireEvent.click(button);
  expect(button).toHaveTextContent('thanks');
});
