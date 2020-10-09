import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

test('renders the homepage', () => {
  const {
    getByText,
    getAllByText,
    getByPlaceholderText,
    getAllByPlaceholderText,
  } = render(<Home />);
  expect(getAllByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  expect(getAllByText('Try it now')).toBeTruthy();
  expect(
    getByText(
      'Ready to watch? Enter your email to create or restart your membership.'
    )
  ).toBeTruthy();
});
