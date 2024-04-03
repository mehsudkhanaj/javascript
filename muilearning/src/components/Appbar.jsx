'use client'
import { useState } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function Appbar () {
  const [value, setvalue] = useState()
  const [menu, setmenu] = useState(null)
  const [open, setopen] = useState(false)
  const handleClose = () => {
    setvalue(null)
    setopen(false)
  }
  const handleClick = e => {
    setvalue(e.currentTarget)
    setopen(true)
  }
  return (
    <>
      {/* <Button
        variant='contained'
        color='warning'
        onClick={handleClick}
        sx={{ margin: '12px 0 0 0' }}
      >
        Open
      </Button> */}
      <AppBar variant='outlined' position='relative'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* <Menu anchorEl={menu} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
          <MenuIcon />
          <Tabs
            value={value}
            onChange={(e, value) => setvalue(value)}
            indicatorColor='secondary'
            textColor='white'
            centered
          >
            <Tab label='Home' />
            <Tab label='About Us' />
            <Tab label='Services' />
          </Tabs>
          <Button color='warning' variant='contained'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  )
}

export default Appbar
