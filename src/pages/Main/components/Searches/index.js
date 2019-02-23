import React from 'react';
import * as numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import Card from '../../../../components/Card/index';
import { ReactComponent as FilterGreen } from './assets/FilterGreen.svg';
import { ReactComponent as FilterRed } from './assets/FilterRed.svg';
import { mainInfo, titleInfo } from '../../../../components/Card/utils';

const formatTraffic = traffic => numeral(traffic / 100).format('0%');

const additionalInfo = (mobilePessimizer, webPessimizer) => ({
  primaryInfo: (
    <React.Fragment>
      <Typography variant="subtitle1">
        {`Mobile traffic: ${mobilePessimizer ? formatTraffic(mobilePessimizer) : 'No Data'}`}
      </Typography>
      <Typography variant="subtitle1">
        {`Web traffic: ${webPessimizer ? formatTraffic(webPessimizer) : 'No Data'}`}
      </Typography>
    </React.Fragment>
  ),
  secondaryInfo: (
    webPessimizer
  && mobilePessimizer
  && `You get ${formatTraffic(webPessimizer + mobilePessimizer)} traffic on mobile and desktop devices.`)
  || 'No Data',
  helpLinks: [
    { link: '/searches', label: 'Searches' },
    { link: '/pessimisation', label: 'Pessimisation' },
  ],
});

const Searches = ({
  searchesCurrent,
  searchesPrevious,
  currentPeriod,
  previousPeriod,
  mobilePessimizer,
  webPessimizer,
}) => (
  <Card
    {...titleInfo('Searches', searchesCurrent, searchesPrevious, <FilterGreen />, <FilterRed />)}
    {...mainInfo(searchesCurrent, searchesPrevious, currentPeriod, previousPeriod)}
    {...additionalInfo(mobilePessimizer, webPessimizer)}
    withArrow
  />
);

export default Searches;
