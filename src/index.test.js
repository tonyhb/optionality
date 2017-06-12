const testPredicate = require('./index.js').default;

test("'in' operator", () => {
  const p = {
    value: ['foo', 'bar'],
    operator: 'in',
  };

  expect(testPredicate(p, 'foo')).toBe(true);
  expect(testPredicate(p, 'bar')).toBe(true);
  expect(testPredicate(p, 'baz')).toBe(false);
  expect(testPredicate(p, ['baz', 'foo'])).toBe(false);
});

test("'nin' operator", () => {
  const p = {
    value: ['', 'solo'],
    operator: 'nin',
  };

  expect(testPredicate(p, '')).toBe(false);
  expect(testPredicate(p, 'solo')).toBe(false);
  expect(testPredicate(p, 'foo')).toBe(true);
});

test("'eq' operator", () => {
  const p = {
    value: 'another',
    operator: 'eq',
  };

  expect(testPredicate(p, 'another')).toBe(true);
  expect(testPredicate(p, 'hanz')).toBe(false);
});

test("'neq' operator", () => {
  const p = {
    value: 'another',
    operator: 'neq',
  };

  expect(testPredicate(p, 'another')).toBe(false);
  expect(testPredicate(p, 'hanz')).toBe(true);
  expect(testPredicate(p, '')).toBe(true);
});

test("'lt' operator", () => {
  const p = {
    value: '1.23',
    operator: 'lt',
  };

  expect(testPredicate(p, '1.4')).toBe(false);
  expect(testPredicate(p, '1.1')).toBe(true);
  expect(testPredicate(p, 1.1)).toBe(true);
});

test("'gt' operator", () => {
  const p = {
    value: '1.23',
    operator: 'gt',
  };

  expect(testPredicate(p, 231)).toBe(true);
  expect(testPredicate(p, '1.4')).toBe(true);
  expect(testPredicate(p, '1.1')).toBe(false);
  expect(testPredicate(p, 1.1)).toBe(false);
});

test("'regex' operator", () => {
  const p = {
    value: '/[a-zA-Z-].1$/',
    operator: 'regex',
  };

  expect(testPredicate(p, 'another.1')).toBe(true);
  expect(testPredicate(p, 'simple-thing.1')).toBe(true);
  expect(testPredicate(p, 'another')).toBe(false);
  expect(testPredicate(p, 1.1)).toBe(false);
});
