import React, {Component} from 'react'
import Auxillury from '../../hoc/Auxillury'
import QuizNotification from '../../components/QuizParts/QuizNotification/QuizNotification'
import Question from '../../components/QuizParts/Question/Question'
import Answers from '../../components/QuizParts/Answers/Answers'
import styles from './QuizRunner.module.css'

class QuizRunner extends Component {
  state = {
    quizStarted: false,
    quizHeader: 'General AWS Quiz1',
    quizDetails: 'S3 is one of the most important topics in AWS cloud.  This quiz will test you S3 knowledge.',
    questions: [
      {
        questionId:1,
        questionText: "What is Docker",
        answers : [
          {label: 'Salad', type: 'salad'},
          {label: 'Bacon', type: 'bacon'},
          {label: 'Meat', type: 'meat5'},
          {label: 'Cheese', type: 'cheese'}
        ],
        rightAnswer: '2'
     },
     {
       questionId:2,
       questionText: "What is EC2",
       answers : [
         {label: 'A Short Circuit', type: 'salad'},
         {label: 'Amazon movie', type: 'bacon'},
         {label: 'Elastic Cloud Comppute', type: 'meat'},
         {label: 'File Extension', type: 'cheese'}
       ],
       rightAnswer: '3'
     },
     {
       questionId:3,
       questionText: "What is Cloud Watch",
       answers : [
         {label: 'A Logging mechanism in AWS', type: 'salad'},
         {label: 'Drone Technology', type: 'bacon'},
         {label: 'Amazon movie', type: 'meat'},
         {label: 'Latest binoculars launched by Amazon', type: 'cheese'}
       ],
       rightAnswer: '1'
     }
   ],
    currentQuestion:0
  }

  nextQuestion = (e) => {
    const currentQuestion = this.state.currentQuestion + 1;
    this.setState({currentQuestion: currentQuestion});
  }

  startQuiz = (e) => {
    this.setState({quizStarted: true});
  }

  render() {
      if(!this.state.quizStarted) {
        return (<QuizNotification headerText={this.state.quizHeader} startQuiz={this.startQuiz}
          info={this.state.quizDetails}/>)
      } else {
      return(
        <Auxillury>
          <main>

            <Question questionText={this.state.questions[this.state.currentQuestion].questionText} />
            <Answers answers={this.state.questions[this.state.currentQuestion].answers}
                rightAnswer={this.state.questions[this.state.currentQuestion].rightAnswer}
                nextQuestion={this.nextQuestion}
                questionId={this.state.questions[this.state.currentQuestion].questionId}/>

          </main>
        </Auxillury>
      )
    }
  }
}

export default QuizRunner;
