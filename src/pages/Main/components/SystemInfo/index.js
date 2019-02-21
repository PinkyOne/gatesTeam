import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SecondaryTypography from '../../../../components/Card/components/SecondaryTypography';

import './index.css';

const COLORS = [
  '#FFCC00', '#5856D5', '#2196F3',
];
const COLOR_GREY = '#A0B0B9';

class SystemInfo extends Component {
  renderStatistics = () => {
    const {
      errors, avgErrors, zeroes, avgZeroes, timeouts, avgTimeouts,
    } = this.props;
    return (
      <div className="Statistics">
        <div className="Statistics-Item">
          <Typography variant="h5">{`Errors: ${errors}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgErrors}`}</SecondaryTypography>
        </div>
        <div className="Statistics-Item">
          <Typography variant="h5">{`Zeroes: ${zeroes}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgZeroes}`}</SecondaryTypography>
        </div>
        <div className="Statistics-Item">
          <Typography variant="h5">{`Timeouts: ${timeouts}`}</Typography>
          <SecondaryTypography variant="h6">{`Average: ${avgTimeouts}`}</SecondaryTypography>
        </div>
      </div>
    );
  };

  renderGraph = () => {
    const {
      errors = [{ count: 100, code: 500 },
        { count: 100, code: 500 },
        { count: 200, code: 501 },
        { count: 300, code: 502 },
        { count: 10, code: 503 },
        { count: 10, code: 504 },
        { count: 20, code: 505 },
        { count: 50, code: 506 },
        { count: 100, code: null }],
    } = this.props;

    if (!errors.length) {
      return (<Typography variant="h6">No data</Typography>);
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
