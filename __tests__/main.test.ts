const foobar = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(foobar.sum(1, 2)).toBe(3);
});
