import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { TextField } from 'mui-rff';


export const MainCreateReviewForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create Review
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="review"
            name="review"
            label="Review here..."
            multiline
            fullWidth
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          FAQ (Common questions and answers you're expecting)
        </Typography>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="question1"
            name="question1"
            label="Question"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="answer1"
            name="answer1"
            label="Answer"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="question2"
            name="question2"
            label="Question"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="answer2"
            name="answer2"
            label="Answer"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
