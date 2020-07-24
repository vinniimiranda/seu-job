import React from 'react';
import { Box, Grid, Avatar, Button, useTheme, TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons'
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
                <h1 style={{ color: theme.palette.primary.main }}>Analista de Sistemas Jr.</h1>
                <Avatar src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0.png" alt="Company Logo" style={{
                  width: '3.5rem',
                  height: '3.5rem'
                }} />
              </Box>
              <Box>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare lectus lacus, morbi sed venenatis mi urna, ullamcorper felis. At enim tellus ut sed sit feugiat imperdiet convallis. Mi varius sapien porta massa mi. Venenatis amet, bibendum egestas vitae porttitor neque, sit augue turpis.</p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <span style={{ color: theme.palette.primary.main }}>
                  #REACT
              </span>
                <span style={{ color: theme.palette.primary.main }}>
                  #JAVASCRIPT
              </span>
                <span style={{ color: theme.palette.primary.main }}>
                  #ELIXIR
              </span>
                <span style={{ color: theme.palette.primary.main }}>
                  #MONGODB
              </span>
              </Box>
              <Box display="flex" justifyContent="space-between" margin="1rem 0">
                <Button color="primary" variant="outlined" size="large">
                  Detalhes
              </Button>
                <Button color="primary" variant="contained" size="large" >Candidatar-SE</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
}

export default Jobs;