import './App.css'
import { Box } from '@mui/material'
import NavBar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <Box sx={{
      height: '99.7vh',
      maxWidth: '100%',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#000000'
    }}>
      <NavBar />
      <Home />
    </Box>
  )
}

export default App
