import React from 'react'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    // <Alert severity="error">ABOUT check it out!</Alert>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',margin:5}}>
   <Typography sx={{fontSize:35,color:'blue',fontWeight:'600'}}>This is the About Page</Typography>
    </Box>
   
  )
}

export default About