'use client'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default function Ratingg () {
  const [rating, setrating] = useState()
  return (
    <>
      <Box>
        <Rating
          component='legend'
          precision={0.1}
          size='large'
          value={rating}
          onChange={(e, val) => setrating(val)}
        ></Rating>
        ;<Typography>Rating {rating !== undefined ? rating : 0}</Typography>
      </Box>
    </>
  )
}
