import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export const  FinalizeReview = (props) => {
  const classes = useStyles();
  const { reviewInfo, image } = props

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review summary - check here before submitting
      </Typography>
      <List disablePadding>
        <Typography variant="subtitle2" gutterBottom className={classes.title}>
          Review
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.title}>
          {reviewInfo.review}
        </Typography>
        <Typography variant="subtitle2" gutterBottom className={classes.title}>
          Questions
        </Typography>
        {Object.keys(reviewInfo).map((reviewInfoKey) => {
          if (reviewInfoKey.startsWith("question")){
            const questionIndex = reviewInfoKey.slice(-1)
            return (
            <ListItem className={classes.listItem} key={reviewInfoKey}>
              <ListItemText primary={reviewInfo[reviewInfoKey]} secondary={reviewInfo["answer" + questionIndex]} />
            </ListItem>
            )
          }
        })}
      </List>
      <Typography variant="subtitle2" gutterBottom className={classes.title}>
        Rating = {reviewInfo.rating}
      </Typography>
      <Typography variant="subtitle2" gutterBottom className={classes.title}>
        Image
      </Typography>
      <CardMedia component="img" image={image.preview} />
    </React.Fragment>
  );
}
