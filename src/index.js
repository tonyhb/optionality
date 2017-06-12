// @flow

import type { Predicate } from './types';

const stringToRegexp = (str: string): RegExp => {
  const pos = str.lastIndexOf('/');
  return new RegExp(str.slice(1, pos), str.slice(pos + 1));
}

/**
 * testPredicate takes an operator (defined in src/types.js) and asserts
 * whether the the given input matches the predicate operator/value.
 */
const testPredicate = (p: Predicate, input: string): boolean => {
  switch (p.operator) {
    case 'in':
      return p.value.indexOf(input) > -1;
    case 'nin':
      return p.value.indexOf(input) === -1;
    case 'eq':
      return p.value === input;
    case 'neq':
      return p.value !== input;
    case 'lt':
      return parseFloat(p.value) > parseFloat(input);
    case 'gt':
      return parseFloat(p.value) < parseFloat(input);
    case 'regex':
      return stringToRegexp(p.value).test(input);
  }
  return true;
}

export default testPredicate;
