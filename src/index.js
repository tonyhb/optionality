// @flow

import type { Predicate } from './types';

const stringToRegexp = (str: string): RegExp => {
  const pos = str.lastIndexOf('/');
  // $FlowFixMe
  return new RegExp(str.slice(1, pos), str.slice(pos + 1));
}

/**
 * testPredicate takes an operator (defined in src/types.js) and asserts
 * whether the the given input matches the predicate operator/value.
 */
const testPredicate = (p: Predicate, input: string | Array<string>): boolean => {
  switch (p.operator) {
    case 'contains':
      if (Array.isArray(input)) {
        return input.indexOf(p.value) > -1;
      }
      return p.value === input;
    case 'in':
      if (Array.isArray(input) && input.length === 1) {
        return p.value.indexOf(input[0]) > -1;
      }
      return p.value.indexOf(input) > -1;
    case 'nin':
      if (Array.isArray(input) && input.length === 1) {
        return p.value.indexOf(input[0]) === -1;
      }
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
      // only strings can be tested by regex; return false.
      if (Array.isArray(input)) {
        return false;
      }
      return stringToRegexp(p.value).test(input);
  }
  return true;
}

export default testPredicate;
