'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

export default function Header({ isLoggedIn }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter(); 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout functionality here
  };

  const handleNavigation = (path) => {
    if (typeof window !== "undefined") {
      router.push(path);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black', textAlign: isMobile ? 'center' : 'left', }}>
          HelpBot
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
              {!isLoggedIn && (
                <>
                  <MenuItem onClick={() => handleNavigation('/sign-in')}>Login</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/sign-up')}>Sign Up</MenuItem>
                </>
              )}
            </Menu>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              sx={{
                mx: 1,
                color: 'black',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
              }}
              onClick={() => handleNavigation('/')}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                mx: 1,
                color: 'black',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
              }}
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </Button>
            {!isLoggedIn ? (
              <>
                <Button
                  color="inherit"
                  sx={{
                    mx: 1,
                    color: 'black',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                  }}
                  onClick={() => handleNavigation('/sign-in')}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    mx: 1,
                    color: 'black',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                    border: 'none',
                  }}
                  onClick={() => handleNavigation('/sign-up')}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button
                color="inherit"
                sx={{
                  mx: 1,
                  color: 'black',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
