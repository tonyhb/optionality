export type PredicateOperatorEq = 'eq';
export type PredicateOperatorNeq = 'neq';
export type PredicateOperatorIn = 'in';
export type PredicateOperatorNin = 'nin';
export type PredicateOperatorLt = 'lt';
export type PredicateOperatorGt = 'gt';
export type PredicateOperatorRegex = 'regex';
export type PredicateOperator = PredicateOperatorEq |
  PredicateOperatorNeq |
  PredicateOperatorIn |
  PredicateOperatorNin |
  PredicateOperatorLt |
  PredicateOperatorLt |
  PredicateOperatorRegex;

export type Predicate = {
  value: string | Array<string>,
  operator: PredicateOperator,
};
