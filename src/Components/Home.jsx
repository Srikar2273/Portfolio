import { Box, Typography } from "@mui/material";
import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {

    const [clicked, setClicked] = useState(false);

    return (
        <>
            <motion.div
                style={{ overflow: 'hidden' }}
                animate={{ x: ['-300%', '12%'] }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <motion.div
                    style={{ overflow: 'hidden' }}
                    animate={{ rotate: clicked ? 360 : 0 }}
                    transition={{duration:3, type:'just'}}
                    onClick={() => {
                        console.log("It is hitting on click event")
                        setClicked(!clicked)
                    }}
                >
                    <Typography style={{ cursor: 'pointer', userSelect: 'none' }} color='white' fontSize='70px'  >
                        HI I'm SRIKAR
                    </Typography>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Home;