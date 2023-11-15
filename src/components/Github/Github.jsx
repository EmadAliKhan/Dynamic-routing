import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Typography } from '@mui/material';


 function Github() {
  const [githubData, setGithubData] = useState([])
  const[isLoading,setIsLoading]= useState(false)
  const getData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get("https://api.github.com/users/MerajAli1")
      setGithubData(response.data)
      // console.log(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("ERROR: " + error)
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <div>{
      isLoading?<Box sx={{display:'flex',justifyContent:'center',textAlign:'center'}}>
        <img src='https://i.stack.imgur.com/8puiO.gif' width={200}/>
      </Box>:
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',margin:5}}>
       <Typography sx={{fontSize:35,color:'blue',fontWeight:'600'}}>Number Of Followers Of Emad is :<span style={{color:'Red',fontSize:45}}>{githubData.followers}</span></Typography>
        </Box>
        }
      </div>

    </>
  );
  }
  export default Github;