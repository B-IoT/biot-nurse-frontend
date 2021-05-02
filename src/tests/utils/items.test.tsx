import { simplifyText } from '../../utils/items';

it('The function simplifyText behaves correctly', () => {
  expect(simplifyText('éééééé')).toBe('eeeeee');
  expect(simplifyText('AbCdEfG')).toBe('abcdefg');
  expect(simplifyText('AAééAA')).toBe('aaeeaa');
});
