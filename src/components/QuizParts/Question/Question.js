import React from 'react';
import styles from './Question.module.css'
import Grid from '@material-ui/core/Grid';

const quesition = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <h3 className={styles.Question}>{props.questionText}</h3>
    </Grid>
  )
}

export default quesition;
