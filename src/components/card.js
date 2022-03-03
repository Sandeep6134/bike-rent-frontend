import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SimpleAccordion from "./accordion"
import AlertDialogSlide from './alert';
import "./card.css"


export default function MediaCard(props) {
  return (
    <Card className="card" sx={{ m:3 ,maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="220"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{mx:"auto", width: 200}} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <AlertDialogSlide price={props.price}></AlertDialogSlide>
        <SimpleAccordion price={props.price}></SimpleAccordion>
      </CardActions>
    </Card>
  );
}
