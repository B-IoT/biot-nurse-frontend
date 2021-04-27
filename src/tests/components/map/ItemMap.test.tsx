import { render } from '../../../setupTests';
import { screen } from '@testing-library/react';
import React from 'react';
import ItemMap from '../../../components/map/ItemMap/ItemMap';

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
  },
];

jest.mock('../../../api/api', () => ({
  getItemsByCategory: jest.fn().mockResolvedValue(items),
}));

test('Item map renders markers', async () => {
  render(<ItemMap itemName="ECG" />);
  expect(await screen.findAllByTestId('map-marker')).toBe(3);
});
