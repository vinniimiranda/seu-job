import React from 'react';
import { Box, useTheme, Avatar, List, ListItem, ListItemIcon, Drawer, ListItemText, } from '@material-ui/core';
import {
  List as ListIcon, Description, Chat, ExitToApp,
} from '@material-ui/icons'
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

const Nav: React.FC = () => {
  const dispatch = useDispatch()

  const theme = useTheme()

  const routes = [
    { path: '/jobs', icon: () => <ListIcon style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
    { path: '/profile', icon: () => <Description style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
    { path: '/chat', icon: () => <Chat style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
  ]


  function handleLogout () {
    dispatch(signOut())
  }

  return <Box width="6rem" position="fixed" height="100vh" bgcolor={theme.palette.primary.main}>
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
              style={{ padding: '1rem 0', borderLeft: history.location.pathname === route.path ? `4px solid ${theme.palette.background.default}` : '4px solid transparent', width: '100% !important' }}>
              <ListItemIcon style={{ display: 'flex', width: '100%', justifyContent: "center", margin: 0, padding: '0 2.2rem' }}>
                {route.icon()}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box justifySelf="center" alignSelf="center" style={{ width: "100%" }}>
        <List component="ul">
          <ListItem component="li" onClick={handleLogout} button style={{ margin: '1.5rem 0 0 0' }}>
            <ListItemIcon style={{ display: 'flex', width: '100%', justifyContent: "center", margin: 0, padding: 0 }}>
              <ExitToApp style={{ fontSize: '1.75rem', color: theme.palette.background.default }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  </Box>;
}

type NavResponsiveProps = {
  isOpen: boolean;
  handleClose: () => void;
}

export const NavResponsive: React.FC<NavResponsiveProps> = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch()

  const theme = useTheme()

  const routes = [
    { path: '/jobs', label: "Vagas", icon: () => <ListIcon style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
    { path: '/profile', label: "Currículo", icon: () => <Description style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
    { path: '/chat', label: "Chat", icon: () => <Chat style={{ fontSize: '1.75rem', color: theme.palette.background.default }} /> },
  ]


  function handleLogout () {
    dispatch(signOut())
  }


  return <Drawer anchor="left" open={isOpen} onClose={handleClose}>
    <Box width="60vw" height="100%" bgcolor={theme.palette.primary.main}>

      <Box display="flex" flexDirection="column" padding="1rem 0" justifyContent="space-between" alignItems="center" height="100%">
        <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
          style={{
            width: '4rem',
            height: '4rem'
          }} />
        <Box justifySelf="center" alignItems="center" alignSelf="center" style={{ width: "100%" }}>
          <List component="ul">
            {routes.map(route => (
              <ListItem
                disableGutters
                key={route.path}
                button
                component="li"
                onClick={() => history.push(route.path)}
                style={{ padding: '1rem 0', borderLeft: history.location.pathname === route.path ? `4px solid ${theme.palette.background.default}` : '4px solid transparent', width: '100% !important' }}>
                <ListItemIcon style={{ display: 'flex', justifyContent: "center", margin: 0, padding: '0 2.2rem' }}>
                  {route.icon()}
                </ListItemIcon>
                <ListItemText style={{ color: theme.palette.background.default }}>{route.label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box justifySelf="center" alignSelf="center" style={{ width: "100%" }}>
          <List component="ul">
            <ListItem component="li" onClick={handleLogout} button style={{ margin: '1.5rem 0 0 0' }}>
              <ListItemIcon style={{ display: 'flex', width: '100%', justifyContent: "center", margin: 0, padding: 0 }}>
                <ExitToApp style={{ fontSize: '1.75rem', color: theme.palette.background.default }} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Box>

    </Box>
  </Drawer>

}

export default Nav;