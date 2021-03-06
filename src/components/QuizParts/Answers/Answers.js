import React, {Component} from 'react';
import Answer from './Answer/Answer';
import ActionButton from '../ActionButton/ActionButton';
import styles from './Answers.module.css'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Answers extends Component {
  state = {
         ansStyles: [{
          margin: '20px',
          border: '1px solid green',
          color: 'white',
          backgroundColor: '#008CBA',
          padding: '20px',
          with: '50%',
          flex: 1,
          borderRadius: '10px'
        },
        {
         margin: '20px',
         border: '1px solid green',
         color: 'white',
         backgroundColor: '#008CBA',
         padding: '20px',
         with: '50%',
         flex: 1,
         borderRadius: '10px'
       },
       {
        margin: '20px',
        border: '1px solid green',
        borderRadius: '25px !important',
        color: 'white',
        backgroundColor: '#008CBA',
        padding: '20px',
        with: '50%',
        flex: 1,
        borderRadius: '10px'
      },
      {
       margin: '20px',
       border: '1px solid green',
      //  borderRadius: '25px !important',
       color: 'white',
       backgroundColor: '#008CBA',
       padding: '20px',
       with: '50%',
       flex: 1,
       borderRadius: '10px'
      }
     ],
    answered: false
  }

  componentWillReceiveProps(nextProps){
      const answered = false;
      const styles = [{
       margin: '20px',
       border: '1px solid green',
       color: 'white',
       backgroundColor: '#008CBA',
       padding: '20px',
       with: '50%',
       flex: 1,
       borderRadius: '10px'
     },
     {
      margin: '20px',
      border: '1px solid green',
      color: 'white',
      backgroundColor: '#008CBA',
      padding: '20px',
      with: '50%',
      flex: 1,
      borderRadius: '10px'
    },
    {
     margin: '20px',
     border: '1px solid green',
     color: 'white',
     backgroundColor: '#008CBA',
     padding: '20px',
     with: '50%',
     flex: 1,
     borderRadius: '10px'
   },
   {
    margin: '20px',
    border: '1px solid green',
    borderRadius: '25px !important',
    color: 'white',
    backgroundColor: '#008CBA',
    padding: '20px',
    with: '50%',
    flex: 1,
    borderRadius: '10px'
   }
  ];
  if(nextProps.questionId !== this.props.questionId){
      this.setState({ansStyles:styles,answered:answered});
  }
  }

  clickAction = (e) => {
    let color = '#F44336';
    if(!this.state.answered){
      if(e.target.id === this.props.rightAnswer) {
        color = '#4CAF50';
        this.props.updateCorrectAnswers();
      }
      let i = e.target.id;
      let oldStyles = { ...this.state.ansStyles };
      const indivStyle = oldStyles[i-1];
      const oldIndivStyle = {...indivStyle};

      oldIndivStyle['backgroundColor'] = color;
      oldStyles[i-1] = oldIndivStyle;
      this.setState({ansStyles: oldStyles, answered: true});
    }

  }

  render() {
    const answerSet = this.props.answers.map((eans, i) => {
      return (
          <Answer
            label={eans}
            key={i}
            id={i+1}
            classToApply={this.state.ansStyles[i]}
            onAnswer={this.clickAction}
            />
          )
    });

    let nextButton = null;
    if(this.state.answered) {
      if(!this.props.isLastQuestion) {
        nextButton = <ActionButton clickAction={this.props.nextQuestion} buttonLabel='Next Question'/>
      } else {
        nextButton = <ActionButton clickAction={this.props.showResult} buttonLabel='Finish'/>
      }
    }

    return (
      <Container fixed>
        <div className={styles.answersWrapper}>
          {answerSet}
          <Grid item xs={12} justify="center" spacing={0}>
            <Grid container justify="center" spacing={0}>
              {nextButton}
            </Grid>
          </Grid>
        </div>
      </Container>
    )
  }
}

export default Answers;
