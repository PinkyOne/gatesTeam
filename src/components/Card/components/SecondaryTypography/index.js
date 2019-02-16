import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#A0B0B9',
  },
};

const SecondaryTypography = withStyles(styles)(Typography);

export default SecondaryTypography;
