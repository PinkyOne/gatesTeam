import React from 'react';
import * as numeral from 'numeral';

import Card from '../Card/index';
import { mainInfo, titleInfo } from '../Card/utils';

import { ReactComponent as ClickGreen } from './assets/ClickGreen.svg';
import { ReactComponent as ClickRed } from './assets/ClickRed.svg';
import { GreenTypography, RedTypography } from '../Card/components/SecondaryTypography/index';

const formatCtr = ctr => numeral(ctr / 100).format('0[.0]%');

const additionalInfo = ctr => ({
  primaryInfo:
  (typeof ctr === 'number'
    && (ctr >= 1
      ? <GreenTypography variant="subtitle1">{`CTR: ${formatCtr(ctr)}`}</GreenTypography>
      : <RedTypography variant="subtitle1">{`CTR: ${formatCtr(ctr)}`}</RedTypography>))
  || 'CTR: No Data',

  secondaryInfo: 'Conversion from searches  to clicks on all devices.',
  helpLinks: [
    { link: '/ctr', label: 'CTR' },
    { link: '/clicks', label: 'Clicks' },
  ],
});

const Clicks = ({
  clicksCurrent,
  clicksPrevious,
  currentPeriod,
  previousPeriod,
  ctr,
}) => (
  <Card
    {...titleInfo('Clicks', clicksCurrent, clicksPrevious, <ClickGreen />, <ClickRed />)}
    {...mainInfo(clicksCurrent, clicksPrevious, currentPeriod, previousPeriod)}
    {...additionalInfo(ctr)}
    withArrow
  />
);

export default Clicks;
