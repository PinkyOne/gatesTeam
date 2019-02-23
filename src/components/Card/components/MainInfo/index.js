import React from 'react';
import Typography from '@material-ui/core/Typography';

import Chip from 'components/Chip';
import SecondaryTypography from 'components/SecondaryTypography';

const MainInfo = ({
  title,
  titleDiff,
  isImprovement,
  currentInfoValue,
  previousInfoValue,
  currentInfoLabel,
  previousInfoLabel,
}) => (
  <div className="MainInfo">
    <div className="MainInfo-Title">
      <Typography variant="h6">{title}</Typography>
      {typeof titleDiff === 'string' && <Chip titleDiff={titleDiff} isImprovement={isImprovement} />}
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

export default MainInfo;
