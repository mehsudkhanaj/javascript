'use client'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Button } from '@mui/material'
import { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle'

function Dial () {
  const [open, setopen] = useState(false)
  return (
    <>
      <Button onClick={() => setopen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            You&apos;re about to delete a record. This action cannot be undone.
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setopen(!open)}>Cancel</Button>
          <Button onClick={() => setopen(!open)} color='error'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Dial
