import React from 'react';
import { Box, useTheme, Avatar, List, ListItem, ListItemIcon } from '@material-ui/core';
import { List as ListIcon, Description, Chat, ExitToApp } from '@material-ui/icons'
import history from '../../services/history';
const Nav: React.FC = () => {
  const theme = useTheme()

  const routes = [
    { path: '/jobs', icon: () => <ListIcon style={{ fontSize: '2rem', color: theme.palette.type === "dark" ? theme.palette.primary.main : '#fff' }} /> },
    { path: '/profile', icon: () => <Description style={{ fontSize: '2rem', color: theme.palette.type === "dark" ? theme.palette.primary.main : '#fff' }} /> },
    { path: '/chat', icon: () => <Chat style={{ fontSize: '2rem', color: theme.palette.type === "dark" ? theme.palette.primary.main : '#fff' }} /> },
  ]


  return <Box width="120px" height="100vh" bgcolor={theme.palette.type === "dark" ? theme.palette.background.paper : theme.palette.primary.main}>
    <Box display="flex" flexDirection="column" padding="1rem 0" justifyContent="space-between" alignItems="center" height="100%">
      <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        style={{
          width: '4rem',
          height: '4rem'
        }} />
      <Box justifySelf="center" alignSelf="center" style={{ width: "100%" }}>
        <List component="ul">
          {routes.map(route => (
            <ListItem
              disableGutters
              key={route.path}
              button
              component="li"
              onClick={() => history.push(route.path)}
              style={{ padding: '1rem 0', borderLeft: history.location.pathname === route.path ? `4px solid ${theme.palette.type === "dark" ? theme.palette.primary.main : '#fff'}` : '4px solid transparent', width: '100% !important' }}>
              <ListItemIcon style={{ display: 'flex', width: '100%', justifyContent: "center", margin: 0, padding: '0 2.2rem' }}>
                {route.icon()}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box justifySelf="center" alignSelf="center" style={{ width: "100%" }}>
        <List component="ul">
          <ListItem component="li" onClick={() => alert('Saindo....')} button style={{ margin: '1.5rem 0 0 0' }}>
            <ListItemIcon style={{ display: 'flex', width: '100%', justifyContent: "center", margin: 0, padding: 0 }}>
              <ExitToApp style={{ fontSize: '2rem', color: theme.palette.type === "dark" ? theme.palette.primary.main : '#fff' }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  </Box>;
}

export default Nav;