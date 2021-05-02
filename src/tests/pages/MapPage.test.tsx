import { render, router } from '../../setupTests';
import MapPage from '../../pages/MapPage/MapPage';
import renderer from 'react-test-renderer';
import React from 'react';

const location = { state: { itemName: 'Lit' } };

it('Map page renders without crashing', () => {
  render(<MapPage location={location} />);
});

it('Map page matches snapshot', () => {
  const rendered = renderer.create(router(<MapPage location={location} />));
  expect(rendered).toMatchSnapshot();
});
