import React from 'react';
import MuiChip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const getChipStyles = isImprovement => ({
  root: {
    background: isImprovement ? '#8BC34A' : '#FF6A67',
    color: '#FFFFFF',
    height: 18,
    marginLeft: 8,
  },
  label: {
    fontWeight: 600,
    lineHeight: 14,
    fontSize: 12,
    margin: '2px 6px',
    padding: 0,
  },
});

const Chip = ({ titleDiff, isImprovement }) => {
  const chipStyles = getChipStyles(isImprovement);
  const StyledChip = withStyles(chipStyles)(MuiChip);
  return !!titleDiff && <StyledChip label={titleDiff} isImprovement={isImprovement} />;
};

export default Chip;
