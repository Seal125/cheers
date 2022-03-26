import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Weekly Chores
          </Typography>
          <Button color='inherit'>Add Chores</Button>
          <Button sx={{ ml: 113 }} color='inherit'>
            Today's Chores
          </Button>
          <Button color='inherit'>Calendar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
