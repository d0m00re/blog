import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import MuiTypography from './MuiTypographie';
import MuiTextfield from './MuiTextfield';

const theme = createMuiTheme({
  overrides: {
    MuiTypography : MuiTypography,
    MuiTextField: MuiTextfield,
  },
});

export default theme;