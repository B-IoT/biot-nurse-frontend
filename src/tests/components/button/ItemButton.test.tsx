import { render } from '../../../setupTests';
import { screen } from '@testing-library/react';
import ItemButton from '../../../components/button/ItemButton/ItemButton';

test('Item button displays correct name', () => {
  render(<ItemButton category={{id: 1, name: 'ECG'}} />);
  expect(screen.getByText('ECG')).toBeDefined();

  render(<ItemButton category={{id: 2, name: 'Lit'}} />);
  expect(screen.getByText('Lit')).toBeDefined();

  render(<ItemButton category={{id: 3, name: 'Oxygène'}} />);
  expect(screen.getByText('Oxygène')).toBeDefined();

  expect(screen.queryByText('Test')).toBeNull();
});
