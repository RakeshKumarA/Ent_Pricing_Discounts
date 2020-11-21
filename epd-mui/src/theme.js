import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#109CF1',
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
});

export default theme;
