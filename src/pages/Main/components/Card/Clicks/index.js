import React from 'react';
import * as numeral from 'numeral';
import Card from '../index';
import { getFormattedDiff, isImprovement } from '../../../../../utils';
import { ReactComponent as ClickGreen } from './assets/ClickGreen.svg';
import { ReactComponent as ClickRed } from './assets/ClickRed.svg';
import { GreenTypography, RedTypography } from '../components/SecondaryTypography/index';

const formatCtr = ctr => numeral(ctr / 100).format('0[.0]%');


const Clicks = ({
  clicksCurrent,
  clicksPrevious,
  currentPeriod,
  previousPeriod,
  ctr,
}) => (
  <Card
    isImprovement={isImprovement(clicksCurrent, clicksPrevious)}
    icon={isImprovement(clicksCurrent, clicksPrevious) ? <ClickGreen /> : <ClickRed />}
    title="Clicks"
    titleDiff={getFormattedDiff(clicksCurrent, clicksPrevious)}
    currentInfoValue={clicksCurrent || 'No Data'}
    previousInfoValue={clicksPrevious || 'No Data'}
    currentInfoLabel={currentPeriod}
    previousInfoLabel={previousPeriod}
    primaryInfo={
      (typeof ctr === 'number'
      && (ctr >= 1
        ? <GreenTypography variant="subtitle1">{`CTR: ${formatCtr(ctr)}`}</GreenTypography>
        : <RedTypography variant="subtitle1">{`CTR: ${formatCtr(ctr)}`}</RedTypography>))
      || 'CTR: No Data'
    }
    secondaryInfo="Conversion from searches  to clicks on all devices."
    helpLinks={[
      { link: '/ctr', label: 'CTR' },
      { link: '/clicks', label: 'Clicks' },
    ]}
    withArrow
  />
);

export default Clicks;
