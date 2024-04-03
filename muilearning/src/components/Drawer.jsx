'use client'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'
const arroptions = ['Profile', 'Home', 'Contact', 'Logout']
const drawerWidth = 350
export default function Drawer1 () {
  const [drawer, setdrawer] = useState('false')
  return (
    <div>
      <Box sx={{ ml: '300px' }}>
        <Button onClick={() => setdrawer(true)}> Drawer</Button>
        <Drawer
          open={drawer}
          onClose={() => setdrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          anchor='top'
        >
          <List>
            {arroptions.map((item, i) => (
              <ListItemButton key={i}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Box>
    </div>
  )
}
