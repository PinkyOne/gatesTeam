import * as numeral from 'numeral';

export const getDiff = (current, previous) => (1.0 - previous / current);
export const getFormattedDiff = (current, previous) => ((typeof current === 'number' && typeof previous === 'number')
  ? numeral(getDiff(current, previous)).format('+0%')
  : null);
export const isImprovement = (current, previous) => (getDiff(current, previous) >= 0);
