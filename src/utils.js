import * as numeral from 'numeral';

export const getDiff = (current, previous) => (1.0 - previous / current);
export const getFormattedDiff = (current, previous) => numeral(getDiff(current, previous)).format('+0%');
export const isImprovement = (current, previous) => (getDiff(current, previous) >= 0);
