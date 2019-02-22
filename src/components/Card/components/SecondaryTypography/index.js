import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (color = null) => ({
  root: {
    color: color || '#A0B0B9',
  },
});

const SecondaryTypography = withStyles(styles())(Typography);

export const RedTypography = withStyles(styles('#FF6A67'))(Typography);
export const GreenTypography = withStyles(styles('#8BC34A'))(Typography);

export default SecondaryTypography;
