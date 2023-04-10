import getLevel from '../js/main';
import fetchData from '../js/http';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should give an error', () => {
  fetchData.mockReturnValueOnce(new Error()).mockReturnValueOnce({ status: 'ok', level: 15 });
  expect(getLevel('ру')).toBe('Информация об уровне временно недоступна');
  expect(getLevel('1')).toBe('Ваш текущий уровень: 15');
});
