import React, { useState, useEffect } from 'react'
import { Box, Grid, Avatar, Button, useTheme, TextField, InputAdornment, Drawer, Chip, CircularProgress } from '@material-ui/core'
import { Search, AttachMoney, Assignment, LocationOn } from '@material-ui/icons'
import { API } from '../../services/api'

type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  company: {
    id: number;
    name: string;
    image_url: string;
  }
}

const Jobs: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  function onClose () {
    setIsOpen(false)
  }

  useEffect(() => {
    API.get('/jobs').then(({ data }) => {
      setJobs(data.data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const theme = useTheme()
  return <Box display="flex" flexDirection="column" >
    <Box flex="1" display="flex" justifyContent="space-between" alignItems="center">
      <h1 style={{ color: theme.palette.primary.main, margin: '1rem 0' }}>Vagas</h1>
      <TextField
        id="standard-start-adornment"
        placeholder="Pesquisar"
        InputProps={{
          startAdornment: <InputAdornment position="start"><Search color="primary" /></InputAdornment>
        }}
      />
    </Box>
    {loading ? <Box display="flex" height="100%" minHeight="75vh" justifyContent="center" alignItems="center">
      <CircularProgress color="primary" size="6rem" />
    </Box> : (
      <Box >
        <Grid container spacing={2}>
          {jobs.map(job => (
            <Grid style={{

            }} item xl={3} lg={4} md={6} key={job.id}>
              <Box style={{
                // border: '1px solid #ccc',
                boxSizing: 'border-box',
                boxShadow: theme.palette.type === 'dark' ? '0px 4px 15px rgba(0,0,0,.30)' : '0px 1px 10px rgba(0, 0, 0, 0.10)',
                borderRadius: '4px',
                padding: '1rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '94vw'
              }}>
                <Box display="flex" justifyContent="space-between" maxWidth="100%" alignItems="center">
                  <span style={{
                    color: theme.palette.primary.main,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textTransform: 'capitalize'
                  }}>{job.title.toLocaleLowerCase()}</span>
                  <Avatar src={job.company.image_url} alt={job.company.name} style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    OObjectFit: 'fill',
                    marginLeft: '1rem'
                  }} />
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">

                  <Box display="flex" alignItems="flex-end">
                    <Assignment style={{
                      fontSize: '1.50rem', color: theme.palette.primary.main
                    }} />
                    <span>{job.type}</span>
                  </Box>
                  <Box display="flex" alignItems="flex-end" maxWidth="70%">
                    <LocationOn style={{
                      fontSize: '1.50rem', color: theme.palette.primary.main
                    }} />
                    <span style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>{job.location}</span>
                  </Box>

                </Box>
                <Box>
                  <p style={{
                    height: '10rem',
                    width: '100%',
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{job.description}</p>
                </Box>
                {/* <Box display="flex" justifyContent="space-between">
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

                  </Box> */}
                <Box display="flex" justifyContent="space-between" margin="1rem 0">
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
    )}
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
            label={'React'}
          />
          <Chip
            color="primary"
            label={'Javascript'}
          />
          <Chip
            color="primary"
            label={'Nodejs'}
          />
          <Chip
            color="primary"
            label={'MongoDB'}
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

export default Jobs
