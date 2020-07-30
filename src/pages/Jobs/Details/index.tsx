import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Box, Button, useTheme, CircularProgress } from '@material-ui/core'
import { Assignment, LocationOn } from '@material-ui/icons'
import { API } from '../../../services/api'

type DetailsProps = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

type Job = {
  id: number;
  title: string;
  descriptions: [{
    title: string;
    value: string;
  }];
  location: string;
  type: string;
  company: {
    id: number;
    name: string;
    image_url: string;
  }
}

const Details: React.FC<DetailsProps> = ({ id, isOpen, onClose }) => {
  const theme = useTheme()
  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState<Job>()

  useEffect(() => {
    if (id > 0) {
      setLoading(true)
      API.get(`jobs/${id}`).then(({ data }) => {
        setJob(data)
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [id])

  return <Drawer anchor={'right'} open={isOpen} onClose={onClose} >
    <Box display="flex" justifyContent="flex-end" padding="1rem 2rem" maxWidth="30rem" minWidth="30rem">
      <Button size="small" variant="contained" color="secondary" onClick={onClose} >X</Button>
    </Box>
    {loading ? (<Box display="flex" height="100%" justifyContent="center" alignItems="center">
      <CircularProgress color="primary" size="6rem" />
    </Box>) : (<>

      <Box display="flex" flexDirection="column" padding="1rem 2rem" maxWidth="30rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 style={{ color: theme.palette.primary.main, marginRight: '2rem' }}>{job?.title}</h2>
          <img src={job?.company.image_url} alt={job?.company.name} style={{
            width: '5rem',

            OObjectFit: 'contain'
          }} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">

          <Box display="flex" alignItems="flex-end">
            <Assignment style={{
              fontSize: '1.50rem', color: theme.palette.primary.main
            }} />
            <span>{job?.type}</span>
          </Box>
          <Box display="flex" alignItems="flex-end">
            <LocationOn style={{
              fontSize: '1.50rem', color: theme.palette.primary.main
            }} />
            <span>{job?.location}</span>
          </Box>

        </Box>

        <Box display="flex" flexDirection="column">
          {job?.descriptions?.map(description => (
            <Box key={description.title}>
              <h2 style={{ margin: '1rem 0 0 0', color: theme.palette.primary.main }}>{description.title}</h2>
              <p>{description.value}</p>
            </Box>
          ))}

          <Box display="flex">
            <Button fullWidth size="large" color="primary" variant="contained">Candidatar-se</Button>
          </Box>
        </Box>
      </Box>
    </>)}
  </Drawer>
}

Details.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Details
