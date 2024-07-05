import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd' }}>
      <h2>hava havai</h2>
      <List>
        <ListItem button>
          <HomeIcon />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <DashboardIcon />
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
      <Divider />
      <h3>Services</h3>
      <List>
        <ListItem button>
          <ListItemText primary="Airports" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Videos" />
        </ListItem>
      </List>
      <Divider />
      <h3>Others</h3>
      <List>
        <ListItem button>
          <ListItemText primary="List 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="List 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="List 3" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;