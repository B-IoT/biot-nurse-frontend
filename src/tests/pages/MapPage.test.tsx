import { render, router } from '../../setupTests';
import MapPage from '../../pages/MapPage/MapPage';
import renderer from 'react-test-renderer';
import { getItemsByCategory } from '../../api/api';
import laSource1 from '../../img/laSource1.png';
import laSource2 from '../../img/laSource2.png';
import MapLayer from '../../components/map/MapLayer/MapLayer';

const items = [
  {
    id: 1,
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 2,
    category: 'ECG',
    status: 'available',
    battery: 94,
    latitude: 46.440896,
    longitude: 6.891924,
    timestamp: '2020-10-26T08:54:14',
    temperature: 0,
    service: 'Bloc 1',
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 0,
    timestamp: '2020-10-26T08:54:14',
    status: 'available',
    battery: 87,
    latitude: 46.44092,
    longitude: 6.891924,
    category: 'ECG',
    service: 'Bloc 1',
    id: 2,
    temperature: 0,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 1,
    timestamp: '2020-10-26T08:54:14',
    status: 'available',
    battery: 56,
    latitude: 46.44089,
    longitude: 6.891944,
    category: 'ECG',
    service: 'Bloc 1',
    id: 3,
    temperature: 0,
  },
];

const location = { state: { category: { id: 1, name: 'Lit' } } };

jest.mock('../../api/api');

it('Map page renders without crashing', () => {
  render(<MapPage location={location} />);
});

it('Map page matches snapshot', () => {
  getItemsByCategory.mockResolvedValue(items);
  const rendered = renderer.create(router(<MapPage location={location} />));
  expect(rendered).toMatchSnapshot();
});

it('Map layer renders without crashing', () => {
  render(
    <MapLayer
      id="source"
      floor={0}
      opacity={1}
      floors={{ 1: laSource1, 2: laSource2 }}
      coordinates={[
        [6.6221621976, 46.5298994022],
        [6.623383043, 46.5294103301],
        [6.6229855116, 46.5289365281],
        [6.6217625055, 46.5294240453],
      ]}
    />
  );
});
