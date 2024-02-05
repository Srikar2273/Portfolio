import './App.css'
import { Box } from '@mui/material'
import NavBar from './Components/Navbar'
function App() {

  return (
    <>
      <Box 
      sx={{
        width:'100%',
        height:'99vh',
        position:'relative',
        bgcolor : '#262020a8',
      }}
      >
        <Box sx={{
          maxWidth:'20%',
        }} >
        <NavBar /> 
        </Box>
      </Box>
    </>
  )
}

export default App
