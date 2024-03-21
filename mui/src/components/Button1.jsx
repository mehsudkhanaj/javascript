import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react'
import {Button, Fab} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
const Button1 = () => {
  return (
    <>
    <h1>Text Button</h1>
    {/* <Button variant='contained'  color='secondary' >Click Me</Button>
    <Button variant='contained'  color='warning' href='https://google.com' >Link</Button> */}
    {/* <Button variant='outlined'  color='success'  >Link</Button> */}
    <Button variant='contained'  color='success' size="large" startIcon={<DeleteIcon/>} >Delete</Button>
    <Button variant='contained'  color='warning' size="large" endIcon={<DeleteIcon/>} >Delete</Button>
    <hr />
    <h1>Icon Button</h1>
    <IconButton color='secondary' size='large'>
      <DeleteIcon/>

    </IconButton>
    <hr />
    <h1>Click event</h1>
    <Button  variant='contained' sx={{
      backgroundColor:  "green",
       ":hover":{
        backgroundColor:  "#0f0",
        transform:  'scale(1.8)',
        textShadow:   '10px 4px #ff6347',
      },

       
    }} onClick={()=>alert('Hello')}>Click for alert</Button>

<br />
<br />

<ButtonGroup variant="contained" aria-label="Basic button group">
      <Button  color='primary'>One</Button>
      <Button variant='outlined' color='secondary'>Two</Button>
      <Button  color='warning'>Three</Button>
    </ButtonGroup>

    <h1>Vertiacal Button Group</h1>
    <ButtonGroup variant="contained" orientation='vertical' aria-label="Basic button group">
      <Button  color='primary'>One</Button>
      <Button variant='outlined' color='secondary'>Two</Button>
      <Button  color='warning'>Three</Button>
    </ButtonGroup>
    <hr />
    <h1>Floating Action button</h1>
    <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1}} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like" >
        <FavoriteIcon color='warning' />
      </Fab>
    </>
  )}
    


export default Button1