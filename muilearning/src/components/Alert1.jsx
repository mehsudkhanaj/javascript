'use client'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'

export default function Alert1 () {
  const [show, setshow] = useState(true)
  return (
    <>
      {show && (
        <Alert
          onClose={() => {
            setshow(false)
          }}
          icon={<CheckIcon fontSize='inherit' />}
          severity='error'
          variant='outlined'
        >
          Here is a gentle confirmation that your action was successful.
        </Alert>
      )}
      {show && (
        <Alert
          onClose={() => setshow(false)}
          variant='filled'
          severity='success'
        >
          You have been alerted because
          <strong>your inbox is almost full</strong>. Please
        </Alert>
      )}
      <Alert severity='info'>This is an info Alert.</Alert>
      <Alert severity='warning' icon={<MailIcon />}>
        This is a warning Alert.
      </Alert>
      <Alert severity='error'>This is an error Alert.</Alert>
    </>
  )
}
