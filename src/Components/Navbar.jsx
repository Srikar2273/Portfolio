import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import './NavBar.css';

const VerticalNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container direction={'column'} maxWidth='8%' height='99.7vh'>
        <Grid item >
          <img src='assets\Animation.gif' style={{ width: '100%' }} />
        </Grid>
        <Grid item marginTop='100%' marginLeft='50%'>
          <Grid
            container
            direction="column"
            className={`vertical-navbar ${expanded ? 'expanded' : ''}`}
            width={expanded ? '40%' : '40%'}
          >
            <Grid container
              direction={'row'}
              justifyContent={'end'}
              className="navbar-button"
              onClick={toggleExpand}
            >
              <Grid item >
                {expanded ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
              </Grid>
            </Grid>
            <Grid container direction="column" className="navbar-icons" gap={1}>
              <NavbarIcon icon={<FaHome />} title="Home" />
              <NavbarIcon icon={<FaUser />} title="About" />
              <NavbarIcon icon={<FaCog />} title="Contact" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const NavbarIcon = ({ icon, title }) => (
  <Grid item className="navbar-icon" title={title}>
    {icon}
    <span className="label">{title}</span>
  </Grid>
);

export default VerticalNavbar;