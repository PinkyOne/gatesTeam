import { getFormattedDiff, isImprovement } from '../../../../utils';

export const titleInfo = (title, current, previous, positiveIcon, negativeIcon) => ({
  isImprovement: isImprovement(current, previous),
  icon:
    isImprovement(current, previous)
      ? positiveIcon
      : negativeIcon,
  title,
  titleDiff: getFormattedDiff(current, previous),
});

export const mainInfo = (current, previous, currentPeriod, previousPeriod) => ({
  currentInfoValue: current || 'No Data',
  previousInfoValue: previous || 'No Data',
  currentInfoLabel: currentPeriod,
  previousInfoLabel: previousPeriod,
});
