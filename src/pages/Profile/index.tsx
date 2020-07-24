import React, { useEffect, useCallback, useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Input, FormControlLabel, Checkbox, useTheme } from '@material-ui/core';

const Profile: React.FC = () => {
  const theme = useTheme()
  const [isReady, setIsReady] = useState(true)

  const fetchData = useCallback(
    () => {
      if (isReady) {
        // alert('olá')
        setIsReady(false)
      }
    },
    [isReady],
  )
  useEffect(() => {
    fetchData()

  }, [fetchData])

  return <Box display="flex" flexDirection="column">
    <Box>
      <h1
        style={{
          color: theme.palette.primary.main
        }}
      >
        Currículo
      </h1>
    </Box>
    <Box display="flex" flexDirection="column">
      <h2 style={{
        color: theme.palette.primary.main
      }}>Dados Pessoais</h2>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="name">Nome</InputLabel>
            <Input

              id="name"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="emal">E-mail</InputLabel>
            <Input

              id="emal"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">CPF</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">RG</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={3} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">Data de Nascimento</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
    <Box display="flex" flexDirection="column" marginTop="3rem">
      <h2 style={{
        color: theme.palette.primary.main
      }}>Contato e Endereço</h2>
      <Grid container spacing={2}>
        <Grid item lg={2} md={3} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="name">Logradouro</InputLabel>
            <Input

              id="name"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={1} md={1} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="emal">Número</InputLabel>
            <Input

              id="emal"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={3} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">Bairro</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={3} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">Cidade</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={1} md={1} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">UF</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">Celular</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="document">Telefone</InputLabel>
            <Input

              id="document"
              autoComplete="off"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
    <Box display="flex" flexDirection="column" marginTop="3rem">
      <h2 style={{
        color: theme.palette.primary.main
      }}>Skills</h2>
      <Grid container spacing={2}>
        <Grid item>
          <FormControlLabel
            control={<Checkbox color={"primary"} checked name="rember" />}
            label="Javascript"
          />
        </Grid>
      </Grid>
    </Box>
  </Box>
}

export default Profile;