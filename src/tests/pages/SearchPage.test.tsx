import { render, router } from '../../setupTests';
import SearchPage from '../../pages/SearchPage/SearchPage';
import renderer from 'react-test-renderer';
import { getCategories } from '../../api/api';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

it('Search page renders without crashing', () => {
  render(<SearchPage />);
});

it('Search page matches snapshot', () => {
  const rendered = renderer.create(router(<SearchPage />));
  expect(rendered).toMatchSnapshot();
});

jest.mock('../../api/api');

test('Search bar filters buttons', () => {
  getCategories.mockResolvedValue(['Lit', 'ECG', 'Oxygène']);
  render(<SearchPage />);

  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'ooooooo' } });
  fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });

  expect(screen.queryAllByTestId('item-button').length).toBe(0);
});
