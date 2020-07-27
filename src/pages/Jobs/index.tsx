import React, { useState } from 'react';
import { Box, Grid, Avatar, Button, useTheme, TextField, InputAdornment, Drawer, Chip } from '@material-ui/core';
import { Search, AttachMoney, Assignment, LocationOn } from '@material-ui/icons'
type Job = {
  id: number;
  title: string;
  description: string;
  company: {
    id: number;
    avatar_url: string;
  }
}

const jobs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


const Jobs: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  function onClose () {
    setIsOpen(false)
  }

  const theme = useTheme()
  return <Box display="flex" flexDirection="column" >
    <Box flex="1" display="flex" justifyContent="space-between" alignItems="center">
      <h1 style={{ color: theme.palette.primary.main }}>Vagas</h1>
      <TextField
        id="standard-start-adornment"
        placeholder="Pesquisar"
        InputProps={{
          startAdornment: <InputAdornment position="start"><Search color="primary" /></InputAdornment>,
        }}
      />
    </Box>
    <Box  >
      <Grid container spacing={2}>
        {jobs.map(job => (
          <Grid item xl={3} lg={4} md={6} key={job}>
            <Box style={{
              // border: '1px solid #ccc',
              boxSizing: 'border-box',
              boxShadow: theme.palette.type === "dark" ? "0px 4px 15px rgba(0,0,0,.30)" : "0px 1px 10px rgba(0, 0, 0, 0.10)",
              borderRadius: '4px',
              padding: '1rem 1.5rem',
              display: 'flex',
              flexDirection: "column",
            }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <h2 style={{ color: theme.palette.primary.main }}>Analista de Sistemas Jr.</h2>
                <Avatar src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0.png" alt="Company Logo" style={{
                  width: '3.5rem',
                  height: '3.5rem'
                }} />
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">
                <Box display="flex" alignItems="flex-end" justifyContent="center">
                  <AttachMoney style={{
                    fontSize: '1.50rem', color: theme.palette.primary.main
                  }} />
                  <span> R$: 3k à 5k</span>
                </Box>
                <Box display="flex" alignItems="flex-end">
                  <Assignment style={{
                    fontSize: '1.50rem', color: theme.palette.primary.main
                  }} />
                  <span> CLT</span>
                </Box>
                <Box display="flex" alignItems="flex-end">
                  <LocationOn style={{
                    fontSize: '1.50rem', color: theme.palette.primary.main
                  }} />
                  <span> São Paulo, Brasil</span>
                </Box>

              </Box>
              <Box>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare lectus lacus, morbi sed venenatis mi urna, ullamcorper felis. At enim tellus ut sed sit feugiat imperdiet convallis. Mi varius sapien porta massa mi. Venenatis amet, bibendum egestas vitae porttitor neque, sit augue turpis.</p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Chip
                  color="primary"
                  label={"React"}
                />
                <Chip
                  color="primary"
                  label={"Javascript"}
                />
                <Chip
                  color="primary"
                  label={"Nodejs"}
                />
                <Chip
                  color="primary"
                  label={"MongoDB"}
                />


              </Box>
              <Box display="flex" justifyContent="space-between" margin="2rem 0">
                <Button color="primary" variant="outlined" size="large" onClick={() => setIsOpen(true)}>
                  Detalhes
              </Button>
                <Button color="primary" variant="contained" size="large" >Candidatar-SE</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Drawer anchor={'right'} open={isOpen} onClose={onClose} >
      <Box display="flex" justifyContent="flex-end" padding="1rem 2rem">
        <Button size="small" variant="contained" color="secondary" onClick={onClose} >X</Button>
      </Box>
      <Box display="flex" flexDirection="column" padding="1rem 2rem" maxWidth="30rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 style={{ color: theme.palette.primary.main, marginRight: '2rem' }}>Analista de Sistemas Jr.</h2>
          <Avatar src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0.png" alt="Company Logo" style={{
            width: '3.5rem',
            height: '3.5rem'
          }} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">
          <Box display="flex" alignItems="flex-end" justifyContent="center">
            <AttachMoney style={{
              fontSize: '1.50rem', color: theme.palette.primary.main
            }} />
            <span> R$: 3k à 5k</span>
          </Box>
          <Box display="flex" alignItems="flex-end">
            <Assignment style={{
              fontSize: '1.50rem', color: theme.palette.primary.main
            }} />
            <span> CLT</span>
          </Box>
          <Box display="flex" alignItems="flex-end">
            <LocationOn style={{
              fontSize: '1.50rem', color: theme.palette.primary.main
            }} />
            <span> São Paulo, Brasil</span>
          </Box>

        </Box>
        <Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare lectus lacus, morbi sed venenatis mi urna, ullamcorper felis. At enim tellus ut sed sit feugiat imperdiet convallis. Mi varius sapien porta massa mi. Venenatis amet, bibendum egestas vitae porttitor neque, sit augue turpis.</p>
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Chip
            color="primary"
            label={"React"}
          />
          <Chip
            color="primary"
            label={"Javascript"}
          />
          <Chip
            color="primary"
            label={"Nodejs"}
          />
          <Chip
            color="primary"
            label={"MongoDB"}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <h2 style={{ margin: '1rem 0 0 0', color: theme.palette.primary.main }}>Requsítos</h2>
          <ul>
            <li>Mínimo de 2 anos de experiência com React</li>
            <li>Dominío de OOP</li>
            <li>Pró-ativo</li>
            <li>Inglês Avançado</li>
            <li>Conhecimento profundo em boas práticas de programação e Clean Code</li>
          </ul>
        </Box>
        <Box display="flex" flexDirection="column">
          <h2 style={{ margin: '1rem 0 0 0', color: theme.palette.primary.main }}>Benefícios</h2>
          <ul>
            <li>VR (R$ 660,00)</li>
            <li>Assistência Médica (Sul América)</li>
            <li>Assistência Odontológica (Porto Seguro)</li>
            <li>PLR</li>
            <li>GymPass</li>
          </ul>
        </Box>


        <Box display="flex">
          <Button fullWidth size="large" color="primary" variant="contained">Candidatar-se</Button>
        </Box>
      </Box>
    </Drawer>
  </Box>
}

export default Jobs;