import { render, router } from '../../setupTests';
import SearchPage from '../../pages/SearchPage/SearchPage';
import renderer from 'react-test-renderer';

it('Search page renders without crashing', () => {
  render(<SearchPage />);
});

it('Search page matches snapshot', () => {
  const rendered = renderer.create(router(<SearchPage />));
  expect(rendered).toMatchSnapshot();
});
