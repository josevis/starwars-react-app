import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    FormatAlignJustify: 'center',
    fontSize: 30
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

export default function Cards(props) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography variant="h5" component="h2">
          {props.name}
          <br />
        </Typography>
        <Typography variant="body2" component="p">
          {bull}  {`Height: ${props.height} `}
          <br />
          {bull}  {`Mass: ${props.mass} `}
          <br />
          {bull} {`Hair Color: ${props.hair_color} `}
          <br />
          {bull} {`Eye Color: ${props.eye_color} `}
          <br />
          {bull} {`Birth Year: ${props.birth_year} `}
          <br />
          {bull} {`Gender: ${props.gender} `}
        </Typography>
      </CardContent>
    </Card>
  );
}