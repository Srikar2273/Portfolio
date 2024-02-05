import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid } from '@mui/material';
import './NavBar.css'

const VerticalNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container direction={'column'}
        style={{
          position: 'absolute',
          left: 4,
          top: '40%',
          // backgroundColor: '#262020a8',
          width: expanded ? '6%' : '2%',
        }}
      >
        <Grid container className={`vertical-navbar ${expanded ? 'expanded' : ''}`} gap={1} >
          <Grid item className="navbar-button" onClick={toggleExpand}>
            {expanded ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
          </Grid>
          <Grid container className="navbar-icons" gap={2} >
            <Grid item className="navbar-icon" title="Home" >
              <FaHome />
              {expanded && <span className="label">Home</span>}
            </Grid>
            <Grid item className="navbar-icon" title="Profile" >
              <FaUser />
              {expanded && <span className="label">Profile</span>}
            </Grid>
            <Grid item className="navbar-icon" title="Settings" >
              <FaCog />
              {expanded && <span className="label">Settings</span>}
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </>
  );
};

export default VerticalNavbar;





// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Fade from '@mui/material/Fade';

// export default function FadeMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           'aria-labelledby': 'fade-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       TransitionComponent={Fade}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

// // import React, { useState } from 'react';
// // import {
// //   AppstoreOutlined,
// //   ContainerOutlined,
// //   DesktopOutlined,
// //   MailOutlined,
// //   PieChartOutlined,
// // } from '@ant-design/icons';
// // import { Button, Menu } from 'antd';
// // function getItem(label, key, icon, children, type) {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   };
// // }
// // const items = [
// //   getItem('Option 1', '1', <PieChartOutlined />),
// //             getItem('Option 2', '2', <DesktopOutlined />),
// //             getItem('Option 3', '3', <ContainerOutlined />),
// //             getItem('Navigation One', 'sub1', <MailOutlined />, [
// //             getItem('Option 5', '5'),
// //             getItem('Option 6', '6'),
// //             getItem('Option 7', '7'),
// //             getItem('Option 8', '8'),
// //             ]),
// //             getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //             getItem('Option 9', '9'),
// //             getItem('Option 10', '10'),
// //             getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
// //             ]),
// //             ];
// // const NavBar = () => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const toggleCollapsed = () => {
// //               setCollapsed(!collapsed);
// //   };
// //             return (
// //             <div
// //               style={{
// //                 maxWidth: '15%',
// //               }}
// //             >
// //               <Button
// //                 type="primary"
// //                 onClick={toggleCollapsed}
// //                 style={{
// //                   marginBottom: 16,
// //                 }}
// //               >
// //                 {collapsed ? '>' : '<'}
// //               </Button>
// //               <Menu
// //                 defaultSelectedKeys={['1']}
// //                 // defaultOpenKeys={['sub1']}
// //                 // mode="inline"
// //                 theme="dark"
// //                 inlineCollapsed={collapsed}
// //                 items={items}
// //               />
// //             </div>
// //             );
// // };
// //             export default NavBar;