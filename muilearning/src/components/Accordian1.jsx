'use client'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
export default function Accordian1 () {
  const [accordion, setaccordion] = useState('')
  return (
    <div>
      <Accordion
        expanded={accordion === 'test1'}
        onChange={() => setaccordion('test1')}
      >
        <AccordionSummary>
          <Typography>Test 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My name is Jamshed and this is my personal website. I am a software
            developer with experience
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordion === 'Test2'}
        onChange={() => setaccordion('Test2')}
      >
        <AccordionSummary>
          <Typography>Test 2 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My name is Jamshed and this is my personal website. I am a software
            developer with experience
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
