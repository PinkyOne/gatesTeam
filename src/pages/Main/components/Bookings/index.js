import React from 'react';
import * as numeral from 'numeral';
import Typography from '@material-ui/core/Typography';

import Card from '../../../../components/Card/index';
import { mainInfo, titleInfo } from '../../../../components/Card/utils';

import { ReactComponent as ShoppingCardGreen } from './assets/ShoppingCardGreen.svg';
import { ReactComponent as ShoppingCardRed } from './assets/ShoppingCardRed.svg';

const formatAvgPrice = price => numeral(price).format('0,000');
const formatStr = str => numeral(str / 100).format('0%');

const additionalInfo = (str, avgPrice) => ({
  primaryInfo: (
    <React.Fragment>
      <Typography variant="subtitle1">{`STR: ${str ? formatStr(str) : 'No Data'}`}</Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        {`Avg. Check: ${avgPrice ? formatAvgPrice(avgPrice) : 'No Data'}`}
      </Typography>
    </React.Fragment>
  ),
  secondaryInfo: 'Conversion from clicks  to bookings on all devices.',
  helpLinks: [
    { link: '/str', label: 'STR' },
    { link: '/bookings', label: 'Bookings' },
    { link: '/avg_check', label: 'Avg. Check' },
  ],
});

const Bookings = ({
  bookingsCurrent,
  bookingsPrevious,
  currentPeriod,
  previousPeriod,
  avgPrice,
  str,
}) => (
  <Card
    {...titleInfo('Bookings', bookingsCurrent, bookingsPrevious, <ShoppingCardGreen />, <ShoppingCardRed />)}
    {...mainInfo(bookingsCurrent, bookingsPrevious, currentPeriod, previousPeriod)}
    {...additionalInfo(str, avgPrice)}
  />
);

export default Bookings;
