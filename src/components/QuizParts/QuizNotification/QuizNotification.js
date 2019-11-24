import React from 'react'
import Header from '../Header/Header';
import ActionButton from '../ActionButton/ActionButton';
import Grid from '@material-ui/core/Grid';

const quizNotification = (props) => {
  return (

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} justify="center">
        <Header headerText={props.headerText} />
      </Grid>
      <Grid item xs={12} justify="center">
        <Grid container justify="center" >
          {props.info}
        </Grid>
      </Grid>
      <Grid item xs={12} justify="center">
        <Grid container justify="center" >
          <ActionButton clickAction={props.startQuiz} buttonLabel='Start Quiz'/>
        </Grid>  
      </Grid>
    </Grid>
  )
}

export default quizNotification;
