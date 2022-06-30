import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PushPinIcon from '@mui/icons-material/PushPin';
import AbcIcon from '@mui/icons-material/Abc';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/char-counter">
      <ListItemIcon>
        <AbcIcon />
      </ListItemIcon>
      <ListItemText primary="Char Counter" />
    </ListItemButton>
    <ListItemButton component={Link} to="/episode-locations">
      <ListItemIcon>
        <PushPinIcon />
      </ListItemIcon>
      <ListItemText primary="Episode Locations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton
      component="a"
      to="https://jsterren.vercel.app"
      target="_blank"
    >
      <ListItemIcon>
        <LogoDevIcon />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItemButton>
  </React.Fragment>
);
