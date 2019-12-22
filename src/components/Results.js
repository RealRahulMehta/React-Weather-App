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
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <img className={classes.image} src={path} alt={img} />
          <CardContent>
            <Typography component="h2">{props.city}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Temparature: {currently.temperature}
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
    height: 400
  },
  image: {
    height: 160
  }
});

export default Results;
