import { render } from '../../../setupTests';
import { screen } from '@testing-library/react';
import ItemButton from '../../../components/button/ItemButton/ItemButton';
import React from 'react';

test('Item button displays correct name', () => {
  render(<ItemButton itemName="ECG" />);
  expect(screen.getByText('ECG'));

  render(<ItemButton itemName="Lit" />);
  expect(screen.getByText('Lit'));

  render(<ItemButton itemName="Oxygène" />);
  expect(screen.getByText('Oxygène'));
});
