'use client'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import { useState } from 'react'
function Modal1 () {
  const [open, setopen] = useState(false)
  const handleOpen = () => setopen(true)
  const handleClose = () => setopen(false)

  return (
    <>
      <Button onClick={() => setopen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setopen(false)}>
        <Box position='absolute' top='50%' left='50%'>
          <Button onClick={() => setopen(false)} variant='contained'>
            It is a modal
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default Modal1
