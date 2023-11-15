import React from 'react'
import { useParams } from 'react-router-dom';
import { Box,Typography } from '@mui/material';
const User = () => {
    const params =useParams();
    const{id} = params;
  return (
    <div>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',margin:5}}>
   <Typography sx={{fontSize:35,color:'blue',fontWeight:'600'}}>This is <span style={{color:'red'}}>{id}</span> Page</Typography>
    </Box>
    </div>
  )
}

export default User;