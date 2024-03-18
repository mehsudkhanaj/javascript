import React from 'react'
import Typography from '@mui/material/Typography';
const Test = () => {
  return (
    <>
   <Typography variant='caption' mt={5} fontWeight={600}
   sx={{
    color:'red',
    width:'200px',
    height: '200px',
    border: '2px',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    bottom:'10px',
    
    align:'center',
    
    
    backgroundColor:'yellow'
   }}
   >
    This is a test page
   </Typography>

    </>
  )
}

export default Test