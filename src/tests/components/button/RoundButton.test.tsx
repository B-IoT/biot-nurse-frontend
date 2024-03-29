import { render } from '../../../setupTests';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RoundButton from '../../../components/button/RoundButton/RoundButton';

test('Round button is triggered by click', () => {
  const fun = jest.fn();
  render(<RoundButton iconPath="navbarIcons/logOut.svg" onClick={fun} />);
  fireEvent.click(screen.getByTestId('button'));
  fireEvent.click(screen.getByTestId('button'));

  expect(fun).toHaveBeenCalledTimes(2);
});
