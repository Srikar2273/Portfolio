import React, { useEffect, useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import './NavBar.css';
import Lottie from 'react-lottie';
import animatedjson from '../../assets/Animation.json';

const VerticalNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    console.log(animationComplete, 'ani state')
  }, []);
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
            <Lottie options={options} />
          </Grid>
          // <Grid item >
          //   {
          //     animationComplete ? (<img src='assets\letterS.png' style={{ width: '80%' }} />)
          //       :
          //       (<img src='assets\Animation.gif' style={{ width: '80%' }} />)
          //   }
          // </Grid>
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