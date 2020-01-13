import React from 'react'
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';

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
          Click on 'Start Quiz' button to start the quiz
          <br/>
          <Button onClick={props.startQuiz}>Start Quiz</Button>
        </Grid>
      </Grid>
      
    </Grid>
  )
}

export default quizNotification;
