'use client'
import MailIcon from '@mui/icons-material/Mail'

import Alert from '@mui/material/Alert'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'

export default function Snack () {
  const [show, setshow] = useState(true)

  return (
    <>
      <Snackbar
        open={show}
        autoHideDuration={5000}
        onClose={() => setshow(false)}
        message='This Snackbar will be dismissed in 5 seconds.'
      >
        <Alert icon={<MailIcon />}>Hello</Alert>
      </Snackbar>
    </>
  )
}
