import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SecondaryTypography from '../../../SecondaryTypography';

const AdditionalInfo = ({
  primaryInfo,
  secondaryInfo,
  helpLinks = [],
}) => (
  <div className="AdditionalInfo">
    {
      typeof primaryInfo === 'string'
        ? <Typography variant="subtitle1" gutterBottom>{primaryInfo}</Typography>
        : primaryInfo
    }
    <SecondaryTypography variant="subtitle2" gutterBottom>{secondaryInfo}</SecondaryTypography>
    <div className="AdditionalInfo-HelpLinks">
      <Typography variant="subtitle2" inline>Help: </Typography>
      {helpLinks.map(({ label, link }, index) => (
        <div key={link} className="AdditionalInfo-HelpLinks-Item">
          <Link variant="subtitle2" href={link}>
            {label}
          </Link>
          {index !== helpLinks.length - 1 && <Typography variant="subtitle2" inline>,</Typography>}
        </div>
      ))}
    </div>
  </div>
);

export default AdditionalInfo;
