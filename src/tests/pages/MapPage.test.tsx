import { render, router } from '../../setupTests';
import MapPage from '../../pages/MapPage/MapPage';
import renderer from 'react-test-renderer';

const location = { state: { category: { id: 1, name: 'Lit' } } };

it('Map page renders without crashing', () => {
  render(<MapPage location={location} />);
});

it('Map page matches snapshot', () => {
  const rendered = renderer.create(router(<MapPage location={location} />));
  expect(rendered).toMatchSnapshot();
});
