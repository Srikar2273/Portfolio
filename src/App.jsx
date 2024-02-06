import './App.css'
import { Box } from '@mui/material'
import NavBar from './Components/Navbar'
import { useRef } from 'react'

function App() {

  return (
    <>
        <Box height='99.7vh' sx={{overflowY:'auto'}}>
        <NavBar />
        </Box>
    </>
  )
}

export default App
