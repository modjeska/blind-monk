import * as React from 'react';
import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Experience from '../../assets/misc/resume.pdf'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const ResponsiveAppBar = ({pageState, setPageState}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleOpenAbout = () => {
    setPageState({...pageState, about: true, works: false, contact: false,})
  }

  const handleOpenWorks = () => {
    setPageState({...pageState, about: false, works: true, contact: false,})
  }
  
  const handleOpenContact = () => {
    setPageState({...pageState, about: false, works: false, contact: true,})
  }

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
           >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleOpenAbout}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenWorks}>
                  <Typography textAlign="center">Works</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenContact}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href={Experience} rel="noreferrer" target="_blank">
                  <Typography textAlign="center">Experience</Typography>
                  </Button>
                </MenuItem>

            </Menu>
          </Box>
          <SentimentSatisfiedAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button

                onClick={handleOpenAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Button

                onClick={handleOpenWorks}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Works
              </Button>
              <Button

                onClick={handleOpenContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>

              <Button href={Experience} rel="noreferrer" target="_blank"

                onClick={handleCloseNavMenu}
                sx={{ textDecoration: 'none', my: 2, color: 'white', display: 'block' }}
              >
                Experience
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;