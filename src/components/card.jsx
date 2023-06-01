import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
const CardX = (props) => {
  const { body, sentiment, pos, neut, neg } = props;

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {body}
          </Typography>
          <Typography variant='h5' component='div'>
            Overall Sentiment: {sentiment}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            anan
          </Typography>
          <Typography variant='body2'>
            anan
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>anan</Button>
        </CardActions>
        <Box sx={{ width: '100%' }}>
          <p>Positive</p>
          <LinearProgress color='secondary' variant='determinate' value={pos * 100} />
          <br />
          <p>Neutral</p>
          <LinearProgress color='success' variant='determinate' value={neut * 100} />
          <br />
          <p>Negative</p>
          <LinearProgress color='inherit' variant='determinate' value={neg * 100} />
        </Box>
        <Divider>
          <AccessibleForwardIcon />
        </Divider>
      </Card>
    </>
  );
};

export default CardX;
