import { render } from '../../../setupTests';
import { screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/button/Button/Button';
import React from 'react';

test('Button is triggered by click', () => {
  const fun = jest.fn();
  render(
    <Button
      onClick={fun}
      width={120}
      height={60}
      borderRadius={50}
      blur={0}
      shadowOffset={5}
      surfaceGradient={false}
      style={{}}
    >
      <div>test1</div>
    </Button>
  );

  const button = screen.getAllByText('test1')[0];
  fireEvent.click(button);
  fireEvent.click(button);

  expect(fun).toHaveBeenCalledTimes(2);
});
