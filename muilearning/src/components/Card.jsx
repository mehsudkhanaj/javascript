import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardActions
} from '@mui/material'
import CardContent from '@mui/material/CardContent'

function CardM () {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/463_463/1646374701.jpg?im=FitAndFill=(826,465)'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Imran khan
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Imran khan is the current Prime Minister of Pakistan and a member
              of the Pakistan Tehreek Insaaf Party This is a description of the
              card content
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CardM
