import React from 'react';
import { ReactComponent as Arrow } from './assets/Arrow.svg';

import './index.css';
import MainInfo from './components/MainInfo';
import AdditionalInfo from './components/AdditionalInfo';

const Card = ({
  icon,
  withArrow,
  title,
  titleDiff,
  isImprovement,
  currentInfoValue,
  previousInfoValue,
  currentInfoLabel,
  previousInfoLabel,
  primaryInfo,
  secondaryInfo,
  helpLinks,
}) => (
  <div className="Card">
    <div className="Indicators">
      {icon}
      {withArrow && <Arrow />}
    </div>
    <MainInfo {...{
      title,
      titleDiff,
      isImprovement,
      currentInfoValue,
      previousInfoValue,
      currentInfoLabel,
      previousInfoLabel,
    }}
    />
    <AdditionalInfo {...{
      primaryInfo,
      secondaryInfo,
      helpLinks,
    }}
    />
  </div>
);

export default Card;
