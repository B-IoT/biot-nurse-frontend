import { render } from '../../../setupTests';
import { screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/button/Button/Button';
import React from 'react';

test('Button is triggered by click', () => {
  const fun = jest.fn();
  render(<Button text="test1" onClick={fun} width={10} style={{}} />);
  fireEvent.click(screen.getByText('test1'));
  fireEvent.click(screen.getByText('test1'));

  expect(fun).toHaveBeenCalledTimes(2);
});
