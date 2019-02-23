import React from 'react';
import { ReactComponent as Arrow } from './assets/Arrow.svg';

import './index.css';
import MainInfo from './components/MainInfo';
import AdditionalInfo from './components/AdditionalInfo';

const Card = ({
  withArrow,
  titleInfo: { icon, ...restTitleInfo },
  mainInfo,
  additionalInfo,
}) => (
  <div className="Card">
    <div className="Indicators">
      {icon}
      {withArrow && <Arrow />}
    </div>
    <MainInfo {...mainInfo} {...restTitleInfo} />
    <AdditionalInfo {...additionalInfo} />
  </div>
);

export default Card;
