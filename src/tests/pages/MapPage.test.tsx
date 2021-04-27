import { render } from '../../setupTests';
import MapPage from '../../pages/MapPage/MapPage';

it('Map page renders without crashing', () => {
  const location = { state: { itemName: 'Lit' } };
  render(<MapPage location={location} />);
});
