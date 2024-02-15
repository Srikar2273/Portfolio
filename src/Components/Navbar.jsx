import React, { useEffect, useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import './NavBar.css';
import Lottie from 'react-lottie';
import animatedjson from '../../assets/Animation.json';
import { motion } from 'framer-motion';

const VerticalNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const options = {
    loop: false,
    autoplay: true,
    animationData: animatedjson,
  };

  return (
    <>
      <Grid container direction='column' sx={{ maxWidth: '8%', height: '99.7vh', position: 'absolute', left: '0' }} >
        {
          <Grid item>
            <motion.div
              style={{ overflow: 'hidden' }}
              animate={{ x: ['-300%', '0%'] }}
              transition={{ type: 'tween', duration: 1 }}
            >
              <Lottie options={options} />
            </motion.div>
          </Grid>
        }
        <Grid item marginTop='100%' sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Grid
            container
            direction="column"
            className={`vertical-navbar ${expanded ? 'expanded' : ''}`}
            sx={{
              width: expanded ? '40%' : '40%',
            }}
          >
            <Grid container
              direction='row'
              justifyContent='end'
              className="navbar-button"
              onClick={toggleExpand}
            >
              <motion.div
                style={{ overflow: 'hidden' }}
                animate={{ x: ['-300%', '0%'] }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <Grid item >
                  {expanded ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
                </Grid>
              </motion.div>
            </Grid>
            <Grid container direction="column" className="navbar-icons" gap={1}>
              <motion.div
                style={{ overflow: 'hidden' }}
                animate={{ x: ['-300%', '0%'] }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <NavbarIcon icon={<FaHome />} title="Home" />
                <NavbarIcon icon={<FaUser />} title="About" />
                <NavbarIcon icon={<FaCog />} title="Contact" />
              </motion.div>
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