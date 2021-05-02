import { render, router } from '../../setupTests';
import LoginPage from '../../pages/LoginPage/LoginPage';
import renderer from 'react-test-renderer';

it('Login page renders without crashing', () => {
  render(<LoginPage />);
});

it('Login page matches snapshot', () => {
  const rendered = renderer.create(router(<LoginPage />));
  expect(rendered).toMatchSnapshot();
});
