import React, { useState } from 'react';
import { Box, Button, Grid, FormControl, InputLabel, Input, Checkbox, FormControlLabel, Link, Switch, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useResponsive } from '../../hooks/useResponsive';
import Logo from '../../components/Logo';
import SignInBG from '../../components/SignInBG';
import { useThemeUpdate, useTheme as useThemeDarkMode } from '../../context/ThemeContext';
import history from '../../services/history';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { RootState } from '../../types/state';


const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const responsive = useResponsive(528);
  const theme = useTheme();
  const darkMode = useThemeDarkMode()
  const toggleTheme = useThemeUpdate()

  const [email, setEmail] = useState('vmmm@gmail.com')
  const [password, setPassword] = useState('123456')

  const { loading } = useSelector((state: RootState) => state.auth)

  function handleSubmit () {
    dispatch(signInRequest(email, password))
  }

  return (
    <Box display="flex" height="100vh">
      <Box bgcolor={theme.palette.primary.main} flex={1} padding="4rem" style={{
        display: responsive ? "none" : "flex"
      }} flexDirection="column" justifyContent="space-between" flexWrap="wrap" >
        <Box display="flex" flexDirection="column" alignItems="flex-end" paddingRight="4rem" >
          <Box display="flex" alignItems="center">
            <Logo color={theme.palette.background.default} />
            <h1 style={{
              fontSize: '2.5rem',
              color: theme.palette.background.default,
              margin: 0,
              marginLeft: '1rem'
            }}>SEU JOB</h1>
          </Box>
          <h2 style={{
            color: theme.palette.background.default,
            fontSize: '2rem',
            fontWeight: "normal",
            margin: 0,
            marginTop: '1rem'
          }}>Encontre a vaga perfeita para você!</h2>

        </Box>
        <SignInBG />
        <Box display="flex" justifyContent="center">
          <h2 style={{
            color: theme.palette.background.default,
            fontWeight: "normal",
            margin: 0,
            // marginTop: '1rem'
          }}>
            Todos direitos reservados &copy; 2020
          </h2>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="flex-end">
          <Switch checked={darkMode} color="primary" onChange={toggleTheme} size="medium" />
        </Box>

        <Box justifyContent="center"
          boxShadow={theme.palette.type === "dark" ? "0px 20px 15px rgba(90,90,90,.1)" : "0px 20px 15px rgba(0,0,0,.1)"}
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
              <Box display="flex" justifyContent="center">
                <Logo color={theme.palette.primary.main} />
              </Box>
            </Grid>
            <Grid item md={12} xs={12}>
              <h1 style={{ textAlign: "center", color: theme.palette.primary.main }}>LOGIN</h1>
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  id="email"
                  autoComplete="off"
                />
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="password">Senha</InputLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                />
              </FormControl>
            </Grid>

            <Grid item md={12} xs={12}>
              <FormControlLabel
                control={<Checkbox color={"primary"} checked name="rember" />}
                label="Lembrar de mim?"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Button size="large" onClick={handleSubmit} fullWidth variant="contained" color="primary">
                {loading ? <CircularProgress color="inherit" size="1.65rem" /> : "Entrar"}
              </Button>
            </Grid>
            <Grid item md={12} xs={12}>
              <Link style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%' }} component="button"
                variant="body2"> Esqueceu sua sennha?</Link>
            </Grid>
            <Grid item md={12} xs={12}>
              <Link onClick={() => history.push('/signup')} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%' }} component="button"
                variant="body1">Criar conta</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;