import { render } from '../../setupTests';
import SearchPage from '../../pages/SearchPage/SearchPage';

it('Search page renders without crashing', () => {
  render(<SearchPage />);
});
