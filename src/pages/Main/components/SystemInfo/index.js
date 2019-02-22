import React, { Component } from 'react';
import * as numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import SecondaryTypography from '../../../../components/Card/components/SecondaryTypography';

import './index.css';

const COLORS = [
  '#FFCC00', '#5856D5', '#2196F3',
];
const COLOR_GREY = '#A0B0B9';

class SystemInfo extends Component {
  formattedStatistics = () => {
    const {
      props: {
        statistics,
      },
    } = this;
    const formatFunc = value => numeral(value).format('0.000%');

    return Object.keys(statistics)
      .reduce((acc, key) => ({
        ...acc,
        [key]: statistics[key] && formatFunc(statistics[key]),
      }), {});
  };

  renderStatistics = () => {
    const {
      errors, avgErrors, zeroes, avgZeroes, timeout, avgTimeout,
    } = this.formattedStatistics();
    return (
      <div className="Statistics">
        <div className="Statistics-Item">
          <Typography variant="h5">{`Errors: ${errors || 'No Data'}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgErrors || 'No Data'}`}</SecondaryTypography>
        </div>
        <div className="Statistics-Item">
          <Typography variant="h5">{`Zeroes: ${zeroes || 'No Data'}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgZeroes || 'No Data'}`}</SecondaryTypography>
        </div>
        <div className="Statistics-Item">
          <Typography variant="h5">{`Timeouts: ${timeout || 'No Data'}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgTimeout || 'No Data'}`}</SecondaryTypography>
        </div>
      </div>
    );
  };

  renderGraph = () => {
    const {
      errors = [],
    } = this.props;

    if (!errors.length) {
      return (<div className="Graph" />);
    }

    const errorsCount = errors.reduce((acc, cur) => acc + cur.count, 0);
    const sortedErrors = errors.filter(error => error.code).sort((x, y) => y.count - x.count);
    const unknownErrorsCount = [errors.find(error => !error.code), ...sortedErrors.slice(3)]
      .reduce((acc, cur) => acc + cur.count, 0);

    return (
      <div className="Graph">
        <div className="Graph-Line">
          {sortedErrors
            .slice(0, 3)
            .map(({ count }, index) => (
              this.renderGraphLineChunk({ index, count, totalCount: errorsCount })
            ))
          }
          {this.renderGraphLineChunk({ count: unknownErrorsCount, totalCount: errorsCount })}
        </div>
        <div className="Graph-Description">
          {sortedErrors
            .slice(0, 3)
            .map(({ code, count }, index) => (
              this.renderGraphDescItem({ code, count, index })
            ))
          }
          {this.renderGraphDescItem({ count: unknownErrorsCount })}
        </div>
      </div>
    );
  };

  renderGraphLineChunk = ({ index = null, count, totalCount }) => (
    <div
      style={{
        backgroundColor: index === null ? COLOR_GREY : COLORS[index % COLORS.length],
        width: `${(count * 100 / totalCount)}%`,
      }}
    />
  );

  renderGraphDescItem = ({ code = null, count, index = null }) => (
    <div
      className="Graph-Description-Item"
    >
      <div
        className="Graph-Description-Item-Indicator"
        style={{ backgroundColor: index === null ? COLOR_GREY : COLORS[index % COLORS.length] }}
      />
      <Typography variant="h6">{`${code ? `Error ${code}` : 'Other'}: ${count}`}</Typography>
    </div>
  );


  render() {
    return (
      <div className="Container">
        {this.renderStatistics()}
        {this.renderGraph()}
      </div>
    );
  }
}

export default SystemInfo;
