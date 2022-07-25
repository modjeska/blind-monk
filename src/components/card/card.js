import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './card.css'

const MediaCard = ({github, deployment, title, image, desc}) => {
  return (
    <Grid> 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="project-image"
      />
      <CardContent className="grid">
        <Typography className="grid" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className="buttons">
        <Button href={github} target="_blank" size="small">Github</Button>
        <Button href={deployment} target="_blank" size="small">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default MediaCard