import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function Containerr () {
  return (
    <>
      <Container maxWidth='sm' sx={{ background: 'red' }}>
        Small
      </Container>
      <Container maxWidth='md' sx={{ background: 'purple' }}>
        Medium
      </Container>
      <Container maxWidth='lg' sx={{ background: 'green' }}>
        Large
      </Container>
      <Container maxWidth='xs' sx={{ background: 'pink' }}>
        xsmall
      </Container>
      <Container maxWidth='xl' sx={{ background: 'orange' }}>
        xlarge
      </Container>
      <Container fixed sx={{ background: 'darkblue' }}>
        Fixed
      </Container>
    </>
  )
}

export default Containerr
