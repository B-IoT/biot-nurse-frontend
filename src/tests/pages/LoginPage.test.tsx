import { render } from '../../setupTests';
import LoginPage from '../../pages/LoginPage/LoginPage';

it('Login page renders without crashing', () => {
  render(<LoginPage />);
});
