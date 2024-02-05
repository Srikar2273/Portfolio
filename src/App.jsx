import './App.css'
import Home from './Components/Home'
import { Box } from '@mui/material'
import NavBar from './Components/Navbar'
function App() {

  return (
    <>
      <Box sx={{width:'100%', height:'100vh', border: '1px solid red'}}>
        <NavBar />
      </Box>
    </>
  )
}

export default App
