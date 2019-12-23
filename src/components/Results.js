import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const Results = props => {
  const classes = useStyles();
  const currently = props.result.currently;
  const img = currently.icon;
  const path = require(`../svg/${img}.svg`);
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <img className={classes.image} src={path} alt={img} />
          <CardContent>
            <Typography component="p">City: {props.city}</Typography>
            <Typography component="p">
              Temparature: {currently.temperature}°C
            </Typography>
            <Typography component="p">
              Status: {currently.summary}
            </Typography>
            <Typography component="p">
              Visibility: {currently.visibility.toFixed(2)}KM
            </Typography>
            <Typography component="p">
              Humidity: {(currently.humidity * 100).toFixed(2)}%
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

const useStyles = makeStyles({
  card: {
    width: 500,
    height: 315
  },
  image: {
    height: 160
  },
  container: {
    display: "inline-block",
    verticalAlign: "middle",
    marginTop: 20,
    margin: "0 auto"
  }
});

export default Results;
