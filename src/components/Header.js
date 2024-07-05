import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Airports
        </Typography>
        <Button variant="contained" color="primary">+ Add new</Button>
        <Avatar alt="User" src="/static/images/avatar/1.jpeg" style={{ marginLeft: '20px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;