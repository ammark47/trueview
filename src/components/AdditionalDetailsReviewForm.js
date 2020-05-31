import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { TextField } from 'mui-rff';
import { Radios } from 'mui-rff'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


export const AdditionalDetailsReviewForm = (props) => {
  const [value, setValue] = useState(2);
  const classes = useStyles()
  const { handleImageSubmit } = props

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Overall Ratings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Radios
              label="rating"
              name="rating"
              formControlProps={{ margin: 'none' }}
              radioGroupProps={{ row: true }}
              data={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
              ]}
            />
          </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom> Upload a picture </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={props.handleImageSubmit}/>
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>        
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
