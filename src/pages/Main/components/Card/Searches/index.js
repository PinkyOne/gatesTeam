import React from 'react';
import * as numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import Card from '../index';
import { getFormattedDiff, isImprovement } from '../../../../../utils';
import { ReactComponent as FilterGreen } from './assets/FilterGreen.svg';
import { ReactComponent as FilterRed } from './assets/FilterRed.svg';

const formatTraffic = traffic => numeral(traffic / 100).format('0%');

const Searches = ({
  searchesCurrent,
  searchesPrevious,
  currentPeriod,
  previousPeriod,
  mobilePessimizer,
  webPessimizer,
}) => (
  <Card
    isImprovement={isImprovement(searchesCurrent, searchesPrevious)}
    icon={isImprovement(searchesCurrent, searchesPrevious) ? <FilterGreen /> : <FilterRed />}
    title="Searches"
    titleDiff={getFormattedDiff(searchesCurrent, searchesPrevious)}
    currentInfoValue={searchesCurrent || 'No Data'}
    previousInfoValue={searchesPrevious || 'No Data'}
    currentInfoLabel={currentPeriod}
    previousInfoLabel={previousPeriod}
    primaryInfo={(
      <React.Fragment>
        <Typography variant="subtitle1">
          {`Mobile traffic: ${mobilePessimizer ? formatTraffic(mobilePessimizer) : 'No Data'}`}
        </Typography>
        <Typography variant="subtitle1">
          {`Web traffic: ${webPessimizer ? formatTraffic(webPessimizer) : 'No Data'}`}
        </Typography>
      </React.Fragment>
)}
    secondaryInfo={(
      webPessimizer
      && mobilePessimizer
      && `You get ${formatTraffic(webPessimizer + mobilePessimizer)} traffic on mobile and desktop devices.`)
      || 'No Data'}
    helpLinks={[
      { link: '/searches', label: 'Searches' },
      { link: '/pessimisation', label: 'Pessimisation' },
    ]}
    withArrow
  />
);

export default Searches;
