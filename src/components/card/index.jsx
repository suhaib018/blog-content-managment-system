import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TagComponent from '../tag';
import testImage from "../../assets/images/test-image.jpg"
import { Link } from 'react-router-dom';

const CardComponent = ({data}) => {
    return (
    <Link to={`/single-blog/${data?.id}`}>
    <Card sx={{ maxWidth: 345 }} >
            <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={testImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              data?.attributes?.title
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {
              data?.attributes?.Description

            }
          </Typography>
        </CardContent>
        <CardActions>
          {
              data?.attributes?.tags?.data.map(tag => {
                return (
                  <TagComponent/>
                )

              })

          }
        </CardActions>
      </Card>
      </Link>


  )
}

export default CardComponent;
