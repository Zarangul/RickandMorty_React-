import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "../style.css"

export default function Character({setCount, count, item}) {
  return (
    <Card className="item">
      <CardMedia
        sx={{ height: 300 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.species}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>setCount(count+1)} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
