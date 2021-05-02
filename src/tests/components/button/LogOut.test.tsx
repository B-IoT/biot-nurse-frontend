import { render } from '../../../setupTests';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import LogOut from '../../../components/button/LogOut/LogOut';

test('Log out deletes token', () => {
  render(<LogOut />);
  fireEvent.click(screen.getByTestId('round-button'));

  expect(localStorage.getItem('token')).toBeNull();
  expect(localStorage.getItem('tokenDate')).toBeNull();
});
