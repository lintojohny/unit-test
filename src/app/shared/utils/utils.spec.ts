import { pluck, range } from './utils';
describe('utils', () => {
  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('pluck', () => {
    it('return correct result', () => {
      const data = [
        { id: '1', name: 'foo1' },
        { id: '2', name: 'foo2' },
        { id: '3', name: 'foo3' },
        { id: '4', name: 'foo4' },
      ];
      expect(pluck(data, 'id')).toEqual(['1', '2', '3', '4']);
    });
  });
});
