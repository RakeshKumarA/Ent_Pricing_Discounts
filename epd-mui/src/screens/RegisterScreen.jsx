import React from 'react';
import Grid from '@material-ui/core/Grid';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, Button } from '@material-ui/core';
import mainimage from '../images/mainimage.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  loginContainer: {
    height: '100vh',
  },
  iconStyle: {
    fontSize: '72px',
  },
  homeImage: {
    backgroundImage: `url(${mainimage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    height: '100vh',
    opacity: 0.1,
  },
  noAccount: {
    marginTop: '10vh',
  },
  registerButton: {
    marginTop: '2vh',
  },
  linkdeco: {
    textDecoration: 'none',
  },
});

const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={7} className={classes.homeImage} />
      <Grid item xs={1} sm={1} />
      <Grid
        item
        xs={10}
        sm={3}
        container
        direction="column"
        justify="center"
        className={classes.loginContainer}
        spacing={2}
      >
        <Grid item container spacing={2}>
          <Grid item>
            <FingerprintOutlinedIcon className={classes.iconStyle} />
          </Grid>
          <Grid item>
            <Typography variant="h5" color="initial">
              Enterprice Pricing
            </Typography>
            <Typography variant="h5" color="initial">
              and Discounts
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3" color="initial">
            Sign up
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            fullWidth="true"
          />
        </Grid>
        <Grid item>
          <TextField id="standard-basic" label="Country" fullWidth="true" />
        </Grid>
        <Grid item>
          <TextField id="standard-basic" label="Role" fullWidth="true" />
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Reason for Access"
            fullWidth="true"
          />
        </Grid>
        <Grid item className={classes.registerButton}>
          <Button variant="contained" color="primary" fullWidth="true">
            Register
          </Button>
        </Grid>
        <Grid item container className={classes.noAccount}>
          <Typography variant="subtitle2" color="initial">
            Do you have an account?{' '}
            <Link to="/" className={classes.linkdeco}>
              Sign in
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={1} />
    </Grid>
  );
};

export default RegisterScreen;
