import { render } from '../../../setupTests';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Input from '../../../components/input/Input/Input';

test('Input text changes when typing', () => {
  const TEST_STRING = 'test';
  const CHANGED_STRING = 'changed';

  const fun = jest.fn();
  render(
    <Input
      defaultText={TEST_STRING}
      enterHandler={fun}
      isPassword={false}
      setKeyword={null}
      style={{}}
      width={300}
    />
  );

  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: CHANGED_STRING } });
  expect(screen.getByDisplayValue(CHANGED_STRING)).toBeInTheDocument();

  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });

  expect(fun).toHaveBeenCalledTimes(2);
});
