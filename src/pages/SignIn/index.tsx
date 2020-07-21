import React from 'react';
import { Box, Button, Grid, FormControl, InputLabel, Input } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ReactComponent as SignInBG } from '../../assets/images/signin_bg.svg'
import { useResponsive } from '../../hooks/useResponsive';

const SignIn: React.FC = () => {

  const responsive = useResponsive(528);

  const theme = useTheme();
  console.log(theme);

  return (
    <Box display="flex" height="100vh">
      <Box bgcolor="#00BFA6" flex={1} padding="4rem" style={{
        display: responsive ? "none" : "flex"
      }} flexDirection="column" justifyContent="center" >
        <Box display="flex" flexDirection="column" alignItems="flex-end" padding="4rem"  >
          <h1 style={{
            fontSize: '3rem',
            color: "#fff",
            margin: 0
          }}>SEU JOB</h1>
          <h2 style={{
            color: "#fff",
            fontSize: '2rem',
            fontWeight: "normal"
          }}>Encontre a vaga perfeita para você!</h2>

        </Box>
        <SignInBG width="100%" />
      </Box>
      <Box justifyContent="center"

        maxWidth={responsive ? "100%" : "20rem"} padding="1rem 2rem" display="flex" flexDirection="column" height="100%">
        <Grid container spacing={3} style={{
          boxShadow: responsive ? theme.palette.type === "dark" ? "0px 4px 15px rgba(90,90,90,.1)" : "0px 4px 15px rgba(0,0,0,.1)" : "",
          backgroundColor: responsive ? theme.palette.background.paper : theme.palette.background.default,
          padding: responsive ? "2rem .5rem" : "",
          borderRadius: '.5rem'
        }
        }

        >
          <Grid item md={12} xs={12}>
            <h1 style={{ textAlign: "center", color: "#00BFA6" }}>LOGIN</h1>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input
                autoFocus
                id="email"
                autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
              />
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button size="large" fullWidth variant="contained" color="primary">Entrar</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;