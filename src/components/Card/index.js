import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SecondaryTypography from './components/SecondaryTypography';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import Chip from './components/Chip';

import './index.css';

class Card extends Component {
  renderMainInfo = () => {
    const {
      title,
      titleDiff,
      isImprovement,
      currentInfoValue,
      previousInfoValue,
      currentInfoLabel,
      previousInfoLabel,
    } = this.props;
    return (
      <div className="MainInfo">
        <div className="MainInfo-Title">
          <Typography variant="h6">{title}</Typography>
          <Chip titleDiff={titleDiff} isImprovement={isImprovement} />
        </div>
        <div className="MainInfo-Current">
          <Typography variant="subtitle1">{currentInfoValue}</Typography>
          <div className="MainInfo-Label"><Typography variant="subtitle1">{currentInfoLabel}</Typography></div>
        </div>
        <div className="MainInfo-Previous">
          <SecondaryTypography variant="subtitle2">{previousInfoValue}</SecondaryTypography>
          <div className="MainInfo-Label"><SecondaryTypography variant="subtitle2">{previousInfoLabel}</SecondaryTypography></div>
        </div>
      </div>
    );
  };

  renderAdditionalInfo = () => {
    const {
      primaryInfo,
      secondaryInfo,
      helpLinks = [],
    } = this.props;
    return (
      <div className="AdditionalInfo">
        {
          typeof primaryInfo === 'string'
            ? <Typography variant="subtitle1" gutterBottom>{primaryInfo}</Typography>
            : primaryInfo
        }
        <SecondaryTypography variant="subtitle2" gutterBottom>{secondaryInfo}</SecondaryTypography>
        <Typography>
          <Typography variant="subtitle2" inline>Help: </Typography>
          {helpLinks.map(({ label, link }, index) => (
            <React.Fragment>
              <Link key={link} variant="subtitle2" href={link}>
                {label}
              </Link>
              {index !== helpLinks.length - 1 && <Typography variant="subtitle2" inline>,</Typography>}
            </React.Fragment>
          ))}
        </Typography>
      </div>
    );
  };

  render() {
    const {
      icon,
      withArrow,
    } = this.props;

    return (
      <div className="Card">
        <div className="Indicators">
          {icon}
          {withArrow && <Arrow />}
        </div>
        {this.renderMainInfo()}
        {this.renderAdditionalInfo()}
      </div>
    );
  }
}

export default Card;
