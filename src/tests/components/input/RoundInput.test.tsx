import { render } from '../../../setupTests';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import RoundInput from '../../../components/input/RoundInput/RoundInput';

test('Round input text autocorrects input', () => {
  const INCORRECT_INPUT = '1aaaaa0';
  const CORRECT_INPUT = '10';
  render(<RoundInput input={0} setInput={null} />);

  const input = screen.getByTestId('round-input');
  fireEvent.change(input, { target: { value: INCORRECT_INPUT } });
  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });

  expect(screen.getByDisplayValue(CORRECT_INPUT)).toBeInTheDocument();
});

test('Round input text keeps old value if new is invalid', () => {
  const INCORRECT_INPUT = 'aaaaa';
  const CORRECT_INPUT = '10';
  render(<RoundInput input={10} setInput={null} />);

  const input = screen.getByTestId('round-input');
  fireEvent.change(input, { target: { value: CORRECT_INPUT } });
  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
  expect(screen.getByDisplayValue(CORRECT_INPUT)).toBeInTheDocument();

  fireEvent.change(input, { target: { value: INCORRECT_INPUT } });
  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
  expect(screen.getByDisplayValue(CORRECT_INPUT)).toBeInTheDocument();
});
