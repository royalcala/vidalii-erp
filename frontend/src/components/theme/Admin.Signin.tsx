import React, { useContext } from 'react';
import Avatar from 'template-core/Avatar';
import Button from 'template-core/Button';
import CssBaseline from 'template-core/CssBaseline';
import TextField from 'template-core/TextField';
import FormControlLabel from 'template-core/FormControlLabel';
import Checkbox from 'template-core/Checkbox';
import Link from 'template-core/Link';
import Grid from 'template-core/Grid';
import Box from 'template-core/Box';
import LockOutlinedIcon from 'template-icons/LockOutlined';
import Typography from 'template-core/Typography';
import { makeStyles } from 'template-core/styles';
import Container from 'template-core/Container';
import { useForm } from 'react-hook-form';
import { UseMutationResult } from 'react-query'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


interface FormData {
  username: string;
  password: string;
}

export default function SignIn(props: { mutation: UseMutationResult<any,any,any> }) {

  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit = handleSubmit(
    async ({ username, password }) => {
      props.mutation.mutate({ email: username, password })
    })
  const classes = useStyles()

  return (
  
    <Container component="main" maxWidth="xs">
        {props.mutation.isLoading && <div>Loading..</div>}
        {props.mutation.isError && <div>Error:Try again</div>}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}