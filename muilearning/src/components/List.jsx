'use client'
import { List, Box, ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material'
function List1 () {
  return (
    <Box>
      <List sx={{ width: 300, background: 'red' }}>
        <ListItemButton>First</ListItemButton>
      </List>
    </Box>
  )
}
export default List1
